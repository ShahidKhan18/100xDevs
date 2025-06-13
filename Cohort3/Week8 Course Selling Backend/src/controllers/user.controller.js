const { CatchAsyncError } = require('../middlewares');
const { UserService } = require('../services');
const { SuccessResponse } = require('../utils');
const BaseController = require('./base.controller');
const { StatusCodes } = require("http-status-codes");

class UserController extends BaseController {
    constructor(){
       
        super(UserService);
    }
    
    logIn=CatchAsyncError(async(req,res)=>{
      const data=await this.service.logIn(req.body);
        SuccessResponse.message = "User logged In Successfully";
        SuccessResponse.data = data;

        return res.status(StatusCodes.OK).json(SuccessResponse)
    })
    

}

module.exports = new UserController();