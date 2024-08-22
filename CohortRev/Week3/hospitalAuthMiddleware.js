const express = require("express");

const app = express();

const authMiddleWare=(req,res,next)=>{
  const userName = req.headers.username;
  const password = req.headers.password;

  if (userName !== "shahid" || password !== "abc123") {
    res.status(400).json({ msg: "Wrong Inputs" });
  }else{
    next();
  }
}

const kidCheckMiddleware=(req,res,next)=>{
    const kidid = req.query.kidneyID;
    if (kidid != "1" && kidid != "2") {
      res.status(400).json({ msg: "Your kidneys not fine" });
    }else{
        next();
    }
}

//! TO use middleware for all upcoming routes
// app.use(authMiddleWare,kidCheckMiddleware);

app.get("/health-checkup",authMiddleWare ,kidCheckMiddleware,(req, res) => {
 
  res.json({
    msg: "Your kidney is Fine",
  });
});

app.listen(3000, () => console.log("app started on port 3000"));
