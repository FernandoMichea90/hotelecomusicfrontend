import React from 'react'
import './css/principal.css'
import Arbol from '../iconos/arbol.png'
import { makeStyles,Typography,Grid } from '@material-ui/core';
import Escalera from '../Imagenes/escalera.png'

const estilos =makeStyles((theme) => ({

    margenArriba:{
        paddingTop:"200px",
        textAlign:"center",
        position:"relative"

    },
    divTexto:{
        position:'relative',
        margin:"auto",
        height:"100%",
        width:"100%",

    },
    imagenEscalera:{

        width:"100%",

        [theme.breakpoints.down('sm')]: {
            width:"70%",

        }

    },
    texto:{

        fontSize:"2vw",
        color: "#707070",
        [theme.breakpoints.down('sm')]: {
            fontSize:'20px',
            textAlign: 'center'
        }

        
    },
    imagen:{

        position: "fixed",
    top: "0",
    left: "0",
    bottom:"0",
    right:"0",
    margin:"auto",
    width: "27vw",
    zIndex: "-1",
    opacity: "0.3",
    [theme.breakpoints.down('sm')]: {
        top: "0",
        left: "0",
        right: "0",
        bottom: "0",
        opacity: "0.3",
        zIndex: "-1",
        position: "fixed",
        width: "100%",
        margin: "auto",
       
    }

}

    

}))


const Nosotros = () => {
   
    const clases=estilos()    


    return (
        <div name="nosotros" className={clases.margenArriba} >
                 <Typography variant="h3" color="textSecondary"  paragraph >
                      {/* Nosotros */}
                </Typography>




        <Grid justifyContent="center"
  alignItems="center"
  direction="row-reverse"


  container>


                        <Grid xs={12} md={6} >
                                <div className={clases.divTexto}>
                        
                            <Typography align="right" paragraph className={clases.texto} >
                
                                Estamos  ubicados en pleno centro turistico , en el corazon de cerro alegre , durante el dia podras Visitar   los principales actractivos turisticos de  la ciudad   y durante la noche disfrutar  de  toda la bohemia porteña.
                                Constaras de comodas habitaciones cada uno con un baño privado  ,informacion  turistica  y de lo mejores panoramas de la ciudad.
                                </Typography>
                                <Typography paragraph className={clases.texto}>

                                    Ven a visitarnos  y ven a vivir una experiencia inolvidable 

                                                        

                                </Typography>
                                </div>
                            </Grid>

                   <Grid xs={12} md={6} >
                            <div>
                                    <img className={clases.imagenEscalera} src={Escalera} >
                                    </img> 
                            </div>
                       
                    
                    </Grid> 
                   
                    
                
             </Grid>    
        </div>
    )
}

export default Nosotros
