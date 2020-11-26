import React from 'react'
import {BrowserRouter as Router ,Route,Switch}from 'react-router-dom'
import Principal from './Principal'
import {Helmet} from 'react-helmet'
function App() { 

  return (
    <div>

        <Helmet>
         
            <meta charset="utf-8" />
          <title>Hotel Ecomusic </title>
          <meta name="description" content="Reserva en Hotel  Ecomusic, Valparaíso. Sin gastos de reserva. Excelentes precios,Gran disponibilidad,Bajos Precios,Wifi gratuito, recepción las 24 horas."  data-react-helmet="true" />
          
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

