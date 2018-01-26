var express = require('express');
var router = express.Router();
var db = require('../db/queries');

router.post('/login', (req, res, next) => {
  db.getUserData(req.body.data)
  .then(data => {
    res.json(data);
  })
});


router.post('/new', (req, res, next) => {
  db.createNewUser(req.body.data)
    .then(data => {
      res.json(data)
    })
})


module.exports = router;
