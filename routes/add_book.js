const express = require('express');
const router = express.Router();
const dbConnection = require('../config/dbConnection')
const connection = dbConnection()

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body)
  const {title, author, image, description} = req.body
  connection.query("INSERT INTO books SET ?", {
    title, 
    author, 
    image, 
    description
  }, (error, result) => {
    res.redirect('/')
  })
});

module.exports = router;
