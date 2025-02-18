const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: [true, "First Name is required"],
      minlength: [5, "First Name must be atleast 5 character long"],
      lowercase: true,
      trim: true, // If the user gives extra spaces then it will automatically removed
      maxlength: [
        20,
        "First Name should be less than or equal to 20 characters",
      ],
    },
    lastName: {
      type: String,
      required: [true, "First Name is required"],
      minlength: [5, "First Name must be atleast 5 character long"],
      lowercase: true,
      trim: true, // If the user gives extra spaces then it will automatically removed
      maxlength: [
        20,
        "First Name should be less than or equal to 20 characters",
      ],
    },
    mobileNumber: {
      type: String,
      trim: true,
      minlength: [10, "Phone number should be length of 10"],
      maxlength: [10, "Phone number should be length of 10"],
      unique: [true, "Phone Number is already in use"],
      required: [true, "Phone Number should be provided"],
    },
    email: {
      type: String,
      required: [true, "Email should be provided"],
      trim: true,
      unique: [true, "Email is already in use"],
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: String,
      required: [true, "Password should be provided"],
      minlength: [6, "Password should be atleast 6 character long"],
    },
  },
  {
    timestamps: true, // For Created and updated details
  }
);

userSchema.pre("save", async function () {
  // Here u can modify your user before it is saved in mongodb
  // console.log("Executing pre save hook");
  // console.log(this);
  const hashedPassword = await bcrypt.hash(this.password, 10);
  this.password = hashedPassword;
  // console.log(this);
  // console.log("Exitting pre save hook and now creating user");
});

// Now we want to create a collection........
const User = mongoose.model("User", userSchema); // collection

module.exports = User;
