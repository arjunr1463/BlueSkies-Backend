const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  coursedetail: {
    type: String,
    required: true,
  },
  placed: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  image: {
    data: Buffer,
    contentType: String,
  },
  description: {
    type: String,
    required: true,
  },
  status:{
    type:String,
    default:"active"
  }
});

//Export the model
module.exports = mongoose.model("Testimony", userSchema);
