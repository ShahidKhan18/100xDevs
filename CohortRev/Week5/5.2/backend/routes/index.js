const {Router}=require("express");
const {TODOs}=require("../db")

const {showTodo,addTodo,updateTodos,deleteTodo}=require("../controllers")

const router=Router();

router.get("/todos",showTodo);
router.post("/create",addTodo);
router.put("/update/:id",updateTodos);
router.delete("/delete/:id",deleteTodo);

router.all("/*",(req,res)=>{
    res.json({message:"Invalid Route"})
})

module.exports=router;