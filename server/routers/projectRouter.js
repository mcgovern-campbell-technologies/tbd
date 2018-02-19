const express = require('express');
const router = express.Router();
const _ = require('lodash');

router.post('/create', (req, res) => {
  const { body, query } = req;

  req.graphApi.createProject(body)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.send(err)
    });
});

module.exports = router
