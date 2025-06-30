const { StatusCodes } = require("http-status-codes");
const { CatchAsyncError } = require("../middlewares");
const { CourseService } = require("../services");
const BaseController = require("./base.controller");
const { SuccessResponse } = require("../utils");

class CourseController extends BaseController {
    constructor() {
        super(CourseService)
    }
    create = CatchAsyncError(async (req, res) => {
        if (!req.body) {
            throw new AppError("Request body is required", StatusCodes.BAD_REQUEST);
        }
      
        const data = { ...req.body, creatorId :req?.user?._id}
        const newData = await this.service.create(data);
        SuccessResponse.data = newData;
        SuccessResponse.statusCode = StatusCodes.CREATED;
        SuccessResponse.message = "Course created successfully";
        return res.status(StatusCodes.CREATED).json(SuccessResponse);
    });
}

module.exports=new CourseController();