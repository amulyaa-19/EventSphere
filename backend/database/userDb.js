const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String, 
    required: [true, 'Name is required'],
    minlength:[3,"name must contain 3 character"], 
    maxLength: 20
  },
  email: {
    type: String,
    unique: true,
    required: [true, "Email is required"]
  },
  password: {
    type:String,
    required: true,
  },
  role: {
    type: String,
    enum: ['user' , 'admin'],
    default: "user"
  }
}, {
  timestamps: true
})

module.exports = mongoose.model("User", userSchema)