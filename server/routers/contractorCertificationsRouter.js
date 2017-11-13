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

  var certs;

  if(!body.certs) {
    certs = [body];
  } else {
    certs = body.certs;
  }

  const results = [];

  _.each(certs, (cert, index, collection) => {
    req.graphApi.addContractorCertification(query.identity, cert)
      .then(result => {
        results.push(result[0]);
        console.log('results array', results);
        console.log('collection', collection);
        if(results.length === collection.length) {
          res.send(results);
        }
      })
      .catch(err => {
        console.error(err);
        results.push(err);
      })
  })
})

module.exports = router;