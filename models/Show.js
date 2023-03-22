const { Schema, model } = require('mongoose');
 
const showSchema = new Schema(
  {
    title: {
      type: String,
      trim: true,
      required: [true, 'Title is required.'],
    },
    creator: {
      type: String,
      trim: true,
    },
    launched: {
      type: Number,
    },
    genre: {
      type: String,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  {
    timestamps: true
  }
);

const Show = model('Show', showSchema);

module.exports = Show;
