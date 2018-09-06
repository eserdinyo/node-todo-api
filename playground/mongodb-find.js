const { MongoClient, ObjectID } = require("mongodb");


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    const db = client.db('TodoApp');
    console.log('Connected to MongoDB server');

    /* db.collection('Todos').find({
        _id: new ObjectID("5b910db4680b51ce4b580ace")
    }).toArray().then(docs => {
        console.log(JSON.stringify(docs, undefined, 2));

    }, err => {
        console.log('Unable to fetch users', err);
    }); */

    /* db.collection('Todos').find({ completed: false }).count().then(count => {
        console.log('Todos count: ', count);
    }, err => {
        console.log('Unable to fetch users', err);
    }); */


    db.collection('Users').find({ age: 30 }).toArray().then(docs => {
        console.log(JSON.stringify(docs, undefined, 2));
    });

    client.close();

})
