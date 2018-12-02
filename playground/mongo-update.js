const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err)
        return console.log('Unable to connect to mongodb server');

    console.log('Connected to mongodb server');

    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5c03d933e7e2219703bb409a')
    }, {
            $set: {
                completed: true
            }
        }, {
            returnOriginal: false
        }).then((result) => {
            console.log(result);
        });

    db.close();
});