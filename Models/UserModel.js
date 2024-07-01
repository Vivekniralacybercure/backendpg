const mongoose = require('mongoose');

const userSchema = mongoose.Schema({

    firstName : {
        type : String,
        require : true,
    } ,

    lastName : {
        type : String,
        require : true,
    } ,

    email : {
        type : String,
        require : true,
        lowercase : true,
    }

});

const user = mongoose.model('users' , userSchema);
module.exports = user;

