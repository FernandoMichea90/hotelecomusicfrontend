import React from 'react'
import '../css/principal.css'
import {makeStyles}  from '@material-ui/core/styles'        
import {Grid,Box} from '@material-ui/core'
import Caja from './Caja'
import Calefaccion from '../../iconos/calefaccion.png'





const useStyles=makeStyles((thema)=>({

    margenArriba:{
        paddingTop:"64px"

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
        nombre:"Calefaccion",
        Url:"./iconos/calefaccion.png"

    }

    const amenities={ 
        nombre:"Amenities",
        Url:"./iconos/champu.png"

    }


    const tv={ 
        nombre:"T.V",
        Url:"./iconos/controlremoto.png"

    }






    
    

   

    



    return (
        <div name="servicios" className={clases.margenArriba} >

            <h1 className="textoCentral">
                Servicios 
            </h1>
            

            <Grid    container spacing={1}>

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
              
            </Grid>


        </div>


)
}

export default Servicios


