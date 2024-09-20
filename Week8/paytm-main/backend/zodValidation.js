const zod=require("zod");

const userSchema=zod.object({
    username:zod.string().min(3).max(30),
    firstName:zod.string().max(50),
    lastName:zod.string().max(50),
    password:zod.string().min(6)
});

module.exports={
    userSchema
}