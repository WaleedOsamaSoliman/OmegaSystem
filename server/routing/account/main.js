const router = require("express").Router();
const login = require("./login");
const logout = require("./logout");
const checkAuth = require("./checkAuth.js");
const add = require("./add")
// const loginProccess = require("../api/account/login");

router.post("/login", login);
router.post("/logout", logout);
router.post("/add" , add)
router.get("/checkAuth", checkAuth);

module.exports = router;
