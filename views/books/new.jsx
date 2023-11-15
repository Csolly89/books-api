const React = require('react')
const Def = require('../default')

function new_form () {
    return (
        <Def>
            <main>
                <h1>Add a New Book to our Library</h1>
                <form method="POST" action="/places">
                    <div className="form-group">
                        <label htmlFor="title">Book Title</label>
                        <input className="form-control" id="title" name="title" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="imageURL">Book Cover</label>
                        <input className="form-control" id="imageURL" name="imageURL" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="description">Book Summery</label>
                        <input className="form-control" id="description" name="description" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="quantity">Copies on hand</label>
                        <input type="number" className="form-control" id="quantity" name="quantity" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="year">Year the Book was published</label>
                        <input type="number" className="form-control" id="year" name="year" required />
                    </div>
                    <input className="btn btn-primary" type="submit" value="Add this Book to the Library" />
                </form>
            </main>
        </Def>
    )
}

module.exports = new_form