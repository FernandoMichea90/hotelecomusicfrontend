import React from 'react'
import {BrowserRouter as Router ,Route,Switch}from 'react-router-dom'
import Principal from './Principal'
import {Helmet} from 'react-helmet'
function App() { 

    const description="Reserva en Hotel  Ecomusic, Valparaíso. Sin gastos de reserva. Excelentes precios,Gran disponibilidad,Bajos Precios,Wifi gratuito, recepción las 24 horas."


  return (
    <div>

        <Helmet>
          <head>
            <meta charset="utf-8" />
          <title>Hotel Ecomusic Prueba </title>
          <meta name="description" content="Reserva en Hotel  Ecomusic, Valparaíso. Sin gastos de reserva. Excelentes precios,Gran disponibilidad,Bajos Precios,Wifi gratuito, recepción las 24 horas."  data-react-helmet="true" />
          </head>
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

