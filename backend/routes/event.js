const express = require("express");
const router = express.Router();

const {
  registerEvent,
  getAllEvents,
  getEventById,
  bookEvent,
  cancelBooking,
  viewBooking,
} = require("../controllers/eventController");
const authMiddleware = require("../middlewares/authMiddleWare");
const isAdmin = require("../middlewares/isAdmin");

router.post("/", authMiddleware, isAdmin, registerEvent);

router.get("/", getAllEvents);

router.get("/:id", authMiddleware, getEventById);

router.post('/:id/book', authMiddleware, bookEvent);

router.post('/:id/cancel', authMiddleware, cancelBooking);

router.get('/:id/bookings', authMiddleware, isAdmin, viewBooking)

module.exports = router;
