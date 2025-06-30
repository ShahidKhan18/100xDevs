const { Router } = require('express');
const { CourseController } = require('../../controllers');
const { CourseTypes } = require('../../types');
const { ValidateRequest, AuthMiddleware } = require('../../middlewares');

const router = Router();

router.post(
  '/create',
  AuthMiddleware.userAuthenticate,
  AuthMiddleware.adminAuthenticate,
  ValidateRequest(CourseTypes.courseSchema),
  CourseController.create
);


router.get("/all",CourseController.getAll)
module.exports = router;
