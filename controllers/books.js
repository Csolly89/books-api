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
  db.Books.insertMany()
  .then(() => {
      res.redirect('/books')
  })
  .catch(err => {
      console.log(err)
      res.render('error404')
  })
})

// show page for each book by id
router.get('/books/:id', (req, res) => {
  Books.findById(req.params.id)
  .then(books => {
    res.json ({Books})
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

// edit/update any book currently
router.put('/:id/edit', (req, res) => {
  db.Books.findById(req.params.id)
  .then(books => {
  res.render('books/edit', { place })
  })
  .catch(err => {
    res.render('error404')
  })
})

// delete each book by their id
router.delete('/:id', (req, res) => {
  db.Books.findByIdAndDelete(req.params.id)
  .then(books => {
    res.redirect('/books')
  })
  .catch(err => {
  console.log('err', err)
  res.render('error404')
  })
})






module.exports = router