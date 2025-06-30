const {Router}=require('express')

const router = Router()

router.use("/auth",require("./auth.route"))
router.use("/course",require("./course.route"))

module.exports = router