const { findUser } = require("../repositories/userRepository.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRY } = require("../config/serverConfig.js");

async function loginUser(authDetails) {
  const email = authDetails.email;
  const plainPassword = authDetails.password;

  // 1. Check if there is a registered user with the given email
  const user = await findUser({ email });

  if (!user) {
    throw { message: "No user found with the given email", statusCode: 404 };
  }

  // 2. If the user is found we need to compare plainIncommingPassword with hashedPassword
  const isPasswordValidated = await bcrypt.compare(
    plainPassword,
    user.password
  );

  if (!isPasswordValidated) {
    throw { message: "Invalid password, Please try again", ststusCode: 401 };
  }

  // If the password is validated, create a token and return it
  const token = jwt.sign({ email: user.email, id: user._id }, JWT_SECRET, {
    expiresIn: JWT_EXPIRY,
  });

  return token;
}

module.exports = {
  loginUser,
};
