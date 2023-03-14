const express = require('express');
const router = express.Router();
const Show = require('../models/Show');


/* GET ALL SHOWS */
router.get('/shows', (req, res, next) => {
  Show.find()
    .then(allShows => res.json(allShows))
    .catch(err => res.json(err));
});


/* GET ONE SHOW */
router.get('/shows/:showId', (req, res, next) => {
  const { showId } = req.params;
 
  if (!mongoose.Types.ObjectId.isValid(showId)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Show.findById(showId)
  .then(show => res.status(200).json(show))
  .catch(error => res.json(error));

});


/* POST ONE SHOW */
router.post('/shows', (req, res, next) => {
  const { title, creator, launched, genre, image, description } = req.body;
 
  Show.create({ title, creator, launched, genre, image, description })
    .then(response => res.json(response))
    .catch(err => res.json(err));
});


/* PUT EDITED SHOW */
router.put('/shows/:showId', (req, res, next) => {
  const { showId } = req.params;
 
  if (!mongoose.Types.ObjectId.isValid(showId)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
 
  Project.findByIdAndUpdate(showId, req.body, { new: true })
    .then((updatedShow) => res.json(updatedShow))
    .catch(error => res.json(error));
});


/* DELETE ONE SHOW */
router.delete('/shows/:showId', (req, res, next) => {
  const { showId } = req.params;
  
  if (!mongoose.Types.ObjectId.isValid(showId)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
 
  Project.findByIdAndRemove(showId)
    .then(() => res.json({ message: `Show with ${showId} is removed successfully.` }))
    .catch(error => res.json(error));
});

module.exports = router;