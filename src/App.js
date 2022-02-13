import React, { useContext, useEffect,useState } from 'react'
import Principal from './Principal'
import {Helmet} from 'react-helmet'
import Login from './Administracion/Login/login'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import {createTheme} from '@material-ui/core/styles'
import {ThemeProvider} from '@material-ui/styles'
import {DashboardPage} from './Administracion/Dashboard'
import { UsuarioContext } from './Administracion/Provedores/UsuarioContext';

const theme =createTheme({
  palette: {
    primary: {
      // light: will be calculated from palette.primary.main,
      main: '#FF6600',
      contrastText: '#fffff',
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
    secondary: {
      light: '#0066ff',
      main: '#7fcd0d',
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffffff',
    },
    warning:{
      main:'#ff9800'
    },
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
})

function App() { 

  const usuario=useContext(UsuarioContext)
  const [login,setLogin]=useState(false)
  
  useEffect(()=>{

    console.log(usuario)
    if(usuario==null){
      setLogin(false)
    }else(
      setLogin(true)
    )


  },[usuario])


  return (
    <div>

        <Helmet>
         
            <meta charset="utf-8" />
          <title>Hotel Ecomusic </title>
          <meta name="description" content="Reserva en Hotel  Ecomusic, Valparaíso. Sin gastos de reserva. Excelentes precios,Gran disponibilidad,Bajos Precios,Wifi gratuito, recepción las 24 horas."  data-react-helmet="true" />
          
        </Helmet>
        <ThemeProvider theme={theme}>
      <BrowserRouter>
                <Routes>

                <Route path="/admin" element={<Login/>}></Route>
                <Route  path="/dashboard" element={<DashboardPage/>}></Route>
                <Route  path="/" element={<Principal/>}></Route>
               

              
               
                

                </Routes>
              
        </BrowserRouter>
        </ThemeProvider>
    </div>
  )
}

export default App

