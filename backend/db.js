const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ppjoshi2003:MU2a5fRRa1kS1Sde@cluster0.llc93zm.mongodb.net/todos");

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo = mongoose.model("todos", todoSchema);

module.exports = {
    todo
}