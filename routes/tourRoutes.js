const express = require('express');
const router = express.Router();
const tourController = require('../controllers/tourController');

// router.param('id', tourController.checkID);

//Check a checkBody middleware
//Check if body contains the name and price property
//If not, send 400 (bad request)
//Add it to the post handler stack

router
  .route('/')
  .get(tourController.getAllTours)
  .post(tourController.createTour);

router
  .route('/:id')
  .get(tourController.getTour)
  .patch(tourController.updateTour)
  .delete(tourController.deleteTour);

module.exports = router;
