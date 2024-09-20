const {Router} =require("express")
const {helloWorldController}=require("../controllers/user")
const userRouter=require("./user")

const router= Router();

router.get("/hello",helloWorldController);
router.use("/user",userRouter);

module.exports=router;