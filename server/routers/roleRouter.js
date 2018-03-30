/*

 /api/team/roles

*/

const express = require('express');
const router = express.Router();
const _ = require('lodash');

//GET roles for specific team
router.get('/', (req, res) => {

  const { graphApi, query } = req
  const { teamId } = query

  graphApi
    .getTeamRoles(teamId)
    .then(result => res.send(result))
    .catch(err => res.send(err))
})

module.exports = router