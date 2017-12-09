const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const { identity } = req.query;
  console.log('in contractorSkillsRouter get', identity)
  req.graphApi.getContractorSkills(identity)
    .then(result => {
      res.send(result);
    })
})
router.post('/', (req, res) => {

  const { body, query } = req;
  const { identity } = query;
  console.log(body);
  req.graphApi.addSkillToContractor(identity, body)
    .then(result => {
      console.log(result)
      return req.graphApi.getContractorSkills(identity)
    })
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      console.error(err);
      res.send(err);
    })
})

module.exports = router;