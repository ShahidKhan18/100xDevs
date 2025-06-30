const { Course } = require("../models");
const BaseService = require("./base.service");

class CourseService extends BaseService{
  constructor(){
    super(Course)
  }

}

module.exports=new CourseService()

