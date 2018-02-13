const express = require('express');
const router = express.Router();
const _ = require('lodash');


// router.get('/', (req, res) => {
//
// });

router.post('/', (req, res) => {
  const { body, query } = req;

  req.graphApi.createTeam(body)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.send(err)
    });
});

// router.post('/update', (req, res) => {
//
// })

module.exports = router
