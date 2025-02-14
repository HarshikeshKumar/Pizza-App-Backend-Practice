const express = require("express");

const ServerConfig = require("./config/serverConfig.js");

const app = express();

app.listen(ServerConfig.PORT, () => {
  console.log(`Server is running on ${ServerConfig.PORT}...!!`);
});

// 35.5.12.8:3000 --> socket address
