const express = require("express");
const router = express.Router();

const {
  registerEvent,
  getAllEvents,
  getEventById,
  bookEvent,
  cancelBooking,
  searchEvents,
} = require("../controllers/eventController");
const authMiddleware = require("../middlewares/authMiddleWare");
const isAdmin = require("../middlewares/isAdmin");

router.post("/", authMiddleware, isAdmin, registerEvent);

router.get("/", getAllEvents);

router.get('/search', searchEvents);

router.get("/:id", authMiddleware, getEventById);

router.post('/:id/book', authMiddleware, bookEvent);

router.post('/:id/cancel', authMiddleware, cancelBooking);


module.exports = router;
