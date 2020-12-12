import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

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
        descripcion:"Habitacion matrimonial   con una espectacular vista al mar",
        imagen:"https://lh3.googleusercontent.com/2vqUeaD7Ti5nh7IQgE-nCcNP8SsNmNCB7s5lxy17SMycU28P4MNFn9sJk81OIKPlsB-y14rxmc12qzgY=s239-c"
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
    imagen:"https://lh3.googleusercontent.com/-VXFDifAt70o/X7q0Qk35D4I/AAAAAAAAAAY/HjdMrRYusIYhk3vM6-PM361H3KhRYUWSwCLQBGAYYCw/s239-c/camextra.jpg"

   }
   const single={
     categoria:'Single',
     precio:"45.000",
     descripcion:"Habitacion individual , fabulosa para  viajeros solitarios",
     imagen:"https://lh3.googleusercontent.com/-d9FMj9--AX4/X7q310ixxDI/AAAAAAAAAAk/A09GhCKmFhsxbwrbhdkYEWRqG6m8Yp6iQCLQBGAYYCw/s239-c/IMG_0060.JPG"
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
