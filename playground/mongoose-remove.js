const { ObjectId } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// Todo.deleteMany({}).then((result) => {
//     console.log(result);
// });

// Todo.findByIdAndDelete('5c05bc4b66cc561e4baee64e').then((docs) => {
//     console.log(docs);
// });

Todo.findOneAndDelete({ _id: '5c05bc4b66cc561e4baee64e' }).then((docs) => {
    console.log(docs);
});