const { objectIdSchema, createTodo } = require("../types");
const { TODOs } = require("../db");

const showTodo = async (req, res) => {
  try {
    const todos = await TODOs.find({});
    res.json({ todos });
  } catch (error) {
    res.status(404).json({ Error: error.message });
  }
};

const addTodo = async (req, res) => {
  const bodyPayload = req.body;
  const parsePayload = createTodo.safeParse(bodyPayload);
  if (!parsePayload.success) {
    res.status(411).json({
      msg: "You entered wrong Inputs",
    });
    return;
  }
  try {
    const todo = await TODOs.create({ ...bodyPayload, completed: false });
    res.json({ msg: "Todo successfully created", id: todo._id });
  } catch (error) {
    res.status(404).json({ Error: error.message });
  }
};

const updateTodos = async (req, res) => {
  const id = req.params.id;
  const parseId = objectIdSchema.safeParse(id);
  if (!parseId.success) {
    res.json({ msg: "Not a Valid ID" });
    return;
  }
  try {
    const todo = await TODOs.findById(id);
    if (!todo) {
      res.json({ msg: "Todo not found" });
      return;
    }

    await TODOs.updateOne({ _id: id }, { completed: !todo.completed });
    res.json({ msg: "Todo updated successfully ", todo });
  } catch (error) {
    res.status(404).json({ Error: error.message });
  }
};

const deleteTodo = async (req, res) => {
  const id = req.params.id;
  const parseId = objectIdSchema.safeParse(id);
  if (!parseId.success) {
    res.json({ msg: "Not a Valid ID" });
    return;
  }

  try {
    const todo = await TODOs.findById(id);
    if (!todo) {
      res.json({ msg: "TODO not Found" });
      return;
    }
    await TODOs.deleteOne({ _id: id });
    res.json({ msg: "Todo deleted successfully" });
  } catch (error) {
    res.status(404).json({ Error: error.message });
  }
};

module.exports = {
  showTodo,
  addTodo,
  updateTodos,
  deleteTodo,
};
