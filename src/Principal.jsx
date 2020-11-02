import React,{useState,useEffect } from 'react'
import Navegador from './componentes/Navegador'
import ImgPrincipal  from './componentes/ImgPrincipal'
import Ubicacion from './componentes/Mapa/Ubicacion'
import Servicios from './componentes/Servicios/Servicios'
import Contacto from './componentes/Contacto/Contacto'
import Whatsapp from './componentes/whatsapp'
import Comentarios from './componentes/Comentarios'
import Habitacion from './componentes/Habitaciones/Habitacion'
import Nosotros from './componentes/Nosotros'
import {makeStyles,Grid} from '@material-ui/core'
import Cajon from './componentes/Cajon'
import {ThemeProvider} from '@material-ui/styles'
import theme from './themeConfig'
import CircularProgress from '@material-ui/core/CircularProgress';
import Footer from './Footer/Footer'
import Swal from 'sweetalert2'
import Icono from '../src/Imagenes/hotelecomusic2.png'

const estilos =makeStyles((theme) => ({
   


    root:{
        display:'flex'
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

   
     const[loading,setLoading]=useState(false);   

    useEffect(() => {
       
        const cambiarEstado=()=>{
            setLoading(true)
            setTimeout(()=>{
                setLoading(false)

            Swal.fire({
                title: 'Aviso!',
                html: 'Debido a la contingencia mundial del coronavirus , no estamos atendiendo, mientras tanto puedes  mantenerte informado en nuestras redes sociales ',
                imageUrl:'./iconos/hotelecomusic2.png',
                imageWidth: 400,
                imageHeight: 100,
                imageAlt: 'Custom image',
              })
            },3000)
        }

        cambiarEstado()

          
        
      

              
        




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
                    <Ubicacion></Ubicacion>
                </Grid>
            <Grid item xs={1}/> 
            <Grid item xs={1}/>   
                <Grid item xs={10}>
                     <Servicios></Servicios>
                </Grid>
            <Grid item xs={1}/> 
            <Grid item xs={1}/>   
                <Grid item xs={10}>
                     <Habitacion></Habitacion>
                </Grid>
            <Grid item xs={1}/> 
            <Grid item xs={1}/>   
                <Grid item xs={10}>
                    <Comentarios></Comentarios>
 
                </Grid>
            <Grid item xs={1}/> 
            <Grid item xs={1}/>   
                <Grid item xs={10}>
                     <Contacto></Contacto>
                </Grid>
            <Grid item xs={1}/> 

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
