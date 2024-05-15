const express = require("express");
const { heandleUserSignup, heandleUserLogin } = require("../controllers/user");

const router = express.Router();

router.post("/", heandleUserSignup);
router.post("/login", heandleUserLogin);

module.exports = router;
