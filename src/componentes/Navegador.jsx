import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Icono from '../Imagenes/hotelecomusicdos.png';
import {animateScroll as scroll} from 'react-scroll'



const scrollalTop =()=>{


 

  
}
  

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    
    '& .MuiButton-root:hover	': {
      background:"#7FCD0D!important"
      }

      
  ,

  },
  menuButton: {
    marginRight: theme.spacing(2),
  
    paddingRight: '2px',
    marginLeft: '2px',
    [theme.breakpoints.down('sm')]: {
      marginRight:'0px',
  
    paddingRight: '0px',
    marginLeft: '0px',}
},
      barra:{
        background:"#ff660000",
        boxShadow:"none"
       
      }

  ,
  title: {
    flexGrow: 1,
  },
  logo:{
    maxHeight:'45px',
      [theme.breakpoints.down('sm')]: {
        height:"5vh"
},
  },

  boton:{
      background:theme.palette.primary.naranjo,
      color:"#FFFFFF",
      borderRadius:"5px",
      
      fontFamily: 'Lato',
      fontWeight: "bold"
      ,
      [theme.breakpoints.down('sm')]: {
        marginRight:'vw'



     }},
     

 
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <AppBar position="fixed" className={classes.barra}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
          onClick={()=>props.accionAbrir()}
          >
            
            <MenuIcon color="secondary" />
            
          </IconButton>
          
          <IconButton edge="start" onClick={()=>scrollalTop()} className={classes.menuButton} color="inherit" aria-label="menu">
          <img src={Icono} alt="logo"  className={classes.logo} />
          </IconButton>
          <Typography variant="h6" className={classes.title} >
          
          </Typography>
         
          
         
          <Button  variant="contained"  className={classes.boton}  href="https://api.whatsapp.com/send?phone=56976226068&text=Hola,me gustaria hacer una reserva" target="_blank">Reservar</Button>
         
        </Toolbar>
      </AppBar>
    </div>
  );
}
