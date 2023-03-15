const express = require('express');
const router = express.Router();
const Show = require('../models/Show');


/* GET ALL SHOWS */
router.get('/', (req, res, next) => {
  Show.find()
    .then(allShows => res.status(200).json(allShows))
    .catch(err => res.json(err));
});


/* GET ONE SHOW */ /* ¿POR QUE NO FUNCIONA SI ESTÁ COMO EN LA LEARNING UNIT? */

/* router.get('/:showId', (req, res, next) => {
  const { showId } = req.params;
 
  if (!mongoose.Types.ObjectId.isValid(showId)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }

  Show.findById(showId)
  .then(show => res.status(200).json(show))
  .catch(error => res.json(error));
}); */

// @desc    Get one course
// @route   GET /courses/:courseId
// @access  Public
router.get('/:showId', async (req, res, next) => {
  const { showId } = req.params;
  try {
    const show = await Show.findById(showId);
    res.status(200).json(show);
  } catch (error) {
    next(error)
  }
});


/* POST ONE SHOW */ /* ¿POR QUE NO FUNCIONA SI ESTÁ COMO EN LA LEARNING UNIT? */

/* router.post('/', (req, res, next) => {
  const { title, creator, launched, genre, image, description } = req.body;
 
  Show.create({ title, creator, launched, genre, image, description })
    .then(response => res.json(response))
    .catch(err => res.json(err));
}); */

// @desc    Create one course
// @route   POST /courses
// @access  Public
router.post('/', async (req, res, next) => {
  try {
    const newShow = await Show.create(req.body);
    res.status(201).json(newShow);
  } catch (error) {
    next(error)
  }
});


/* PUT EDITED SHOW */ /* ¿POR QUE NO FUNCIONA SI ESTÁ COMO EN LA LEARNING UNIT? */
/* router.put('/:showId', (req, res, next) => {
  const { showId } = req.params;
 
  if (!mongoose.Types.ObjectId.isValid(showId)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
 
  Project.findByIdAndUpdate(showId, req.body, { new: true })
    .then((updatedShow) => res.json(updatedShow))
    .catch(error => res.json(error));
}); */

// @desc    Edit one course
// @route   PUT /courses/:courseId
// @access  Public
router.put('/:showId', async (req, res, next) => {
  const { showId } = req.params;
  try {
    await Show.findByIdAndUpdate(showId, req.body, { new: true });
    //res.redirect(`/shows/${showId}`) ==> only to see on Postman if we edited right
    res.status(204).json({ message: 'OK' });
  } catch (error) {
    next(error)
  }
});


/* DELETE ONE SHOW */ /* ¿POR QUE NO FUNCIONA SI ESTÁ COMO EN LA LEARNING UNIT? */
/* router.delete('/:showId', (req, res, next) => {
  const { showId } = req.params;
  
  if (!mongoose.Types.ObjectId.isValid(showId)) {
    res.status(400).json({ message: 'Specified id is not valid' });
    return;
  }
 
  Project.findByIdAndRemove(showId)
    .then(() => res.json({ message: `Show with ${showId} is removed successfully.` }))
    .catch(error => res.json(error));
}); */

// @desc    Delete one course
// @route   DELETE /courses/:courseId
// @access  Public
router.delete('/:showId', async (req, res, next) => {
  const { showId } = req.params;
  try {
    const deletedShow = await Show.findByIdAndDelete(showId);
    res.status(200).json(deletedShow);
  } catch (error) {
    next(error)
  }
});

module.exports = router;