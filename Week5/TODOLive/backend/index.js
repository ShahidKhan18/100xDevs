const express =require('express');
const {crateTodo,updateTodo}=require('./type')
const zod=require('zod');
const app =express();
const {todo}=require('./db')
app.use(express.json());
app.get('/todos',(req,res)=>{
   
      
       
 
})

app.post('/todo',(req,res)=>{
  const createPayload = req.body;
  const parsePayload = crateTodo.safeParse(createPayload);

  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You sent a Wrong Inputs",
    });
    return;
  }

  //Put into a MongoDB

  todo.create({
    title:createPayload.title,
    description:createPayload.description
  })
})


app.put("/completed",(req,res)=>{
    const updatePayload=req.body;
    const parsePayload=updateTodo.safeParse(updatePayload);

    if(!parsePayload.success){
        res.status(411).json({
            msg:"You sent a Invalid Id"
        })
        return ;
    }
})



const port =3000;
app.listen(port,()=>{
    console.log('listening on port',port);
})