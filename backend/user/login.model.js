const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const accountSchema = new Schema({
  username: String,
  password: String,
  accountName: String,
}, {
    collection: 'accounts'
});

const account = mongoose.model('accounts', accountSchema);

module.exports = account;