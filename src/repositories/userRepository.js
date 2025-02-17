const User = require("../schema/userSchema.js");
class UserRepository {
  async findUser(parameters) {
    try {
      const response = User.findOne({ ...parameters });
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  async createUser(userDetails) {
    try {
      const response = await User.create(userDetails);
      return response;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserRepository;
