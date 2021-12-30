import React from 'react'
import { Grid, Typography, makeStyles } from '@material-ui/core'
import DirectionsIcon from '@material-ui/icons/Directions';
import EventIcon from '@material-ui/icons/Event';
import CallIcon from '@material-ui/icons/Call';
import Link from '@material-ui/core/Link';





const estilos=makeStyles((theme)=>({

 divPrincipal:{
        padding:"10px 0px 10px 0px",
        color:"#FF6600",
        cursor:"pointer",
        "&:hover":{

            background:"#FF6600",
            color:"#ffffff"
        },
        

 },

 contendor:{
    position: "fixed",
    bottom: "0",
    background: "white"
 },
 root:{

    height:"75px",
    
    "& .MuiGrid-container":{
        position:"fixed",
        background:"#ffffff",
        bottom:"0"
    },
    "& .MuiTypography-colorPrimary": {
        color: "#ffffff00"
    },

 }



}))





const  MenuDown = () => {
    const clases=estilos()
    const ubicacion='https://www.google.com/maps/dir//Hostal+Ecomusic+-+P.%C2%BA+Dimalow+231,+Valpara%C3%ADso/@-33.0436406,-71.6297148,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x9689e12ed953843f:0x83b600b3a891ade9!2m2!1d-71.6275261!2d-33.0436451!3e0'
    return (
        <div className={clases.root}>
            <Grid container >
               <Grid xs={4}>
                    <Link href="tel:+56-9-7622-6068" target="_blank">
                   <div  className={clases.divPrincipal}>
                        <Typography align="center">
                        <CallIcon></CallIcon>    
                        </Typography>
                        <Typography align="center">
                        Llamar 
                        </Typography>

                    </div>
                    </Link>
                </Grid>     
                <Grid xs={4}>
                <Link  href="https://api.whatsapp.com/send?phone=56976226068&text=Hola,me%20gustaria%20hacer%20una%20reserva" target="_blank"> 
                    <div  className={clases.divPrincipal}>
                        <Typography align="center">
                        <EventIcon></EventIcon>
                        </Typography>
                        <Typography align="center">
                        Reservar
                        </Typography>

                        </div>
                        </Link>
                </Grid>     
                <Grid xs={4}>
                    <Link href={ubicacion} target="_blank">
                    <div  className={clases.divPrincipal}>
                        <Typography align="center">
                                 <DirectionsIcon></DirectionsIcon>
                        </Typography>
                        <Typography align="center">
                        Indicaciones
                        </Typography>

                    </div>
                    </Link>
                </Grid>     

            </Grid>
        </div>
    )
}

export default MenuDown
