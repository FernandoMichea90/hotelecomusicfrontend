import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import EjemploDos from './Ejemplodos'


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
        descripcion:"Habitacion matrimonial   con una espectacular vista al mar"
    }    
    const estandar={
      
      categoria:"Estandar",
      precio:"50.000",
      descripcion:"Habitacion matrimonial , fantasticas para parejas , que vienen a valparaiso  y quieren cuidar su billetera"
  } 
   const camaextra={
    categoria:'Matrimonial con cama extra',
    precio:"60.000",
    descripcion:" Habitacion con cama matrimional y una cama single, ideal  para parejas con hijo  "

   }
   const single={
     categoria:'Single',
     precio:"45.000",
     descripcion:"Habitacion individual , fabulosa para  viajeros solitarios"
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
