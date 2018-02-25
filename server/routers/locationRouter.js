//  /api/location

const express = require('express');
const router = express.Router();

// Create a location and add to company: POST /api/location
router.post('/', (req, res) => {
  const { body, query } = req;

  req.graphApi.createLocation(body)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.send(err)
    });
});

module.exports = router
