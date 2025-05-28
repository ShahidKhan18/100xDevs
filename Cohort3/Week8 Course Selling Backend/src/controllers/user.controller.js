const { UserService } = require('../services');
const BaseController = require('./base.controller');

class UserController extends BaseController {
    constructor(){
       
        super(UserService);
    }

    

}

module.exports = new UserController();