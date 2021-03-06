/**
 * Created by yanshi0429 on 2017/9/25.
 */
const util = require('../util');

class UserService{
    constructor(userRepository){
        this.userRepository = userRepository;
    }

    async addUser(username,email,firstName,lastName){
       const existUser = await this.userRepository.getUserByUsername(username);
       if(existUser){
           throw new Error(`username has already exist!`);
       }
       const user = await this.userRepository.addUser(util.trim(username),email,firstName,lastName);
       return user;
    }

    async getUsers(page,size){
        return await this.userRepository.getUsers(page || 1,size || 20);
    }
}
module.exports = UserService;