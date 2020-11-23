import React from 'react'
import {BrowserRouter as Router ,Route,Switch}from 'react-router-dom'
import Principal from './Principal'
import {Helmet} from 'react-helmet'
function App() { 
  return (
    <div>

        <Helmet>
          <title>Prueba Hotel Ecomusic</title>
          <meta name="description" content="Hotel Ecomusic , es un hotel ambientado  en la musica internacional y nacional , cada habitacion esta inspirada en un artista de renombre. ademas  en hotel ecomusic creemos fervientemente un pais mas sustentable "/>
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

