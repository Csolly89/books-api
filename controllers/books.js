const router = require('express').Router()
const db = require('../models')

// homepage for books.. not main server
router.get('/', (req,res) => {
    db.Books.find()
    .then((books) => {
        res.json({books})
    })
    .catch(err => {
        console.log(err)
        res.render('error404')
    })
})

// page for new book form
router.get('/new', (req, res) => {
    res.render('books/new')
})

// create a new book
router.post('/', (req,res) => {
  
})

// show page for each book by id
router.get('/books/:id', (req, res) => {
  books.findById(req.params.id)
  .then(books => {
    res.render ('books/show', {books})
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

// edit/update any book currently
router.put('/books/:id', (req, res) => {
  
})

// delete each book by their id
router.delete('/book/:id', (req, res) => {
 
})






module.exports = router