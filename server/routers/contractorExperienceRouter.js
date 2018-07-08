//  api/contractor/experience
const express = require('express');
const router = express.Router();
const _ = require('lodash');

// router.get('/', (req, res) => {
//   const { query, graphApi } = req;
//   const { identity } = query;
//   graphApi.getContractorExperience(identity)
//     .then(result => res.send(result))
// })

// router.post('/', (req, res) => {
//   const { body, query, graphApi } = req;
//   const { identity } = query;
//
//   graphApi.addContractorExperience(identity, body)
//     .then(result => res.send(result))
// })

// router.post('/position', (req, res) => {
//   const { body, query, graphApi } = req;
//
//   graphApi.connectContractorToPositionViaExperience(body)
//     .then(result => res.send(result))
// })

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

module.exports = router
