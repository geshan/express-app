var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render(
    'index',
    {
      title: 'Express with Docker',
      body: `Express is a minimal and flexible Node.js web application framework that 
      provides a robust set of features for web and mobile applications.`
    }
  );
});

module.exports = router;
