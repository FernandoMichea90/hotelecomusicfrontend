import React from 'react'
import {Grid, Paper,makeStyles,CardContent,Typography} from '@material-ui/core'




const useStyles=makeStyles((theme)=>({

    divHabit:{
        width:'450px',
        height:'300px',
        position:'relative',
        overflow:'hidden',

        [theme.breakpoints.only('md')]:{
            height:'300px',
            width:'100%',
        },

        
    },
    imgHabit:{
        width:'100%',
        height:'100%',
        objectFit: 'cover',
        
    },

    papel:{

        height:'300px',
        position:'relative',

        

        [theme.breakpoints.down('sm')]:{
            height:'530px',
            width:'450px',
        },

        [theme.breakpoints.down('xs')]:{
            height:'430px',
            width:'100%',
        },

       

       

    }
})) 


const Carrusel = (props) => {
    const clases=useStyles()

    return (
        
            <Paper className={clases.papel}>

                 <Grid container>
                            <Grid xs={12} md={6} lg={6} >
                                <div className={clases.divHabit}>
                                <img  className={clases.imgHabit} src={props.room.imagenDos}></img>
                                </div>
                            </Grid>
                            <Grid xs={12} md={6} lg={6}>

                                <CardContent>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                {props.room.categoria}
                                            </Typography>
                                            <Typography variant="body1" color="textSecondary" component="p">
                                                {props.room.descripcion}
                                            </Typography>
                                </CardContent>

                            </Grid>
                 </Grid>


            </Paper>
      
    )
}

export default Carrusel
