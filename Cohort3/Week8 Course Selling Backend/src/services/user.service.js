const { StatusCodes } = require("http-status-codes");
const { AppError, SuccessResponse } = require("../utils");
const BaseService = require("./base.service");
const { User } = require("../models");
const { ENVConfig } = require("../config");

class UserService extends BaseService {
    constructor() {
        super(User);
    }

    create = async function (data) {
        const { name, email, password } = data
        if (!name || !email || !password) {
            throw new AppError("Name, email and password are required", StatusCodes.BAD_REQUEST);
        }

        const existingUser = await this.model.find({ email });

        if (existingUser.length) {
            throw new AppError("User with this email already exists", StatusCodes.CONFLICT, "Error From :  UserService.create");
        }

        const newUser = await this.model.create(data);
        delete newUser._doc.password; // Remove password from the response
        return newUser;
    }

    logIn = async function (data) {
        const { email, password } = data;

        console.log("email and Password", email, password)

        const user = await User.findOne({ email }).select('+password');
        if (!user) {
            throw new AppError("Email not registered", StatusCodes.NOT_FOUND, "Error : UserService.signIn")
        }

        const isPasswordMatched = await user.comparePassword(password)

        if (!isPasswordMatched) {
            throw new AppError("Incorrect Password", StatusCodes.UNAUTHORIZED, "Error : UserService.signIn")
        }

        console.log("Password Matched")

        const { accessToken,
            refreshToken } = user.generateJWTTokens()
    
        
        return { accessToken ,refreshToken};

    }
}

module.exports = new UserService();