const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/authMiddleWare");
const isAdmin = require('../middlewares/isAdmin')

router.get("/protected", authMiddleware, (req, res) => {
  res.json({
    message: "You are authorized",
    user: req.user,
  });
});

router.post('/events', authMiddleware, isAdmin, (req, res) => {
  res.json({
    message: "event created by admin"
  })
})

module.exports = router;
