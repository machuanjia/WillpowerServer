/**
 * Created by yanshi0429 on 2017/9/25.
 */
const mongoose = require('mongoose');
const MONGODB_SERVER = 'mongodb://127.0.0.1:27017/localTest';


mongoose.Promise = global.Promise;

const connection = mongoose.createConnection(MONGODB_SERVER,(error)=>{
    if(error){
        console.log(`connect mongodb error`);
        console.error(error);
    }else{
        console.log(`connect mongodb successful...`);
    }
});

module.exports = {
  connection:connection
};