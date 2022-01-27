const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * Main schema for marketers.
 */
const marketersSchema = new Schema(
  {
    firstname: {
      type: String
    },
    lastname: {
      type: String
    },
    photo: {
      type: String
    },
    email: {
      type: String
    },
    industry: {
      type: [String]
    },
    expertise: {
      type: [String]
    },
    role: {
      type: [String]
    },
    language: {
      type: [String]
    },
    location: {
      type: String,
      default: ""
    },
    experience: {
      type: Number,
      default: 1
    },
    bio: {
      type: String
    },
    press: {
      type: [String]
    },
    featured: {
      type: Boolean,
      default: false
    },
    ideas: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Ideas"
    },
    userAccount: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
  },
  {
    timestamps: true
  }
);

var Marketers = mongoose.model("Marketers", marketersSchema);
module.exports = Marketers;