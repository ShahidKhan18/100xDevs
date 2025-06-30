
const { ENVConfig } = require("../config");
const { User } = require("../models");
const { AppError } = require("../utils");
const catchAsyncError = require("./catchAsyncError");
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken")

const userAuthenticate = catchAsyncError(async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) throw new AppError("Authorization Header Required", StatusCodes.EXPECTATION_FAILED)

    const token = authHeader.split(" ")[1];

    if (!req.cookies["token"]) {
        throw new AppError("Unauthorized User", StatusCodes.UNAUTHORIZED)
    }

    const { _id } = jwt.verify(token, ENVConfig.JWT_ACCESS_SECRET)

    if (!_id) throw new AppError("Unauthorized User", StatusCodes.UNAUTHORIZED)

    const user = await User.findById(_id)

    req.user = user;
    next();
})

const adminAuthenticate = catchAsyncError(async (req, res, next) => {
    if (req?.user?.role !== "admin") throw new AppError("Access Denied ", StatusCodes.UNAUTHORIZED)
    next();
});


module.exports = { userAuthenticate, adminAuthenticate }