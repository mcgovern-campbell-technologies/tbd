const express = require('express');
const router = express.Router();
const _ = require('lodash');

router.get('/', (req, res) => {
  const { identity } = req.query;

  req.graphApi.getContractorCertifications(identity)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.error(err);
    })
})

router.post('/', (req, res) => {
  const { body, query } = req
  const { identity } = query

  req.graphApi.addContractorCertification(query.identity, body)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.error(err);
    })
})

module.exports = router;