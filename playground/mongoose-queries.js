const { ObjectId } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');

var id = '5c0531e4d9ebbca4aa55c384';


if (!ObjectId.isValid(id))
    console.log('Object id is invalid');

Todo.find({
    _id: id
}).then((todos) => {
    console.log('Todos', todos);
}).catch((e) => console.log(e));

Todo.findOne({
    _id: id
}).then((todo) => {
    console.log('Todo', todo);
}).catch((e) => console.log(e));

Todo.findById(id).then((todo) => {
    console.log('Todo by id', todo);
}).catch((e) => console.log(e));