/**
 * Created by yanshi0429 on 2017/9/25.
 */
const User = require('./user');
module.exports = {
    initialize:(app) => {
        User.initialize(app)
    }
}