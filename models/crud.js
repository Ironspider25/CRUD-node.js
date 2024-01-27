const mongoose = require('mongoose');
const CRUD_MODEL = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String
    },
    password: {
        type: String
    },
});
const User = mongoose.model('User', CRUD_MODEL);
module.exports = User;