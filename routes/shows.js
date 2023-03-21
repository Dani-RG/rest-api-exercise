const express = require('express');
const router = express.Router();
const Show = require('../models/Show');

// @desc    Get all shows
// @route   GET /shows
// @access  Public
router.get('/', async (req, res, next) => {
  try {
    const shows = await Show.find();
    res.status(200).json(shows);
  } catch (error) {
    next(error)
  }
});

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

// @desc    Edit one course
// @route   PUT /courses/:courseId
// @access  Public
router.put('/:showId', async (req, res, next) => {
  const { showId } = req.params;
  try {
    await Show.findByIdAndUpdate(showId, req.body, { new: true });
    res.status(204).json({ message: 'OK' });
  } catch (error) {
    next(error)
  }
});

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