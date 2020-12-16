import React,{useState,useEffect } from 'react'
import Navegador from './componentes/Navegador'
import ImgPrincipal  from './componentes/ImgPrincipal'
import Ubicacion from './componentes/Mapa/Ubicacion'
import Servicios from './componentes/Servicios/Servicios'
import Contacto from './componentes/Contacto/Contacto'
import Whatsapp from './componentes/whatsapp'
import Habitacion from './componentes/Habitaciones/Habitacion'
import Nosotros from './componentes/Nosotros'
import {makeStyles,Grid} from '@material-ui/core'
import Cajon from './componentes/Cajon'
import {ThemeProvider} from '@material-ui/styles'
import theme from './themeConfig'
import CircularProgress from '@material-ui/core/CircularProgress';
import Footer from './Footer/Footer'
import Swal from 'sweetalert2'
import Comentariosdos from './Comentarios/Comentariosdos'

const estilos =makeStyles((theme) => ({
   
    

    root:{
        display:'flex',
       
    },
    content:{
    
        flexGrow:1
    },
    circular: {
        display: 'flex',
        '& > * + *': {
      
        },
        margin:'50vh 48vw'
      },

       
    
    }))
    

const Principal = () => {

   
     const[loading]=useState(false);   

    useEffect(() => {
       /*
        const cambiarEstado=()=>{
            setLoading(true)
            setTimeout(()=>{
                setLoading(false)

            Swal.fire({
                title: 'Estamos de vuelta !',
                html: '<p> Hotel Ecomusic empieza a  funcionar   con todas las condiciones sanitarias  correspondientes a partir del 20 de noviembre. </p> Reserva tu habitacion y ven a tener tu merecido descanso a la joya del pacifico!!! ',
                imageUrl:'./iconos/hotelecomusic2.png',
                imageWidth: 400,
                imageHeight: 100,
                imageAlt: 'Hotel Ecomusic, habitaciones para reservar en valparaiso  hoteles en valparaiso',
              })
            },1000)
        }

        cambiarEstado()
*/
          
        
      
        Swal.fire({
            imageUrl:'./iconos/hotelecomusic.png',
           
            html: '<p> Hotel Ecomusic empieza a  funcionar   con todas las condiciones sanitarias  correspondientes a partir del 20 de noviembre. </p> Reserva tu habitacion y ven a tener tu merecido descanso a la joya del pacifico!!! ',
          
            imageAlt: 'Hotel Ecomusic, habitaciones para reservar en valparaiso  hoteles en valparaiso',
          })
              
        




    }, [])


    const clases=estilos()
    const [abrir,setAbrir]=useState(false)
    const accionAbrir=()=>{
        setAbrir(!abrir)
    }


if(loading)
{
    return(

        <ThemeProvider theme={theme}> 
        <div className={clases.circular}>
    
      <CircularProgress color="primary"  />
    </div>
    </ThemeProvider>
    )
}else{
        return (
            <div>
            
        <ThemeProvider theme={theme}>

<div className={clases.root}>
     <Navegador accionAbrir={accionAbrir} ></Navegador>



        <main>
        <Grid container >
            
                <Grid item xs={12}>
                    <ImgPrincipal></ImgPrincipal>
                </Grid>
           
            <Grid item xs={1}/>   
                <Grid item xs={10}>
                    <Nosotros ></Nosotros>
                </Grid>
            <Grid item xs={1}/> 

            <Grid item xs={1}/>   
                <Grid item xs={10}>
                     <Habitacion></Habitacion>
                </Grid>
            <Grid item xs={1}/> 
            
            <Grid item xs={1}/>   
                <Grid item xs={10}>
                     <Servicios></Servicios>
                </Grid>
                <Grid item xs={1}/>   
          
            <Grid item xs={1}/>   
                <Grid item xs={10}>
                    <Comentariosdos></Comentariosdos>
 
                </Grid>
            <Grid item xs={1}/> 
           
           
                <Grid item xs={12}>
                    <Ubicacion></Ubicacion>
                </Grid>
           
            <Footer></Footer>


        </Grid>    

        <Whatsapp></Whatsapp>
         <Cajon variant="temporary" open={abrir} onClose={accionAbrir} ></Cajon>

            



           
     </main>
</div>
</ThemeProvider>

        </div>
                )
    } 
}

export default Principal
