const { StatusCodes } = require("http-status-codes");
const { AppError, SuccessResponse } = require("../utils");
const BaseService = require("./base.service");
const { User, Session } = require("../models");
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



        //Saved session into DB

        await Session.create({
            userId: user._id,
            refreshToken,
            expiresAt: new Date(Date.now() + 10 * 24 * 60 * 60 * 1000)
        })
        return { accessToken, refreshToken };

    }

    logout=async function(_id){
        const updatedData=await Session.findOneAndUpdate({userId:_id},{
            used:true
        } ,{ new: true })
        
        
        
    }
}

module.exports = new UserService();