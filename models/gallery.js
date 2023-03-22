const mongoose = require("mongoose");

var userSchema = new mongoose.Schema({
  image: {
    data: Buffer,
    contentType: String,
  },
  imagestatus:{
    type:String,
    default:"active"
  }
  
});

//Export the model
module.exports = mongoose.model("Gallery", userSchema);
