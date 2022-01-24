import React from 'react'
import Principal from './Principal'
import {Helmet} from 'react-helmet'
import Login from './Administracion/Login/login'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() { 

  return (
    <div>

        <Helmet>
         
            <meta charset="utf-8" />
          <title>Hotel Ecomusic </title>
          <meta name="description" content="Reserva en Hotel  Ecomusic, Valparaíso. Sin gastos de reserva. Excelentes precios,Gran disponibilidad,Bajos Precios,Wifi gratuito, recepción las 24 horas."  data-react-helmet="true" />
          
        </Helmet>

      <BrowserRouter>
                <Routes>
                <Route  path="/" element={<Principal/>}></Route>
                <Route path="/admin" element={<Login/>}></Route>
             
                </Routes>
              
        </BrowserRouter>
    </div>
  )
}

export default App

