const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongodb://todoapp:123qweasd@ds149682.mlab.com:49682/todo-app
mongoose.connect("mongodb://localhost:27017/TodoApp", { useNewUrlParser: true });

module.exports = { mongoose }