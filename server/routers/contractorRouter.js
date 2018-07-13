// /api/contractor

const express = require('express');
const router = express.Router();
const _ = require('lodash');
const contractorSkillsRouter = require('./contractorSkillsRouter');
const contractorCertificationsRouter = require('./contractorCertificationsRouter');
const contractorPositionRouter = require('./contractorPositionRouter');
const jwtCheck = require('./../auth/auth').jwtCheck;


// router.use(jwtCheck)
router.get('/', (req, res) => {
  if (!req.query.email) {
    res.send({ error: "no email given"});
    return;
  }
  const { email } = req.query;
  req.graphApi.getContractorByEmail(email)
    .then(result => res.send(result))
    .catch(result => res.send({error: "no Contractor found"}))
});


router.post('/', (req, res) => {
  const { body, query } = req;

  if (_.keys(body).length === 0) {
    res.send(null);
  }

  req.graphApi.createContractor(body)
    .then(result => res.send(result))
    .catch(err => res.send(err));
});

// /api/contractor/update
router.post('/update', (req, res) => {
  const { body } = req;
  req.graphApi.updateContractor(body)
    .then(result => res.send(result))
    .catch(err => {
      console.log('error when attempting to update contractor')
      console.log(err);
      res.send(err);
    });
});

// Get all contractors by roleId.
// /api/contractor/role
router.get('/role', (req, res) => {
  const { roleId } = _.mapValues(req.query, (value) => !isNaN(value) ? parseInt(value) : value);

  req.graphApi.getContractorsByRole(roleId)
    .then(result => res.send(result))
    .catch(err => {
      console.log('error when attempting to update contractor')
      console.log(err);
      res.send(err);
    });
});


router.use('/skills', contractorSkillsRouter);
router.use('/certifications', contractorCertificationsRouter);
router.use('/position', contractorPositionRouter);

module.exports = router
