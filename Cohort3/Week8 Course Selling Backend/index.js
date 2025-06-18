require("dotenv").config();
const express = require("express");
const { ENVConfig, MongoDBConfig } = require("./src/config");
const { ErrorMiddlewware } = require("./src/middlewares");
const cookieParser = require("cookie-parser");

const cron = require("node-cron");
const { Session } = require("./src/models");


const app = express();

app.use(cookieParser());


app.use(require("cors")())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", require("./src/routes"));

app.get("/", (req, res) => {
  return res.json({
    message: "API Working Properly"
  })
})


cron.schedule("0 0 * * *", async () => {
  await Session.deleteMany({ $or: [{ expiresAt: { $lt: new Date() } }, { used: true }] })
})


//+ Global Middlewares
app.use(ErrorMiddlewware);

app.listen(ENVConfig.PORT, () => {
  console.log(`Server is running on port ${ENVConfig.PORT}`);
  MongoDBConfig();
})