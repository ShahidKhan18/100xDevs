const http=require("http");
const server=http.createServer((req,res)=>{
   console.log("New Connection was Created")
   if(req.url==="/home") return res.end("Home Page")
   res.end("Somthing somthing !")
})

server.listen(3000,()=>{
    console.log("Server is listening on PORT : ",3000)
})