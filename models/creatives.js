const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * A schema for future reviews that will be added for a given creative's profile.
 */
const reviewSchema = new Schema(
  {
    comment: {
      type: String
    },
    commenterId: {
      type: String
    },
    commenter: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Creatives"
    },
    thumbscount: {
      type: Number
    }
  },
  {
    timestamps: true
  }
);

/**
 * A schema for all the other work that a creative might produce that are not videos: articles, apps on github, etc.
 */
const otherWorkSchema = new Schema(
  {
    github: {
      type: [String]
    },
    articles: {
      type: [String]
    },
    websites: {
      type: [String]
    },
    otherlinks: {
      type: [String]
    },
    insta: {
      type: String,
      default: 0
    },
    instacount: {
      type: Number,
      default: 0
    },
    twitter: {
      type: String,
      default: 0
    },
    twittercount: {
      type: Number,
      default: 0
    },
    youtube: {
      type: String,
      default: 0
    },
    youtubecount: {
      type: Number,
      default: 0
    },
    tiktok: {
      type: String,
      default: 0
    },
    tiktokcount: {
      type: Number,
      default: 0
    }
  },
  {
    timestamps: true
  }
);

/**
 * Main schema for creatives.
 */
const creativesSchema = new Schema(
  {
    firstname: {
      type: String,
      required: true
    },
    lastname: {
      type: String,
      required: true
    },
    photo: {
      type: String
    },
    industry: {
      type: [String]
    },
    client: {
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
    price: {
      type: String,
      default: "$$"
    },
    travel: {
      type: String,
      default: "Yes"
    },
    bio: {
      type: String
    },
    rating: {
      type: Number,
      default: 5
    },
    jobs: {
      type: Number,
      default: 1
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
    reviews: [reviewSchema],
    otherWork: [otherWorkSchema]
  },
  {
    timestamps: true
  }
);

var Creatives = mongoose.model("Creatives", creativesSchema);
module.exports = Creatives;
