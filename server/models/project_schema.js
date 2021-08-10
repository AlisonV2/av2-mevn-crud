const { Schema, model } = require('mongoose');

const ProjectSchema = new Schema(
  {
    title: { type: String },
    preview: {
      fr: { type: String },
      en: { type: String },
    },
    description: {
      fr: { type: String },
      en: { type: String },
    },
    stack: { type: String },
    thumbnail: { type: String },
    liveLink: { type: String },
    date: { 
      fr: { type: String }, 
      en: { type: String } 
    }
  }
);

module.exports = model('Projects', ProjectSchema);
