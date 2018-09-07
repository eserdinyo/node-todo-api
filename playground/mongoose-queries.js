const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

/* const id = "6b928feb08269322b4  sdc73216";

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
} */

/* Todo.find({
    _id: id,
}).then((todos) => {
    console.log('Todos: ', todos);
});

Todo.findOne({
    _id: id,
}).then(todo => {
    console.log('Todo: ', todo);
}) */

/* Todo.findById(id).then(todo => {
    if (!todo)
        return console.log('Id not found');

    console.log('Todo: ', todo);
}).catch(e => console.log(e)); */

const id = "5b914ddceb8ed61a1c6bae93";

if (!ObjectID.isValid(id)) {
    console.log('ID not valid');
} else {
    User.findById(id).then(user => {
        if (!user)
            return console.log('User not found');
        console.log('User: ', JSON.stringify(user, undefined, 2));
    }).catch(e => console.log(e));
}

