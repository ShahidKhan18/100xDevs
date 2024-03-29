const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;


//+ how to use body parcer to acess body in post request
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("<h1>Hello Shahid</h1>");
});

app.post("/body",(req,res)=>{

  console.log(req.body);
  res.send("Body Parcer to Acess Body")

})

app.post("/sid-json", (req, res) => {
  console.log(req.headers["authorization"]);
  res.json({
    name: "Shahid Khan",
    age: 21,
  });
});

app.get("/get-file", (req, res) => {
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
