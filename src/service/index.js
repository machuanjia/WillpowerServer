/**
 * Created by yanshi0429 on 2017/9/25.
 */
const UserService = require('./user');
const data = require('../data');

module.exports = {
  user:new UserService(data.user)
};