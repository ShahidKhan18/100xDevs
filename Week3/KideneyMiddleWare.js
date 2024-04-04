const express = require("express");

const app = express();

app.use(express.json());

function userMiddleware(req, res, next) {
     const username = req.body.username;
     const password = req.body.password;
  if (!(username=== "shahid" && password == "pass")) {
    res.status(403).json({
      msg: "Invalid username or password",
    });
  } else {
    next();
  }
}

function KidneyMiddleware(req, res, next) {
  const kidneyID=req.query.kidneyID
  if (kidneyID != 1 && kidneyID != 2) {
    res.status(403).json({
      msg: "Invalid Kidney ID",
    });
  } else {
    next();
  }
}

app.get("/",  userMiddleware,KidneyMiddleware, (req, res) => {
  res.send("Your Kidney is Healthy");
});

app.listen(3000, () => {
  console.log("App started on Port 3000");
});
