import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper,Button,Grid,Typography, Hidden} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import imgUno from '../Imagenes/imgUno.png'
import imgDos from '../Imagenes/imgDos.png'
import imgCinco from '../Imagenes/imgCinco.png'
import '../componentes/css/principal.css'
import CampanaDos from '../Imagenes/campanaDos.png'
import Ubicacion from '../Imagenes/ubicacionDos.png'


const useStyles=makeStyles((theme)=>({

root: {

    [theme.breakpoints.down('md')]: {
      
       
      }
,

   '& .MuiGrid-container':{
       width: '100%', 
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap',
        boxSizing:'border-box'
,
       

    }

,  

        '& .MuiButton-root:hover	': {
            background:theme.palette.primary.naranjo,
            },
       
        
            '& .botonDos': {
                borderColor:theme.palette.primary.main,
                border:'solid 1px',
                background:"#FFFFFF",
                color:theme.palette.primary.main,
                borderRadius:"5px",
                marginTop:"10px",
                fontFamily: 'Lato',
                fontWeight: "bold"
            },
            '& .botonDos:hover': {
                borderColor:theme.palette.primary.naranjo,
                border:'solid 1px',
                background:"#FFFFFF",
                color:theme.palette.primary.naranjo,
                borderRadius:"5px",
                marginTop:"10px",
                fontFamily: 'Lato',
                fontWeight: "bold"
            }


},



    imagenPrincipal:{
        opacity:1,
        width:'100%',
        height:'700px',
        position: "absolute",
        top:'0px',     
        [theme.breakpoints.down('md')]: {
            position: 'absolute',
            /* left: 40%; */
            top: '50%',
            transform: 'translate(0%, -50%)',
           
          }
   ,
   [theme.breakpoints.down('sm')]: {
    position: 'absolute',
    /* left: 40%; */
    top: '50%',
    transform: 'translate(0%, -50%)',
    height:'450px',
  },
  
       
        [theme.breakpoints.down('xs')]: {
            height:'300px',
            position: 'absolute',
    /* left: 40%; */
    top: '50%',
    transform: 'translate(0%, -50%)',
          },
          
    },
    divPrincipal:{
        width:'100%',
        position:"relative",
        height:'700px'
     

       

    },
    
    colorPrueba:{
        color:"#f44336"
    },
    boton:{
        background:theme.palette.primary.main,
        color:"#FFFFFF",
        borderRadius:"5px",
        marginTop:"10px",
        fontFamily: 'Lato',
        fontWeight: "bold"
        ,
        [theme.breakpoints.down('sm')]: {
          marginRight:'vw'
  
  
  
       }
    }
    ,
    
    botonDos:{
        borderColor:theme.palette.primary.main,
        border:'solid 1px',
        background:"#FFFFFF",
        color:theme.palette.primary.main,
        borderRadius:"5px",
        marginTop:"10px",
        fontFamily: 'Lato',
        fontWeight: "bold"
        ,
        
    }
    ,
    
    centro:{
        width: "100%",
        position: "absolute",
        fontSize: "52px",
        textAlign: "center",
        top: "37%",
        fontWeight: "normal",
        fontFamily: 'Lato',
        color: "#ffffff",
        [theme.breakpoints.down('sm')]: {
          top:"9vh",
          fontSize:"35px",
    },
    }}
    ))


 
