//  /api/trade
const express = require('express');
const router = express.Router();
const _ = require('lodash');

// Get all trades: GET /api/trade
router.get('/', (req, res) => {
  req.graphApi.getAllTrades()
    .then(result => res.send(result))
    .catch(err => res.send(err));
});

// Create a trade: POST /api/trade
router.post('/', (req, res) => {
  const { body, query } = req;
  req.graphApi.createTrade(body)
    .then(result => res.send(result))
    .catch(err => res.send(err));
});

// Get all trades: GET /api/trade/positionLevels
router.get('/positionLevels', (req, res) => {
  req.graphApi.getPositionLevels()
    .then(result => res.send(result))
    .catch(err => res.send(err));
});


module.exports = router
