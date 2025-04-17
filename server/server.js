const settings = require("./config/settings");
const express = require("express");
const server = express();
const morgan = require("morgan");
const session = require("express-session");
const path = require("path");
const connection = require("./init/database");
const router = require("./routing/routes");

// check database connection

const checkConnection = async () => {
  const isConnected = await connection.isConnected();

  if (!isConnected.state) {
    if (isConnected.reason === "Error")  console.log(`[!] database "${settings.database.type}" service not Running on Port ${settings.database.port} , Please Run the Service and try again ...`);
    else console.log(`[!] Database Connection Failed : ${isConnected.reason}`);
    process.exit(1);
  }

  console.log(`[+] database ${settings.database.type} service Successfully Running on Port ${settings.database.port} `);
};

const main = async () => {
  await checkConnection();

  //the line below make the server.listen work only when u run the server.js directly [node server.js] not when u import it
  if (require.main === module) {
    server.listen(settings.backend.port, () => {
      console.log(`[+] Server now running on http://127.0.0.1:${settings.backend.port}`);
    });
  }

  if (settings.mode === "dev") {
    server.use("/", morgan("dev"));
  }

  server.use(
    "/",
    session({
      secret: "omega4pharmacies",
      resave: false,
      saveUninitialized: false,
      cookie: { secure: false },
      store: new session.MemoryStore(),
    })
  );

  //the line below used to identify the folder of the front end files to load it on the server [usually the dist folder after production]
  server.use(
    "/",
    express.static(path.join(__dirname, "../", "client", "dist"))
  );

  server.use("/", express.json());
  server.use("/", express.urlencoded({ extended: true }));
  server.use("/", router);
};

if (require.main === module) {
  main();
}
