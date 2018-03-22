//  /api/project

const express = require('express');
const router = express.Router();
const _ = require('lodash');

// Get a project by ID: GET /api/project?projectId=4
// Get all projects: GET /api/project
router.get('/', (req, res) => {
  const { body, query } = req;

  if (query.projectId) {
    req.graphApi.getProject(query)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.send(err)
    });
  } else {
    req.graphApi.getProjects()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.send(err)
    });
  }
});


router.post('/', (req, res) => {
  const { body, query } = req;

  req.graphApi.createProject(body)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.send(err)
    });
});



module.exports = router
