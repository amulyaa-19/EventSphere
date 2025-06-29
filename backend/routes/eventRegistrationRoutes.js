const express = require("express");
const router = express.Router();
const { registerForEvent } = require("../controllers/eventRegistrationController");
const authMiddleware = require("../middlewares/authMiddleWare");
 

router.post("/event/register", authMiddleware, registerForEvent);

module.exports = router;
