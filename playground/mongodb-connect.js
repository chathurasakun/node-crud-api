const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err)
        return console.log('Unable to connect to mongodb server');

    console.log('Connected to mongodb server');
    const db = client.db('TodoApp')

    db.collection('Todos').insertOne({
        text: 'something to',
        completed: false
    }, (err, result) => {
        if (err) {
            return console.log('unable to insert', err);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});