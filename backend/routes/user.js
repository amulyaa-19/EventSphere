const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleWare');
const { getBookedEvents } = require('../controllers/userController');
const router = express.Router();


router.get("/booked-events", authMiddleware, getBookedEvents)

module.exports = router;