const express = require('express');
const router = express.Router();
const dbConnection = require('../config/dbConnection')
const connection = dbConnection()

router.get('/', (req, res, next) => {     
    connection.query(`SELECT * FROM books`, (error, result) => {
        // console.log(error)
      // console.log(result)
      // res.json(result)
      res.render('books', {
        books: result,
        title: 'Books'
      })
    })
});

router.get('/delete/:id_book', (req, res, next) => {
  console.log(req.params.id_book)
  connection.query('DELETE FROM books WHERE id_book = ?', [req.params.id_book])
  res.redirect('/')
});

router.get('/addbook', function(req, res, next) {
    res.render('add_book', { title: 'Add Book' });
});


  
module.exports = router;
