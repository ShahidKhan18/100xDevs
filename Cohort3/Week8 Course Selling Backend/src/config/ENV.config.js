const ENVConfig = {
  MONGO_URI: process.env.MONGO_URI ,
  PORT: process.env.PORT,
  NODE_ENV:process.env.NODE_ENV,
  JWT_ACCESS_SECRET: process.env.JWT_ACCESS_SECRET,
  JWT_REFRESH_SECRET: process.JWT_REFRESH_SECRET
};



module.exports=ENVConfig