const express=require('express');
const zod=require('zod');

// +Zod Schema for Input Validation 
const schema=zod.array(zod.number());


/*
+ Example
! {
!   email:string.
!  password:string,
!   country:US or IN
!}
 +Zod Schema for Input Validation
 - const schema= zod.objext({
 - email:zod.string(),
 - password:zod.string(),
 - country:zod.literal("IN").or(zod.literal("US")
 - kidneys:zod.array(zod.number())
 -})
 
*/
const app = express();

app.use(express.json());

app.post("/",(req,res)=>{
    const kidneys=req.body.kidneys;
    // const kidneyLength=kidneys.length;
    const response=schema.safeParse(kidneys);
    res.send(
        response
    );
})


// -Global Caches (Error handeling Middleware)
// app.use((err,req,res,next)=>{
//     res.json({
//         msg:"Somthing UP with the Server"
//     })
// })

app.listen(3000,()=>{
    console.log('listening on   port 3000');
});