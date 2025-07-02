const express = require('express');
const { authMiddleware } = require('../middlewares/authMiddleWare');
const { viewBooking, updateEvent, deleteEvent, uploadImage, getAdminEvents } = require('../controllers/adminController');
const isAdmin = require('../middlewares/isAdmin');
const upload = require('../middlewares/uploadImage');
const router = express.Router();

router.post('/upload', authMiddleware, isAdmin, upload.single('image'), uploadImage);

router.get("/events", authMiddleware, isAdmin, getAdminEvents);

router.get('/:id/bookings', authMiddleware, isAdmin, viewBooking)

router.put('/:id/update', authMiddleware, isAdmin, updateEvent);

router.delete('/:id/delete', authMiddleware, isAdmin, deleteEvent);



module.exports = router;