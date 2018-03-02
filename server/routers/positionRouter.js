//  /api/position

const express = require('express');
const router = express.Router();
const _ = require('lodash');

router.post('/', (req, res) => {
  const { body, query } = req;

  req.graphApi.createPosition(body)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.send(err)
    });
});



module.exports = router
