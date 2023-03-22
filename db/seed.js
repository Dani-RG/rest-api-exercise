require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const Show = require('../models/Show');
const MONGO_URL = 'mongodb://localhost:27017/tvshow-db';
const shows = require('./showsData');

console.log(shows)

mongoose
  .connect(process.env.MONGO_URL)
  .then(response  => {
    console.log(`Connected to Mongo! Database name: "${response.connections[0].name}"`);
  })
  .then(() => {
    return Show.create(shows)
  })
  .then((createdShows) => {
    console.log(`Inserted ${createdShows.length} shows in the database`)
  })
  .catch((err) => {
    console.error("Error connecting to mongo: ", err);
  })
  .finally(() => {
    mongoose.connection.close()
  })