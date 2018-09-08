const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
//mongodb://todoapp:123qweasd@ds149682.mlab.com:49682/todo-app
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });

module.exports = { mongoose }
