const Event = require('../database/event');

const registerEvent = async(req, res) => {
  try {
    const{ title, description, location, price, date, image} = req.body;

    if(!title || !date || price === undefined){
      return res.status(400).json({
        message: "Title, date and price are required"
      })
    }

    const newEvent = await Event.create({
      title,
      description,
      location,
      price,
      date,
      image,
      createdBy: req.user.id
    })

    res.status(200).json({
      message: "Event created successfully",
      event: newEvent
    });

  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
}

module.exports = {registerEvent};
