const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    default: null,
  },
  lastname: {
    type: String,
    default: null,
  },
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  token: {
    type: String,
  },
});

const contactSchema = new mongoose.Schema({
    firstname: {
      type: String,
      default: null,
    },
    phone: {
      type: Number,
      default: null,
    },
    email: {
      type: String,
      unique: true,
    },
    linkedIn_url:{
      type: String,
      default: null,
    }
  });

  const User = mongoose.model("user", userSchema);
  const Post = mongoose.model("contactData" , contactSchema);


  module.exports = {
      User , Post
  }
