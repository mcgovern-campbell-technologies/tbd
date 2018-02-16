const express = require('express');
const router = express.Router();
const _ = require('lodash');

router.get('/', (req, res) => {
  const { query, graphApi } = req;
  const { identity } = query;
  graphApi.getContractorExperience(identity)
    .then(result => {
      res.send(result);
    })
})

router.post('/', (req, res) => {
  const { body, query, graphApi } = req;
  const { identity } = query;

  graphApi.addContractorExpirience(identity, body)
    .then(result => {
      res.send(result);
    })
})

module.exports = router
