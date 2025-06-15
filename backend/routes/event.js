const express = require("express");
const router = express.Router();

const { registerEvent } = require("../controllers/eventController")
const authMiddleware = require("../middlewares/authMiddleWare")
const isAdmin = require("../middlewares/isAdmin")

router.post("/", authMiddleware, isAdmin ,registerEvent);

module.exports = router;