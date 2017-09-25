/**
 * Created by yanshi0429 on 2017/9/25.
 */
const _ = require('lodash');
const mongoose = require('mongoose');

class Util {
    constructor() {

    }

    trim(text) {
        return _.isString(text) ? text.trim() : text;
    }

    generateObjectId(){
        return mongoose.Types.ObjectId();
    }
}

module.exports = new Util();