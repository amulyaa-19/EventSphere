const express = require('express');
const authMiddleware = require('../middlewares/authMiddleWare');
const { viewBooking, updateEvent, deleteEvent } = require('../controllers/adminController');
const isAdmin = require('../middlewares/isAdmin')
const router = express.Router();

router.get('/:id/bookings', authMiddleware, isAdmin, viewBooking)

router.put('/:id/update', authMiddleware, isAdmin, updateEvent);

router.delete('/:id/delete', authMiddleware, isAdmin, deleteEvent);

module.exports = router;