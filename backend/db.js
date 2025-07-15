/**
 * Todo {
 *   title: string,
 *   description: string,
 *   completed: boolean
 * }
 */

const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:QKnkud0ivlJv8lfR@cluster0.y1zqtec.mongodb.net/todos")  //not the right way to do for real applications

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo              //when key and value are same, you can use this shorter syntax
}
