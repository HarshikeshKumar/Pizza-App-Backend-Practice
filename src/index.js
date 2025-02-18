const express = require("express");
const cookieParser = require("cookie-parser");

const ServerConfig = require("./config/serverConfig.js");
const connectDB = require("./config/dbConfig.js");
const User = require("./schema/userSchema.js");
const userRouter = require("./routes/userRoute.js");
const cartRouter = require("./routes/cartRoute.js");
const authRouter = require("./routes/authRoute.js");
const { isLoggedIn } = require("./validation/authValidator.js");

const app = express();
app.use(cookieParser());

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

// routing middleware
// if your req routes start with /users then handle it using userRouter
app.use("/users", userRouter); // connects the router to the server
app.use("/carts", cartRouter);
app.use("/auth", authRouter);

app.get("/ping", isLoggedIn, (req, res) => {
  // controller
  console.log(req.body);
  console.log(req.cookies);
  return res.json({
    message: "Pong",
  });
});

app.listen(ServerConfig.PORT, async () => {
  await connectDB();
  console.log(`Server is running on ${ServerConfig.PORT}...!!`);
});
