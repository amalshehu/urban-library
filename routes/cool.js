var express = require('express')
var router = express.Router()

/* GET You're cool message */
router.get('/', function(req, res, next) {
  res.send("You're cool")
})

module.exports = router
