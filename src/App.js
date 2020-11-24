import React from 'react'
import {BrowserRouter as Router ,Route,Switch}from 'react-router-dom'
import Principal from './Principal'
import {Helmet} from 'react-helmet'
function App() { 

    const description="Hotel Ecomusic , Reserva tu habitacion en el mejor hotel de valpo"


  return (
    <div>

        <Helmet>
            <meta charset="utf-8" />
          <title>Hotel Ecomusic</title>
          <meta name="description" content={description}  data-react-helmet="true" />
        </Helmet>

      <Router>
                <Switch>
                <Route exac path="/" component={Principal}></Route>


                </Switch>
              
        </Router>
    </div>
  )
}

export default App

