const express = require('express');
const router = express.Router();
const _ = require('lodash');

// POST /api/project
router.post('/', (req, res) => {
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
