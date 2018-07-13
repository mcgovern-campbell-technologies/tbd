//  api/contractor/position
const express = require('express');
const router = express.Router();
const _ = require('lodash');

router.post('/', (req, res) => {
  const { graphApi, body } = req;
  const { contractorId, positionId } = _.mapValues(body, (value) => !isNaN(value) ? parseInt(value) : value);

  graphApi.addContractorToPosition(contractorId, positionId)
  .then(result => {
    res.send(result)
  })
  .catch(e => {
    res.status(406)
    res.send()
  })
})

router.delete('/', (req, res) => {
  const { graphApi, body } = req;
  const { contractorId, positionId } = _.mapValues(body, (value) => !isNaN(value) ? parseInt(value) : value);

  graphApi.removeContractorFromPosition(contractorId, positionId)
  .then(result => {
    res.send(result)
  })
  .catch(e => {
    res.status(406)
    res.send()
  })
})


module.exports = router
