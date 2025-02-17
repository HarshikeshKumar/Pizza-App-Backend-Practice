const express = require("express");

const ServerConfig = require("./config/serverConfig.js");
const connectDB = require("./config/dbConfig.js");
const User = require("./schema/userSchema.js");
const userRouter = require("./routes/userRoute.js");
const cartRouter = require("./routes/cartRoute.js");

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

// routing middleware
// if your req routes start with /users then handle it using userRouter
app.use("/users", userRouter); // connects the router to the server

app.use("/carts", cartRouter);

app.post("/ping", (req, res) => {
  console.log(req.body);
  return res.json({
    message: "Pong",
  });
});

app.listen(ServerConfig.PORT, async () => {
  await connectDB();
  console.log(`Server is running on ${ServerConfig.PORT}...!!`);

  // For Schema testing purpose only
  // const newUser = await User.create({
  //   firstName: "jonathan",
  //   lastName: "majors",
  //   email: "a@c.com",
  //   password: "123456",
  //   mobileNumber: "1234567891",
  // });
  // console.log("Created New User");
  // console.log(newUser);
});

// 35.5.12.8:3000 --> socket address
