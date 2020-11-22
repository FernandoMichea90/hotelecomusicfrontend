import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Icono from '../Imagenes/hotelecomusic2.png';
import {animateScroll as scroll} from 'react-scroll'



const scrollalTop =()=>{


  console.log("...escuchando");
  
  
  scroll.scrollToTop();

  
}
  

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  
    paddingRight: '2px',
    marginLeft: '2px'
}

  ,
  title: {
    flexGrow: 1,
  },
  logo:{
    height:'45px'
  },

  offset:theme.mixins.toolbar
}));

export default function ButtonAppBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.root} >
      <AppBar position="fixed" >
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
          onClick={()=>props.accionAbrir()}
          >
            
            <MenuIcon />
            
          </IconButton>
          
          <IconButton edge="start" onClick={()=>scrollalTop()} className={classes.menuButton} color="inherit" aria-label="menu">
          <img src={Icono} alt="logo"  className={classes.logo} />
          </IconButton>
          <Typography variant="h6" className={classes.title} >
          
          </Typography>
         
          
         
          <Button color="inherit"  href="https://api.whatsapp.com/send?phone=56976226068&text=Hola,me gustaria hacer una reserva" target="_blank">Reservar</Button>
         
        </Toolbar>
      </AppBar>
    </div>
  );
}
