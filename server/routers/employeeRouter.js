const express = require('express');
const router = express.Router();
const jwtCheck = require('./../auth/auth').jwtCheck;

// router.use(jwtCheck)
router.get('/', (req, res) => {
  const { email } = req.query;
  if (!email) {
    res.send({ error: "no email given"});
  }
  req.graphApi.getEmployeeByEmail(email)
    .then(result => {
      res.send(result);
    })
    .catch(result => {
      res.send({error: "no employee found"});
    })
});

router.put('/', (req, res) => {

});

router.post('/', (req, res) => {
  if (!req.body) {
    res.send(null);
  }
  req.graphApi.getOrCreateEmployee(req.body)
    .then(result => {
      res.send(result);
    });
});

module.exports = router