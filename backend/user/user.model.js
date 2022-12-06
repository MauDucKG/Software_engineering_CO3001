const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  accountName: String,
}, {
    collection: 'users'
});

const user = mongoose.model('users', userSchema);

module.exports = user;

// npm install bcryptjs jsonwebtoken