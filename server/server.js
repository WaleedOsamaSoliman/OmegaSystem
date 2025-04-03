const settings = require("./config/settings");
const express = require("express");
const server = express();
const morgan = require("morgan");
const session = require("express-session");
const path = require("path");

const router = require("./routing/routes");

if (settings.mode === "dev") {
  server.use("/", morgan("dev"));
}
server.use("/", router);
server.use("/", express.json());
server.use("/", express.urlencoded({ extended: true }));

//the line below used to identify the folder of the front end files to load it on the server [usually the dist folder after production]
// express.static(path.join(__dirname, "../", "client", "dist"));

//the line below make the server.listen work only when u run the server.js directly [node server.js] not when u import it
if (require.main === module) {
  server.listen(settings.backend.port, () => {
    console.log(`Server now running on port : ${settings.backend.port}`);
  });
}
