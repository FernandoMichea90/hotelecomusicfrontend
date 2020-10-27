import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper,Button} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'



const useStyles=makeStyles((theme)=>({

    imagenPrincipal:{
        width:'100%',
       
        [theme.breakpoints.down('xs')]: {
            height:'300px',
          },
          [theme.breakpoints.up('sm')]: {
            height:'450px',
          },
          [theme.breakpoints.up('md')]: {
            height:'600px',
          }

    },
    divPrincipal:{
        width:'100%',
       
    },
    margenArriba:{
        marginTop:"64px"
    },
    colorPrueba:{
        color:"#f44336"
    }


}))


 
export default function Example(props)
{
    const clases=useStyles();

    var autoPlay=false;
    var timeout=100;
    const imagen="https://i.pinimg.com/564x/71/7a/f3/717af3b38f04e8b4cea8bd3cbb2d999b.jpg"

    var items = [
        {
             imagen:"https://chile.travel/wp-content/uploads/2016/03/Valparaiso-sernatur-DST141.jpg"
                
       
       
        }
    ]
 
    return (

        <Carousel className={clases.margenArriba} navButtonsAlwaysVisible={true} autoPlay={autoPlay} timeout={timeout}>
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
       <img className={clases.imagenPrincipal} src={props.item.imagen}>
       </img>
       <h2>{props.item.name}</h2>
            <p>{props.item.description}</p>

        </div>   
        </Paper>
    )
}