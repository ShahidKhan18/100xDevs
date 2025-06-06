const zod=require('zod');

const crateTodo=zod.object({
    title:zod.string(),
    description:zod.string(),
})

const updateTodo=zod.object({
    id:zod.string(),
})


module.exports ={
    crateTodo,
    updateTodo,
}