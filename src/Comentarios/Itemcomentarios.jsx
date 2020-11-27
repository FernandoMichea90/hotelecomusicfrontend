import React from 'react'

import clsx from 'clsx';
import '../componentes/css/principal.css'
import {makeStyles,Button,Card,CardHeader,Avatar,Typography,CardActions} from '@material-ui/core'
import Googleico from '../redes sociales/google.png'
import Carousel from 'react-elastic-carousel';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import PersonIcon from '@material-ui/icons/Person';
import { red } from '@material-ui/core/colors';


const useStyles=makeStyles((theme)=>({

    root: {
        flexGrow: 1,
       
      },    

    
    textCenter:{
      
       textAlign:"center",
        paddingTop:"64px",
        paddingBottom:"64px"

    },
    
    color:{
      padding: "9px 20px",
    borderRadius: "16px",
    backgroundColor: "rgb(28, 145, 255)",
    fontSize: "12px",
    fontWeight:"bold",
    lineHeight: "14px",
    color: "rgb(255, 255, 255)",
    display: "inline-flex",
    textTransform: "uppercase",
    userSelect: "none",
    cursor: "pointer",
    transition:" all 0.1s ease 0s",
    
    justifyContent: "center",
    whiteSpace: "nowrap",
    textDecoration:" none !important",
    '&:hover': {
      backgroundColor:"rgb(56, 159, 255)",
      textDecoration:" none !important"
    }
    },

    tarjeta:{

      maxWidth:300,
      height:300,
      marginTop:"20px",
      marginBottom:"20px"
    },
 
avatar: {
  backgroundColor: red[500],
},
expand: {
  transform: 'rotate(0deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
},expandOpen: {
  transform: 'rotate(180deg)',
},

}))





const Itemcomentarios = (props) => {
    const classes=useStyles()
    const item =props.item;

    return (
        <div>
                 <Card key={item.key} className={classes.tarjeta}>
              <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
              <PersonIcon></PersonIcon>
          </Avatar>
        }
       
        title={item.usuario}
       
        subheader={item.fecha}
      />
              
            
            <span class="material-icons" >star</span>
            <span class="material-icons">star</span>
            <span class="material-icons">star</span>
            <span class="material-icons">star</span>
            <span class="material-icons">star</span>


            
        <CardContent>
         
        
          <Typography paragraph>
            {item.comentario}
          </Typography>
          </CardContent>
         
          </Card>
        </div>
    )
}

export default Itemcomentarios