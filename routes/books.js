const express = require('express');
const router = express.Router();
const dbConnection = require('../config/dbConnection')
const connection = dbConnection()

router.get('/', (req, res, next) => {     
    connection.query(`SELECT * FROM books`, (error, result) => {
        // console.log(error)
        console.log(result)
      
    })
});
module.exports = router;
