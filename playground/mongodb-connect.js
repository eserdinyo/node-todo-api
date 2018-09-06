// const MongoClient = require('mongodb').MongoClient;
// const ObjectID = require("mongodb").ObjectID;
const { MongoClient, ObjectID } = require("mongodb");


// Object destructuring
/* const user = { name: 'Alex', age: 27 };
const { name } = user;
const { age } = user; */    


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    const db = client.db('TodoApp');

    /* db.collection('Todos').insertOne({
        text: 'Something to do',
        completed: true,
    }, (err, res) => {
        if (err) {
            return console.log('Unable to insert todo ', err);
        }
        console.log(JSON.stringify(res.ops, undefined, 2));
    }) */

    db.collection('Users').insertOne({
        name: "Goffin",
        age: 31,
        location: "Germany"
    }, (err, res) => {
        if (err)
            console.log(err);
        console.log(JSON.stringify(res.ops, undefined, 2));
    })

    client.close();
});