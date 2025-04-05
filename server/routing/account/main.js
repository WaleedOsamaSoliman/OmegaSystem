const router = require("express").Router();
const login = require("./login");
const logout = require("./logout");
// const loginProccess = require("../api/account/login");

router.post("/login", login);
router.post("/logout", logout);

module.exports = router;
