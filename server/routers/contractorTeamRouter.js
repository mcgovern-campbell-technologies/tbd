const express = require('express');
const router = express.Router();

router.put('/add', (req, res) => {
  const { body } = req;
  req.graphApi.addExperienceToTeam(body)
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    console.error(err);
    res.send(err);
  })
})

router.put('/remove', (req, res) => {
  const { body } = req;
  req.graphApi.removeExperienceFromTeam(body)
  .then(result => {
    res.send(result);
  })
  .catch(err => {
    console.error(err);
    res.send(err);
  })
})



module.exports = router;
