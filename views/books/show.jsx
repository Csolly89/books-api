const React = require('react')
const Def = require('../default')


function show ({place}) {
    
    return (
        <Def>
            <main>
            <div className="row">
                <div className="col-sm-6">
                    <h1>{ books.name }</h1>
                    
                        
                </div>        
                <div className="col-sm-6">
                    <h3>
                    {place.showEstablished()}
                    </h3>
                    <h4>
                    Serving {place.cuisines}
                    </h4>

                    <div>
                        <h2>Rating</h2>
                        {rating}
                    </div>
                    <div>
                        <h2>Description</h2>
                        <p>N/a</p>
                    </div>
                    <a href={`/places/${place.id}/edit`} className="btn btn-warning"> 
                    Edit
                    </a>
                    <form method="POST" action={`/places/${place.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                    <div className="col-sm-6">
                        <h2>Comments</h2>
                        {comments}
                    </div>
                    </form>
                </div>    
            </div>        
            </main>
        
        </Def>
    )
}

module.exports = show
