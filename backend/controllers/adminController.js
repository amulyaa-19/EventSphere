const mongoose = require("mongoose");
const Event = require("../database/event");

//view user details for particular event to admin
const viewBooking = async (req, res) => {
  const { id: eventId } = req.params;
  try {
    const event = await Event.findById(eventId).populate(
      "bookedUsers",
      "name email"
    );

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    return res.status(200).json({
      bookings: event.bookedUsers,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const updateEvent = async (req, res) => {
  const eventId = req.params.id;
  const { title, description, date, price, location, image } = req.body;

  if (!mongoose.Types.ObjectId.isValid(eventId)) {
    return res.status(400).json({
      message: "Invalid event ID",
    });
  }
  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    event.title = title || event.title;
    event.description = description || event.description;
    event.date = date || event.date;
    event.price = price || event.price;
    event.location = location || event.location;
    event.image = image || event.image;

    await event.save();

    return res.status(200).json({
      message: "Event updated successfully",
      event,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const deleteEvent = async (req, res) => {
  const eventId = req.params.id;
  try {
    const event = await Event.findById(eventId);
    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    await event.deleteOne();

    return res.status(200).json({
      message: "Event deleted successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const uploadImage = async(req, res) => {
  try {
    if(!req.file){
      return res.status(400).json({
        message: "No image provided"
      });
    }

    res.status(200).json({
      message: "Image uploaded successfully",
      imageUrl: req.file.path,
    })
  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
}

module.exports = {
  viewBooking,
  updateEvent,
  deleteEvent,
  uploadImage
};
