//  /api/position
const express = require('express');
const router = express.Router();
const _ = require('lodash');

// Create a position: POST /api/position
router.post('/', (req, res) => {
  const { body, query } = req;
  req.graphApi.createPosition(body)
    .then(result => res.send(result))
    .catch(err => res.send(err));
});

// Get all positions: GET /api/position/positionLevels
router.get('/positionLevels', (req, res) => {
  req.graphApi.getPositionLevels()
    .then(result => res.send(result))
    .catch(err => res.send(err));
});


module.exports = router
