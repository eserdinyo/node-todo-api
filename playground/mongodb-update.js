const { MongoClient, ObjectID } = require("mongodb");


MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log("Unable to connect to MongoDB server");
    }
    const db = client.db('TodoApp');
    console.log('Connected to MongoDB server');

    /* db.collection('Users').findOneAndUpdate({
        _id: new ObjectID("5b90eb49dc99f329200761cb")
    }, {
            $set: {
                age: 31
            }
        }, {
            returnOriginal: false,
        }).then(res => {
            console.log(JSON.stringify(res, undefined, 2));
        }) */

    db.collection('Users').findOneAndUpdate({
        name: "Federer"
    }, {
            $set: {
                name: "Hanna",
            },
            $inc: {
                age: 1,
            }
        }, {
            returnOriginal: false,
        }).then(res => {
            console.log(res);
        })

    client.close();
})
