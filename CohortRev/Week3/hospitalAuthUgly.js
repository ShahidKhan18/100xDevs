const express=require('express')

const app=express();

app.get("/health-checkup",(req,res)=>{
    const userName=req.headers.username;
    const password=req.headers.password;
    const kidid=req.headers.id;

   
    if(userName!=="shahid" || password!=="abc123"){
        res.status(400).json({msg:"Wrong Inputs"})
        return;
    }

    if(kidid!="1" && kidid!="2"){
        res.status(400).json({msg:"Your kidneys not fine"})
        return;
    }

    res.json({
        msg:"Your kidney is Fine"
    })

})

app.listen(3000,()=>console.log('app started on port 3000'))
