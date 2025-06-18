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

    logout=CatchAsyncError(async(req,res)=>{
        const {_id}=req.user;
        await UserService.logout(_id);
        
        SuccessResponse.data=null;
        SuccessResponse.message="Logout Successfull"
        res.status(200).clearCookie("token").json(SuccessResponse);

    })
    

}

module.exports = new UserController();