const mongoose = require('mongoose');
let objectid = mongoose.Schema.Types.ObjectId;

module.exports = mongoose.model('newproduct',
 {
     user_id : {
        type : objectid,
        ref : "login"
     },
     sub_total : Number,
     phone_number : String
    });
