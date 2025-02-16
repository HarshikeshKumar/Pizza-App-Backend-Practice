const express = require("express");
// const bodyParser = require("body-parser");

const ServerConfig = require("./config/serverConfig.js");
const connectDB = require("./config/dbConfig.js");

const app = express();

// app.use(bodyParser.json());
// app.use(bodyParser.text());
// app.use(bodyParser.urlencoded());
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.post("/ping", (req, res) => {
  console.log(req.body);
  return res.json({
    message: "Pong",
  });
});

app.listen(ServerConfig.PORT, async () => {
  await connectDB();
  console.log(`Server is running on ${ServerConfig.PORT}...!!`);
});

// 35.5.12.8:3000 --> socket address
