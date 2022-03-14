const React = require('react')
const Def = require('./default')

function home () {
  return (
    <Def>
        <main>
          <h1>REST Rant</h1>
          <a href='/places'>Come see our places</a>
          <div>
            <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1081&q=40/50/100"  alt="Steam Rice"/>
            <div>
            Photo by <a href="https://unsplash.com/@briewilly?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Chad Montano</a> on <a href="https://unsplash.com/s/photos/food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
            </div>
          </div>
          <a href="/places">
            <button className="btn-primary">Places Page</button>
          </a>
        </main>
    </Def>
  )
}

module.exports = home
