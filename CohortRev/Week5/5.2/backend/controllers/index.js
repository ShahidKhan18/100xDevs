const { updateTodo } = require("../types");
const {TODOs}=require("../db")
const showTodo=async (req,res)=>{
    try {
        const todos= await TODOs.find({});
        req.json({todos})
    } catch (error) {
        res.status(404).json({Error:error.message});
    }

}

const addTodo=(req,res)=>{
    

}

const updateTodos=(req,res)=>{

}

const deleteTodo=(req,res)=>{

};

module.exports={
    showTodo,
    addTodo,
    updateTodo,
    deleteTodo
}