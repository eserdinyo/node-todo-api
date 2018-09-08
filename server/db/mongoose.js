const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect("mongodb://<dbuser>:<dbpassword>@ds149682.mlab.com:49682/todo-app", { useNewUrlParser: true });

module.exports = { mongoose }