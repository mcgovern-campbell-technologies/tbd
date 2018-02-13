const express = require('express');
const router = express.Router();
const _ = require('lodash');


// router.get('/', (req, res) => {
//   if (!req.query) {
//     res.send({ error: "no email given"});
//     return;
//   }
//   req.graphApi.getContractorByEmail(req.query)
//     .then(result => {
//       console.log(result);
//       res.send(result);
//     })
//     .catch(result => {
//       res.send({error: "no Contractor found"});
//     })
// });

router.post('/', (req, res) => {
  const { body, query } = req;

  req.graphApi.createTeam()
    .then(result => {
      res.send(result);
    })
    .catch(err => {
      res.send(err)
    });
});

// router.post('/update', (req, res) => {
//   const { body } = req;
//   req.graphApi.updateContractor(body)
//     .then(result => {
//       res.send(result)
//     })
//     .catch(err => {
//       console.log('error when attempting to update contractor')
//       console.log(err);
//       res.send(err);
//     })
// })

module.exports = router
