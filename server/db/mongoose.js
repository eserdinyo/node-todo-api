const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://<todoapp>:<1231233fuck>@ds149682.mlab.com:49682/todo-app", { useNewUrlParser: true });

module.exports = { mongoose }