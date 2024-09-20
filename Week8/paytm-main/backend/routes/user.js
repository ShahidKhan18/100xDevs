const {Router}=require("express");
const { signUp } = require("../controllers/user");

const router=Router();

router.post("/signup",signUp)


module.exports=router;