const {Router}=require("express");
const {TODOs}=require("../db")

const {showTodo,addTodo,updateTodos,deleteTodo}=require("../controllers")

const router=Router();

router.get("/todo",showTodo);
router.post("/todo",addTodo);
router.put("/todo",updateTodos);
router.delete("/todo",deleteTodo);

module.exports=router;