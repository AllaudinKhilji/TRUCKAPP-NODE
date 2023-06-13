const mongoose = require('mongoose');

const UserSchema =  mongoose.Schema({
    Name :{ type: String},
    Mail :{ type: String},
    Password : { type : String },
    
    
  });

module.exports = mongoose.model('User', UserSchema);