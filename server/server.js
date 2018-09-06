const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });

const Todo = mongoose.model('Todo', {
    text: {
        type: String,
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

const newTodo = new Todo({
    text: 'Take a bread',
    completed: true,
    completedAt: 123,
});

newTodo.save().then((res) => {
    console.log(JSON.stringify(res, undefined, 2));

}, e => {
    console.log('Unable to save todo');
});