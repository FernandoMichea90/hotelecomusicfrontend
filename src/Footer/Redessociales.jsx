import React from 'react'
import {makeStyles,Grid,Link,Typography,Hidden} from '@material-ui/core'
import instagram from '../redes sociales/instagram.png'
import facebook from '../redes sociales/facebook.png'
import whatsapp from '../redes sociales/whatsapp.png'
import styled from 'styled-components'; 

const useStyles=makeStyles((theme)=>({

    margenes:{
       
        paddingBottom:"30px"
    },root: {
        flexGrow: 1,
        marginTop: "34px",
        marginBottom: "65px"
      }
      ,margen:{

        margin:"9px 0 9px 0"
      }
      ,margendos:{

        margin:"9px 0 30px 0"
      },
      margenIcono:{
        margin:"0px 1vw 0px 0",
        [theme.breakpoints.down('xs')]: {
            margin:"0px 15px 0px 0px",
          },

      }

}))


const Redessociales = () => {
    const clases=useStyles()
    return (
        <div>
            <Hidden xsDown>
            <Typography className={clases.margendos} variant="h3">
                Contacto      
            </Typography>  
            </Hidden>
           <Typography className={clases.margen} variant="subtitle1">
               Dimalow 231 ,Cerro alegre , Valparaiso
           </Typography>
           <Typography className={clases.margen} variant="subtitle1">
             contacto@ecomusichotel.com        
            </Typography> 
           <Typography className={clases.margen} variant="subtitle1">
             Cel:+569 7622 6068
           </Typography>
           <Typography className={clases.margen} variant="subtitle1">
                tel:+56 32 210 8082        
           </Typography>
        <div className={clases.root}>
        <Grid container>
                <Grid className={clases.margenIcono} item xs={1} sm={2} md={1} lg={1}>
                    <Link href="https://www.instagram.com/hotelecomusicvalparaiso/" target="_blank">
                            <img alt="instagram Hotel ecomusic" src={instagram} style={{height:'30px'}}></img>
                    </Link>
                </Grid>
                <Grid className={clases.margenIcono}  item xs={1} sm={2} md={1} lg={1}>
                    <Link href="https://www.facebook.com/hotelecomusic/" target="_blank">
                  
                        <img alt="Facebook Hotel Ecomusic" src={facebook} style={{height:'30px'}}></img>
                    </Link>
                </Grid>
                <Grid  className={clases.margenIcono} item xs={1} sm={2} md={1} lg={1} >
                    <Link href="https://api.whatsapp.com/send?phone=56976226068&text=Hola" target="_blank">
                        <img alt="Whatsapp Hotel Ecomusic" src={whatsapp} style={{height:'30px'}}></img>
                    </Link>
                </Grid>   

        </Grid> 
        </div>
        </div>
    )
}

export default Redessociales
