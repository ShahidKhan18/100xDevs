const { StatusCodes } = require("http-status-codes");
const { AppError } = require("../utils");
const BaseService = require("./base.service");
const {User}=require("../models");

class UserService extends BaseService {
    constructor(){
        super(User);
    }

    create=async function(data){
        const {name,email,password} =data
        if(!name || !email || !password){
            throw new AppError("Name, email and password are required",StatusCodes.BAD_REQUEST);
        }
        
        const existingUser = await this.model.find({email});
       
        if(existingUser.length){
            throw new AppError("User with this email already exists",StatusCodes.CONFLICT,"Error From :  UserService.create");
        }

        const newUser = await this.model.create(data);
       delete newUser._doc.password; // Remove password from the response
        return newUser;
    }
}

module.exports =new UserService();