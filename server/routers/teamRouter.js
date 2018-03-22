//  /api/team
const express = require('express');
const router = express.Router();
const _ = require('lodash');

// Get a team by ID: GET /api/team?teamId=4
// Get all teams: GET /api/team
router.get('/', (req, res) => {
  const { body, query } = req;

  if (query.teamId) {
    req.graphApi.getTeam(query)
    .then(result => res.send(result))
    .catch(err => res.send(err));
  } else {
    req.graphApi.getTeams()
    .then(result => res.send(result))
    .catch(err => res.send(err));
  }
});

// Create a team and add to project: POST /api/team
router.post('/', (req, res) => {
  const { body, query } = req;

  req.graphApi.createTeam(body)
    .then(result => res.send(result))
    .catch(err => res.send(err));
});

// POST /api/team/experience
// add an existing experience to an existing team
router.post('/experience', (req, res) => {
  const { body, query } = req;
  if (body.remove) {
    req.graphApi.removeExperienceFromTeam(body)
    .then(result => res.send(result))
    .catch(err => res.send(err));
  } else {
    req.graphApi.addExperienceToTeam(body)
    .then(result => res.send(result))
    .catch(err => res.send(err));
  }
});

module.exports = router
