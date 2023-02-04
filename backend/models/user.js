const mongoose = require('mongoose');


module.exports = mongoose.model('login',
 {
     phone : String, 
     password: String,
     name : String,
      otp: Number 
    });

