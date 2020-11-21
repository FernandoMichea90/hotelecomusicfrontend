import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import EjemploDos from './Ejemplodos'

import supvista from '../../Imagenes/supvista.jpg'
import camextra from '../../Imagenes/camextra.jpg'
import Single from '../../Imagenes/single.JPG'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

    const superior={
      
        categoria:"Superior con vista al mar",
        precio:"60.000",
        descripcion:"Habitacion matrimonial   con una espectacular vista al mar",
        imagen:supvista
    }    
    const estandar={
      
      categoria:"Estandar",
      precio:"50.000",
      descripcion:"Habitacion matrimonial , fantasticas para parejas , que vienen a valparaiso  y quieren cuidar su billetera",
      imagen:"https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/33852720.jpg?k=d7782abcf00351460f303338103d6e4bba94331142ebc540d62e03618935eb66&o="  
      
  
    } 
   const camaextra={
    categoria:'Matrimonial con cama extra',
    precio:"60.000",
    descripcion:" Habitacion con cama matrimional y una cama single, ideal  para parejas con hijo  ",
    imagen:camextra

   }
   const single={
     categoria:'Single',
     precio:"45.000",
     descripcion:"Habitacion individual , fabulosa para  viajeros solitarios",
     imagen:Single
   }
  


  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
         <EjemploDos habitacion={superior} categoria="Superior vista al mar"></EjemploDos>
        </Grid>
        <Grid  item xs={12} sm={6} md={4} >
        <EjemploDos  habitacion={estandar} categoria="Estandar"></EjemploDos>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <EjemploDos habitacion={camaextra} categoria="Matrimonial con cama extra"></EjemploDos>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
        <EjemploDos habitacion={single} categoria="single"></EjemploDos>
        </Grid>
        

      </Grid>
    </div>
  );
}
