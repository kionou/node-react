var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api',(req, res, next) =>{
  res.send({"user": ["hdhkjn","qSDdd"]})
  
});

module.exports = router;
