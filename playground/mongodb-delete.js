// run the mongo from cmd on windows 
// mongod.exe --dbpath C:\Users\home\mongo-data

const { MongoClient, ObjectID } = require("mongodb");


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    const db = client.db('TodoApp');
    console.log('Connected to MongoDB server');

    // deleteMany
    /* db.collection('Todos').deleteMany({ title: "fugiat veniam minus" }).then(res => {
        console.log(res);
    }) */

    //deleteOne
    /* db.collection('Todos').deleteOne({ title: "quis ut nam facilis et officia qui" }).then(res => {
        console.log(res);
    }) */

    // findOneAndDelete
    /* db.collection('Todos').findOneAndDelete({ title: "delectus aut autem" }).then(res => {
        console.log(JSON.stringify(res, undefined, 2));
    }) */


    /* db.collection('Todos').deleteMany({ completed: false }).then(res => {
        console.log(res);
    }) */

    db.collection('Todos').findOneAndDelete({ _id: new ObjectID("5b912075680b51ce4b580e2f") }).then(res => {
        console.log(JSON.stringify(res, undefined, 2));
    })


    // db.close();
})
