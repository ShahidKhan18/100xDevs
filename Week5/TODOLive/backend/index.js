const express =require('express');
const {crateTodo,updateTodo}=require('./type')
const cors=require('cors');
const app =express();
const {todo}=require('./db')
app.use(express.json());
app.use(cors("https://todo-server-ayo7.onrender.com"));
app.get('/todos',async(req,res)=>{
   
    const todos= await todo.find({})
    res.json(todos);
 
})

app.post('/todo',async(req,res)=>{
  const createPayload = req.body;
  const parsePayload = crateTodo.safeParse(createPayload);

  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You sent a Wrong Inputs",
    });
    return;
  }

  //Put into a MongoDB

  await todo.create({
    title:createPayload.title,
    description:createPayload.description,
    completed:false,
  })

  res.json({
    msg:"TODO Created"
  })
})


app.put("/completed",async(req,res)=>{
    const updatePayload=req.body;
    const parsePayload=updateTodo.safeParse(updatePayload);

    if(!parsePayload.success){
        res.status(411).json({
            msg:"You sent a Invalid Id"
        })
        return ;
    }

    await todo.updateOne({_id:updatePayload.id},{completed:true})

    res.json({msg:"Todo marked as completed"})
})



const port =3000;
app.listen(port,()=>{
    console.log('listening on port',port);
})