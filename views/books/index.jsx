const React = require('react')
const Def = require('../default')

function index (data) {
    let writtenBooks = data.books.map((books,i) => { 
      return (
        <div className="text-center col-sm-6" key={i} >
          <h2>
            <a href={`/books/${books.id}`} >
            {books.title}
            </a>
          </h2>
        </div>
      )
    })
    return (
      <Def>
          <main>
              <h1>Welcome to our Library</h1>
              <div className="row">
                {/* {writtenBooks} */}
              </div>
          </main>
      </Def>
  )
  }
  

module.exports = index