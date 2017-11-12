const express = require('express');
const router = express.Router();
const _ = require('lodash');

router.get('/', (req, res) => {
  const { identity } = req.query;

  req.graphApi.getContractorSkills(identity)
    .then(result => {
      res.send(result);
    })
})
router.post('/', (req, res) => {
  const { body, query } = req;

  req.graphApi.addSkillToContractor(query.identity, body)
    .then(result => {
      res.send(result);
    })
    .then(err => {
      console.error(err);
    })
})

module.exports = router;