const EventRegistration = require("../database/eventRegistration");

const registerForEvent = async (req, res) => {
  try {
    const {eventId, email, college, mobile, name} = req.body;
    const userId = req.userId;
     
    if(!eventId || !name || !email || !college || !mobile) {
      return res.status(400).json({
        message: "All fields are required"
      })
    }

    const alreadyRegistered = await EventRegistration.findOne({
      eventId,
      userId,
    })

    if(alreadyRegistered){
      return res.status(400).json({
        message:"You have already registered for this event"
      })
    }

    const registration = new EventRegistration({
      eventId,
      userId,
      name,
      email,
      college,
      mobile
    })

    await registration.save();

    return res.status(200).json({
      message: "Successfully registered for the event"
    })
  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
}

module.exports = {
  registerForEvent
}