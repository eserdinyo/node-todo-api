const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true });



const User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minlength: 1
    }
})

const user = new User({
    email: "info@example.com",
})

user.save().then((res) => {
    console.log(JSON.stringify(res, undefined, 2));
}, err => {
    console.log(err.message);

})



/* const Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false,
    },
    completedAt: {
        type: Number,
        default: null
    }
}); */

/* const newTodo = new Todo({
    text: 'Take a ticket'
});

newTodo.save().then((res) => {
    console.log(JSON.stringify(res, undefined, 2));

}, e => {
    console.log('Unable to save todo');
}); */