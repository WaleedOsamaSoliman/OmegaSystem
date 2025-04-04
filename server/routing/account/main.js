const router = require("express").Router();
const login = require("./login");
// const loginProccess = require("../api/account/login");

router.post("/login", login);

module.exports = router;
