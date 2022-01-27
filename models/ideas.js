const mongoose = require("mongoose");
const Schema = mongoose.Schema;

/**
 * A schema about the account information of the creatives behind this video.
 */
const creativeInfoSchema = new Schema(
  {
    agency: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Creatives"
    },
    director: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Creatives"
    },
    dop: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Creatives"
    },
    producer: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Creatives"
    },
    influencer: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Creatives"
    }
  },
  {
    timestamps: true
  }
);

/**
 * A schema for case study information if the video is produced by LemonTree. Implement in V1.0.0.
 */
const caseStudySchema = new Schema(
  {
    description: {
      type: String,
      default: ""
    },
    brandchallenge: {
      type: String,
      default: ""
    },
    views: {
      type: Number,
      default: 0
    },
    ctr: {
      type: Number,
      default: 0
    },
    daysfinished: {
      type: Number,
      default: 0
    },
    assetsdelivered: {
      type: Number,
      default: 0
    },
    channels: {
      type: [String]
    }
  },
  {
    timestamps: true
  }
);

/**
 * A schema for future reviews that will be added for a given video.
 */
const reviewSchema = new Schema(
  {
    comment: {
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

//https://mongoosejs.com/docs/schematypes.html#objectids

/**
 * Main schema for ideas.
 */
const ideasSchema = new Schema(
  {
    title: {
      type: [String],
      required: true
    },
    client: {
      type: String
    },
    industry: {
      type: [String],
      required: true
    },
    embedLink: {
      type: String,
      required: true
    },
    type: {
      type: [String]
    },
    style: {
      type: [String]
    },
    budget: {
      type: String,
      required: true
    },
    language: {
      type: [String]
    },
    location: {
      type: [String]
    },
    interactive: {
      type: [String]
    },
    elements: {
      type: [String]
    },
    featured: {
      type: Boolean,
      default: false
    },
    relatedIdeas: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Ideas"
    },
    creator: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Creatives"
    },
    creativeInfo: [creativeInfoSchema],
    caseStudy: [caseStudySchema],
    reviews: [reviewSchema]
  },
  {
    timestamps: true
  }
);

var Ideas = mongoose.model("Ideas", ideasSchema);
module.exports = Ideas;
