const mongoose = require("mongoose");

const eventRegistrationSchema = new mongoose.Schema({
  eventId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Event",
    required: true,
  },
  userId: {
    type: String,
    ref: "User",
    required: true,
  },
  name: {
    type: String,
    required: true
  },
  college: {
    type: String,
    required: true
  },
  mobile: {
    type: String,
    required: true
  },
}, {timestamps: true}
)

module.exports = mongoose.model("EventRegistration", eventRegistrationSchema)