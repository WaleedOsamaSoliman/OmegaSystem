const express = require("express");
const router = express.Router();
const settings = require("../config/settings");
const accountRouter = require("./account/main");
const permessionRouter = require("./permessions/main")
router.get("/ping", (req, res) => {
  res.send("pong");
});

router.use(`/${settings.backend.api.path}/account/`, accountRouter);
router.use(`/${settings.backend.api.path}/permessions/` , permessionRouter)

module.exports = router;
