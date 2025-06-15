const { CatchAsyncError } = require('../middlewares');
const { UserService } = require('../services');
const { SuccessResponse, SendToken } = require('../utils');
const BaseController = require('./base.controller');
const { StatusCodes } = require("http-status-codes");

class UserController extends BaseController {
    constructor(){
       
        super(UserService);
    }
    
    logIn=CatchAsyncError(async(req,res)=>{
        const { accessToken,refreshToken }=await this.service.logIn(req.body);
        
        SendToken(res,refreshToken);
        SuccessResponse.message = "User logged In Successfully";
        SuccessResponse.data = {accessToken};
        return res.status(StatusCodes.OK).json(SuccessResponse)
    })
    

}

module.exports = new UserController();