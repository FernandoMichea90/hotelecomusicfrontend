import React from 'react'
import '../css/principal.css'
import {makeStyles}  from '@material-ui/core/styles'        
import {Grid,Typography} from '@material-ui/core'
import Caja from './Caja'





const useStyles=makeStyles((theme)=>({

    margenArriba:{
        paddingTop:"127px",
        
       

    },
    textoCentra:{
        textAlign:"center",
        marginBottom:"80px"
    },
    margen:{

        marginTop:"80px"
    },
    centro:{
        textAlign:"center"
    }

}))


const Servicios = () => {
    const clases=useStyles();

    const cajaFuerte={
         nombre:"Caja Fuerte",
    
        Url:"./iconos/cajaFuerte.png"
    
    }


    const desayuno={ 
        nombre:"Desayuno",
        Url:"./iconos/desayuno.png"

    }

    const wifi={ 
        nombre:"Wifi",
        Url:"./iconos/wifi.png"

    }

    
    const calefaccion={ 
        nombre:"Agua Caliente",
        Url:"./iconos/calefaccion.png"

    }

    const amenities={ 
        nombre:"Amenities",
        Url:"./iconos/limpiador.png"

    }


    const tv={ 
        nombre:"T.V",
        Url:"./iconos/controlremoto.png"

    }






    
    

   

    



    return (
        <div name="servicios" className={clases.margenArriba} >

                <Typography className={clases.centro} variant="h3" color="textSecondary"  paragraph >
                      Servicios
                </Typography>
            

            <Grid   className={clases.margen}  container spacing={1}>

                    <Grid item xs={6} sm={4}>
                        <Caja Cajafuerte={cajaFuerte}></Caja>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                    <Caja Cajafuerte={desayuno}>  </Caja> 
                    </Grid>    
                    


                    <Grid item xs={6} sm={4}>
                    <Caja Cajafuerte={wifi}></Caja>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                    <Caja Cajafuerte={calefaccion}></Caja>
                    </Grid>    
                    

                
                    <Grid item xs={6} sm={4}>
                    <Caja Cajafuerte={amenities}> </Caja>
                    </Grid>
                    <Grid item xs={6} sm={4}>
                    <Caja Cajafuerte={tv}></Caja>

                    </Grid>    



                    <Grid item xs={12}>
                        <div className="nota">    
                            <b>Importante:</b> debido a la circunstancias actuales  del coronavirus  y para evitar contagios, hotel ecomusic
                            no estara brindando el servicio de desayuno, hasta proximo aviso 
                        </div>
                    </Grid>
              
            </Grid>


        </div>


)
}

export default Servicios


