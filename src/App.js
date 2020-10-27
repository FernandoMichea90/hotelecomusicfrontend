import React from 'react'
import {BrowserRouter as Router ,Route,Switch}from 'react-router-dom'
import Principal from './Principal'

function App() { 
  return (
    <div>

      <Router>
                <Switch>
                <Route exac path="/" component={Principal}></Route>


                </Switch>
              
        </Router>
    </div>
  )
}

export default App

