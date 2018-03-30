//  api/contractor/certifications
const express = require('express');
const router = express.Router();
const _ = require('lodash');

router.get('/', (req, res) => {
  const { identity } = req.query;
  req.graphApi.getContractorCertifications(identity)
    .then(result => res.send(result))
    .catch(err => console.error(err))
})

router.post('/', (req, res) => {
  const { body, query } = req
  const { identity } = query

  req.graphApi.addContractorCertification(query.identity, body)
    .then(result => res.send(result))
    .catch(err => {
      console.error(err);
      res.send(err);
    })
})

router.delete('/', (req, res) => {

  const { identity } =  req.query
    req.graphApi.deleteNode(identity)
    .then(result => {
      res.status(202)
      res.send()
    })
    .catch(e => {
      res.status(406)
      res.send()
    })
})

router.put('/', (req, res) => {
  const { query, body, graphApi } = req,
      { identity } =  query

  graphApi.updateNode(identity, body)
    .then(result => {

      res.status(202)
    })
    .catch(e => {
      res.status(400)
      res.send()
    })

  res.send()
})




module.exports = router;
