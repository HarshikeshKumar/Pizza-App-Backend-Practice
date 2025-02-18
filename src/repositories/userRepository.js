const User = require("../schema/userSchema.js");

async function findUser(parameters) {
  try {
    const response = User.findOne({ ...parameters });
    return response;
  } catch (error) {
    console.log(error);
  }
}

async function createUser(userDetails) {
  try {
    const response = await User.create(userDetails);
    return response;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  findUser,
  createUser,
};
