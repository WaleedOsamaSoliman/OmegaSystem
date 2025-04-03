const router = require("express").Router();
// const loginProccess = require("../api/account/login");

router.get("/login", (req, res) => {
  res.send("login page");
});

module.exports = router;