export default function Example(props)
{
    const clases=useStyles();

    var autoPlay=false;
    var timeout=100;

    const Caja  =()=>{

        return(
            

        <div className="carouselSon">
                  <Typography align="center" variant='h5'>

                            Habitaciones temáticas, confortables, 
                                con baño privado y wifi 

                            </Typography>

                            <Typography align="center">

                            <Button className={clases.boton}   variant="contained"    href="https://api.whatsapp.com/send?phone=56976226068&text=Hola,me gustaria hacer una reserva" target="_blank">Reservar</Button>



                            </Typography>


            </div>
        )
    }


    const CajaDos=()=>{

        return(
            

        <div className="carouselSonDos">





                    <Typography align="center">
                                     
                        <img src={Ubicacion} height="80" ></img>


                    </Typography>
     
                  <Typography align="center" variant='h5'>


                            Ubicados en pleno corazón ,del centro turístico de 
                            Valparaíso


                            </Typography>
                            <Typography align="center">
                            <Button className='botonDos'   variant="contained"    href="https://api.whatsapp.com/send?phone=56976226068&text=Hola,me gustaria hacer una reserva" target="_blank">Ver Ubicacion</Button>
</Typography>


            </div>
        )
    }


    const CajaTres=()=>{

        return(
            

        <div className="carouselSon">
                  <Typography align="center" variant='h4'>

                            Recepcion  las 24 horas 

                            </Typography>

                            <Typography align="center">

                            <Typography align="center">
                                     
                                     <img src={CampanaDos} height="60" ></img>
             
             
                                 </Typography>


                            </Typography>


            </div>
        )
    }



    var items = [
        {
        
            //imagen:"https://chile.travel/wp-content/uploads/2016/03/Valparaiso-sernatur-DST141.jpg"
            //  imagen:"https://storage.googleapis.com/chile-travel-static-content/2016/03/Valparaiso-sernatur-DST142.jpg"   
            imagen:imgUno,
            caja:null,
            cajaDos:Caja(),
            carouselEstilo:'divCarousel',
            carouselDefault:null,

            

        },
        {
        
            //imagen:"https://chile.travel/wp-content/uploads/2016/03/Valparaiso-sernatur-DST141.jpg"
            //  imagen:"https://storage.googleapis.com/chile-travel-static-content/2016/03/Valparaiso-sernatur-DST142.jpg"   
            imagen:imgDos,
            caja:CajaDos(),
            cajaDos:null,
            carouselEstilo:'divCarouselDos',
            carouselDefault:'divCarousel',
            sinImagen:true
            

                
       
        },
        {
        
            //imagen:"https://chile.travel/wp-content/uploads/2016/03/Valparaiso-sernatur-DST141.jpg"
            //  imagen:"https://storage.googleapis.com/chile-travel-static-content/2016/03/Valparaiso-sernatur-DST142.jpg"   
            imagen:imgCinco,
            caja:null,
            cajaDos:CajaTres(), 
            carouselEstilo:'divCarousel',
            carouselDefault:null,



            

        
       
        }
    ]
 
    return (

        <Carousel
       
        
        navButtonsAlwaysVisible={true} 
            // Applies to the active indicator
           	 autoPlay={autoPlay} indicators={true} 
     timeout={timeout}
     indicatorIconButtonProps={{
        style: {
              // 1
            color: '#7FCD0D'       // 3
        }
    }}
    activeIndicatorIconButtonProps={{
        style: {
            color: '#FF8B3E' // 2
        }
    }}
    indicatorContainerProps={{
        style: {
           
        }

    }}
     
     >
            {
                items.map( (item, i) => <Item key={i} item={item}  /> )
            }
        </Carousel>
    )
}





 
function Item(props)
{

 const clases=useStyles();

    return (
          <Paper className={clases.root}>
          
       


                <div className={clases.divPrincipal}> 

                   
                {!props.item.sinImagen?

                
                  <img className={clases.imagenPrincipal} alt="Valparaiso, Cerro alegre" src={props.item.imagen}>
                  </img>
                   :
                   <Hidden mdUp>
                   <img className={clases.imagenPrincipal} alt="Valparaiso, Cerro alegre" src={props.item.imagen}>
                   </img>
                   </Hidden>
                  
                        }

               

                <Grid container>
                            <Grid xs={6}>
                                
                            <div className={props.item.carouselDefault}>
                              

                              {props.item.caja}


                         </div>  

                              
                            </Grid>
                            <Grid xs={6}>
                            

                            <div className={props.item.carouselEstilo}>
                              


                                 {props.item.cajaDos}


                            </div>


                           
                            
                            </Grid>


                </Grid>






                </div>   


                

        </Paper>
    )
}