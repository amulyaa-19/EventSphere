const express = require("express");
const router = express.Router();
const { registerForEvent } = require("../controllers/eventRegistrationController");
const { verifyFirebaseToken } = require("../middlewares/authMiddleWare") 

router.post("/event/register", verifyFirebaseToken, registerForEvent);

module.exports = router;
