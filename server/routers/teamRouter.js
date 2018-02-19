const express = require('express');
const router = express.Router();
const _ = require('lodash');


// Get a team by ID: GET /api/team
// router.get('/', (req, res) => {
//
// });

// Create a team and add to project: POST /api/team
router.post('/', (req, res) => {
  const { body, query } = req;

  req.graphApi.createTeam(body)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.send(err)
    });
});

// POST /api/team/experience
router.post('/experience', (req, res) => {
  const { body, query } = req;

  if (body.remove) {
    req.graphApi.removeExperienceFromTeam(body)
      .then(result => {
        res.send(result);
      })
      .catch(err => {
        res.send(err)
      });
  }
  req.graphApi.addExperienceToTeam(body)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.send(err)
    });
});

// router.post('/update', (req, res) => {
//
// })

module.exports = router
