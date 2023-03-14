
const mongoose = require('mongoose');
const { Schema, model } = mongoose;
 
const showSchema = new Schema({
  title: String,
  creator: String,
  launched: Number,
  genre: String,
  image: String,
  description: String,
});
 
module.exports = model('Show', showSchema);