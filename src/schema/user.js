/**
 * Created by yanshi0429 on 2017/9/25.
 */
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:{
        type:String
    },
    email:{
        type:String
    },
    first_name:{
        tyoe:String
    },
    last_name:{
        type:String
    },
    created_at:{
        type:Number
    }

});

module.exports = UserSchema;