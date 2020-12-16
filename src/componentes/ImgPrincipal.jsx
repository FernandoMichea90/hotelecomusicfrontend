import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper,Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'



const useStyles=makeStyles((theme)=>({

    imagenPrincipal:{
        opacity:0.5,
        width:'100%',
       
       
        [theme.breakpoints.down('xs')]: {
            height:'300px',
          },
          [theme.breakpoints.up('sm')]: {
            height:'450px',
          },
          [theme.breakpoints.up('md')]: {
            height:'100vh',
          }

    },
    divPrincipal:{
        width:'100%',
        position:"relative",
        background:"rgb(0, 0, 0)",

       

    },
    
    colorPrueba:{
        color:"#f44336"
    },
    boton:{
    position: "absolute",
    top: "57%",
    left:"0",
    right:"0",
    color:"#FFFFFF",
    borderColor:"#FFFFFF",
    alignItems: "center",
    marginLeft:"auto",
    marginRight:"auto",
    width:"100px"
    }
    ,centro:{
        width: "100%",
        position: "absolute",
        fontSize: "52px",
        textAlign: "center",
        top: "37%",
        fontWeight: "normal",
        fontFamily: 'Lato',
        color: "#ffffff",
        [theme.breakpoints.down('sm')]: {
          top:"9vh",
          fontSize:"35px",
    },
    }}
    ))


 
export default function Example(props)
{
    const clases=useStyles();

    var autoPlay=false;
    var timeout=100;

    var items = [
        {
             //imagen:"https://chile.travel/wp-content/uploads/2016/03/Valparaiso-sernatur-DST141.jpg"
             imagen:"https://storage.googleapis.com/chile-travel-static-content/2016/03/Valparaiso-sernatur-DST142.jpg"   
       
       
        }
    ]
 
    return (

        <Carousel navButtonsAlwaysVisible={true} autoPlay={autoPlay} indicators={false} timeout={timeout}>
            {
                items.map( (item, i) => <Item key={i} item={item} /> )
            }
        </Carousel>
    )
}
 
function Item(props)
{

 const clases=useStyles();

    return (
          <Paper>
          
       


       <div className={clases.divPrincipal}>         
       <img className={clases.imagenPrincipal} alt="Valparaiso, Cerro alegre" src={props.item.imagen}>
       </img>
       <h2 className={clases.centro}>Hotel Ecomusic</h2>
            <p>{props.item.description}</p>
            <Button  color="info" className={clases.boton} variant="outlined" color="primary">
            Reservar
            </Button>
        </div>   
        </Paper>
    )
}