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





const MenuDown = () => {
    const clases=estilos()
    return (
        <div className={clases.root}>
            <Grid container >
               <Grid xs={4}>
                    <Link href="tel:+56-34-242-0826" target="_blank">
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
                <Link  href="https://e9ce63006869ea140e20053ac15620ffc8ee3a0b.agenda.softwaredentalink.com/agendas/agendamiento " target="_blank"> 
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
                    <Link href="https://www.google.com/maps/dir//Odontolog%C3%ADa+Almendral+Los+Andes/data=!4m8!4m7!1m0!1m5!1m1!1s0x968804e06480374f:0xfcb27c87d5cd2f04!2m2!1d-70.596964!2d-32.833785" target="_blank">
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
