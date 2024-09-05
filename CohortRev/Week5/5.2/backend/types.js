const zod=require("zod");

const createTodo=zod.object({
    title:zod.string(),
    description:zod.string()
})


const objectIdSchema=zod.string()
  .regex(/^[0-9a-fA-F]{24}$/, { message: "Invalid ObjectId format" });

module.exports = {
  createTodo,
  objectIdSchema,
};