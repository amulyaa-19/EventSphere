const Event = require("../database/event");
const mongoose = require("mongoose");

//to create an event
const registerEvent = async (req, res) => {
  try {
    const { title, description, location, price, date, image } = req.body;

    if (!title || !date || price === undefined) {
      return res.status(400).json({
        message: "Title, date and price are required",
      });
    }

    const newEvent = await Event.create({
      title,
      description,
      location,
      price,
      date,
      image,
      createdBy: req.user.id,
    });

    res.status(200).json({
      message: "Event created successfully",
      event: newEvent,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const getAllEvents = async (req, res) => {
  try {
    const events = await Event.find().sort({ date: 1 });
    res.status(200).json(events);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const getEventById = async (req, res) => {
  const { id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      message: "Invalid event id",
    });
  }
  try {
    const event = await Event.findById(req.params.id);

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    res.status(200).json({
      event,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const bookEvent = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({
      message: "Invalid event id",
    });
  }

  try {
    const event = await Event.findById(id);

    if (!event) {
      return res.status(404).json({
        message: "Event not found",
      });
    }
    if (event.bookedUsers.includes(req.user.id)) {
      return res.status(400).json({
        message: "You have already registered for this event",
      });
    }

    event.bookedUsers.push(req.user.id);
    await event.save();

    res.status(200).json({
      message: "Event booked successfully",
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

const cancelBooking = async  (req, res) => {
  const eventId = req.params.id;
  const userId = req.user.id;

  try {
    const event = await Event.findById(eventId);

    if(!event){
      return res.status(404).json({
        message: "Event not found"
      })
    }

    if(!event.bookedUsers || !event.bookedUsers.includes(userId)){
      return res.status(400).json({
        message: "You haven't booked this event"
      })
    }

    event.bookedUsers = event.bookedUsers.filter(
      (id) => id.toString() !== userId.toString()
    )

    await event.save();

    return res.status(200).json({
      message: "Booking cancelled successfully"
    })
  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
}

const viewBooking = async (req, res) => {
  const { id: eventId} = req.params;
  try {
    const event = await Event.findById(eventId).populate("bookedUsers", "name email");

    if(!event){
      return res.status(404).json({
        message: "Event not found"
      })
    }

    return res.status(200).json({
      bookings: event.bookedUsers
    })

  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
}


module.exports = {
  registerEvent,
  getAllEvents,
  getEventById,
  bookEvent,
  cancelBooking,
  viewBooking,
};
