process.loadEnvFile();

console.log("Hello ", process.env.name, " !")

const http=require("http");
const server=http.createServer((req,res)=>{
   console.log("New Connection was Created")
   if(req.url==="/home") return res.end("Home Page")
   res.end("Somthing somthing !")

})
const port=process.env.PORT
server.listen(port,()=>{
    console.log("Server is listening on PORT : ",port)
})