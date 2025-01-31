const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  dueDate:{
    type: Date,
    required: true,
  },
  completed: {
    type: Boolean,
    required: true,
  },
  important: {
    type: Boolean,
    default: true
  },
  userId: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('Todo', TodoSchema)
