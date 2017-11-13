const express = require('express');
const router = express.Router();
const _ = require('lodash');
const contractorSkillsRouter = require('./contractorSkillsRouter');
const contractorCertificaitonsRouter = require('./contractorCertificationsRouter');
const jwtCheck = require('./../auth/auth').jwtCheck;

// router.use(jwtCheck)
router.get('/', (req, res) => {
  const { email } = req.query;
  if (!email) {
    res.send({ error: "no email given"});
  }
  req.graphApi.getContractorByEmail(email)
    .then(result => {
      console.log(result);
      res.send(result);
    })
    .catch(result => {
      res.send({error: "no Contractor found"});
    })
});

router.post('/', (req, res) => {
  
  const { body, query } = req;

  if (_.keys(body).length === 0) {
    res.send(null);
  }
  
  req.graphApi.createContractor(body)
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.send(err)
    });
});

router.use('/skills', contractorSkillsRouter);
router.use('/certifications', contractorCertificaitonsRouter);


module.exports = router