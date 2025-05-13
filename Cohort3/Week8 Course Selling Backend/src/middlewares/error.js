const { StatusCodes } = require("http-status-codes");
const { ErrorResponse } = require("../utils");

const errorMiddleware = (err, req, res, next) => {
    ErrorResponse.statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
    ErrorResponse.message = err.message || "Internal Server Error";
    
    ErrorResponse.error.explanation= err.explanation || "An unexpected error occurred";  
    res.status(err.statusCode).json(ErrorResponse);
}

module.exports = errorMiddleware;