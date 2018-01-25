var express = require('express');
var router = express.Router();
var db = require('../db/queries');

/* GET home page. */
router.get('/existingUser', (req, res, next) => {
  db.checkIfExists(user)
  .then(data => {
    res.status(200).json(data);
  })
  .catch(err =>{
    res.status(500).json(err)
  })
});


router.get('/test',(req, res, next) => {
  res.send({key: 'it worked'})
})


module.exports = router;
