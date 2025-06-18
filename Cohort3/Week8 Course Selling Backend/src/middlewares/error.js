const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils");
const { ENVConfig } = require("../config");
const { ZodError } = require("zod");

const errorMiddleware = (err, req, res, next) => {
    ErrorResponse.statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    ErrorResponse.message = err.message || "Internal Server Error";

    // Handle Zod validation error
    if (err instanceof ZodError) {
        const firstIssue = err.issues[0];
        ErrorResponse.statusCode = StatusCodes.BAD_REQUEST;
        ErrorResponse.message = `${firstIssue.message}`;
        ErrorResponse.error = {
            path: firstIssue.path.join("."),
            message: firstIssue.message,
        };
      }
    

    // Handle JWT token errors
    if (err.name === "JsonWebTokenError" || err.name === "TokenExpiredError") {
        ErrorResponse.statusCode = StatusCodes.UNAUTHORIZED;
        ErrorResponse.message = "Invalid or expired token";
        ErrorResponse.error = {
            path: "authorization",
            message: err.message,
        };
    }

    
    if (ENVConfig.NODE_ENV === "development") { ErrorResponse.error.explanation = err.explanation || "An unexpected error occurred"; }else{

        delete ErrorResponse.error
    }
    // console.error("Error:", err);

    
    res.status(ErrorResponse.statusCode).json(ErrorResponse);
}

module.exports = errorMiddleware;