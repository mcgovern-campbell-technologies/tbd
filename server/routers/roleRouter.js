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

router.post('/', (req, res) => {

  const { graphApi, query, body } = req
  const { teamId } = query

  graphApi
    .createTeamRole(parseInt(teamId), body)
    .then(result => res.send(result))
    .catch(err => res.send(err))

})

router.delete('/', (req, res) => {

  const { graphApi, query } = req
  const { roleId } = query

  graphApi
    .deleteNode(parseInt(roleId))
    .then(result => res.send(result))
    .catch(err => res.send(err))
})

router.put('/', (req, res) => {
  const { graphApi, query, body } = req
  const { roleId } = query

  graphApi
    .updateNode(parseInt(roleId), body)
    .then(result => res.send(result))
    .catch(err => res.send(err))
})

module.exports = router