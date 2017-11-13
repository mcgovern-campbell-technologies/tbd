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
  var skills;

  if(!body.skills) {
    skills = [body];
  } else {
    skills = body.skills;
  }

  const results = [];

  console.log(skills);

  _.each(skills, (skill, index, collection) => {
    req.graphApi.addSkillToContractor(query.identity, skill)
      .then(result => {
        results.push(result[0]);
        console.log('results array',ection);
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