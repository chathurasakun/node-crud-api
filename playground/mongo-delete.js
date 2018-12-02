const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err)
        return console.log('Unable to connect to mongodb server');

    console.log('Connected to mongodb server');

    //delete many
    // db.collection('Todos').deleteMany({ completed: false }).then((result) => {
    //     console.log(result);
    // });

    //delete one record
    // db.collection('Todos').deleteOne({ completed: false }).then((result) => {
    //     console.log(result);
    // });

    //find one and delete
    db.collection('Todos').findOneAndDelete({ _id: new ObjectID('5c03b63b66cc561e4baeb64f') }).then((result) => {
        console.log(result);
    });

    db.close();
});