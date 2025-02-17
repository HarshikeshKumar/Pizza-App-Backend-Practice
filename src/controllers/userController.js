const UserRepository = require("../repositories/userRepository");
const UserService = require("../services/userService.js");

async function createUser(req, res) {
  //console.log("Create User Controller called");
  //console.log(req.body);
  const userService = new UserService(new UserRepository());

  try {
    const response = await userService.registerUser(req.body);
    return res.status(201).json({
      message: "Successfully registered the user",
      success: true,
      data: response,
      error: {},
    });
  } catch (error) {
    return res.status(error.statusCode).json({
      success: false,
      message: error.reason,
      data: {},
      error: error,
    });
  }
}

module.exports = {
  createUser,
};
