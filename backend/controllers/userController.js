const Event = require('../database/event');

//this will allow logged in users to view their bookings
const getBookedEvents = async (req, res) => {
  try {
    const userId = req.user.id;
    const events = await Event.find({bookedUsers: userId});

    res.status(200).json({
      bookedEvents: events
    })
  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
}

module.exports = {getBookedEvents};
