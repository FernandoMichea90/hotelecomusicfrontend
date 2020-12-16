import React from 'react'

import '../componentes/css/principal.css'
import {makeStyles,Button,Grid} from '@material-ui/core'
import Googleico from '../redes sociales/google.png'
import Carousel from 'react-elastic-carousel';

import Itemcomentarios from './Itemcomentarios'

import { red } from '@material-ui/core/colors';
const useStyles=makeStyles((theme)=>({

    root: {
        flexGrow: 1,
       
      },    
        fondo:{

          [theme.breakpoints.down('sm')]: {
            width: "100%",
          },

          width: "60%",
          margin: "auto",
          padding: "10px",
          background: "#fafafa",
          borderRadius: "33px",
          marginTop:"250px"
        },
        fondocarrusel:{

         
          background: "#2d078200",
          borderRadius: "33px",
          marginTop:"20px",
          padding:"5px"
        },

        numevaluacion:{
          textAlign: "right",
          marginRight: "11px",
          marginTop: "0px",
        },
    
    textCenter:{
      
       textAlign:"center",
        paddingTop:"64px",
        paddingBottom:"64px"

    },
    
    color:{
   
      margin:"45px auto",
      padding: "9px 20px",
    borderRadius: "16px",
    backgroundColor: "rgb(28, 145, 255)",
    fontSize: "12px",
    fontWeight:"bold",
    lineHeight: "14px",
    color: "rgb(255, 255, 255)",
   
    display:"block",
    textTransform: "uppercase",
    userSelect: "none",
    cursor: "pointer",
    transition:" all 0.1s ease 0s",
    
    justifyContent: "center",
    whiteSpace: "nowrap",
    textDecoration:" none !important",
    [theme.breakpoints.up('sm')]: {
     
      display: "inline-flex", 
    },
    '&:hover': {
      backgroundColor:"rgb(56, 159, 255)",
      textDecoration:" none !important",
      
    }
    },

    tarjeta:{

      maxWidth:300,
      height:300
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

imagengoogle:{
  display: "block",
  marginTop: "12px",
  marginLeft: "auto",
  marginRight: "11px"
},
numresenas:{
  fontSize: "13px",
    margin: "0",
    color: "#11111180",
}

}))


const Comentariosdos = () => {

    const classes=useStyles()

 
    const items=  [
        {id: 1, usuario: 'Emer ODea',fecha:"10 meses atras" ,nota:5,comentario:"Comfortable rooms with private bathrooms and tasty breakfasts. Staff were also very friendly and the location is good."  },
        {id: 2, usuario:'Thanh Cong Pham',fecha:"2 años atras",notas:5,comentario:"Very nice hostel. Great view of the city. Nice neighbourhood with lots of places to eat, namely the best empanada place in Chile! Clean comfy beds, private bathrooms, fantastic breakfast and friendly staff.Pick a room with the view if you can, though it might get rowdy with passer-bys in the evening; it wasn't loud enough to bother us."},
        {id: 3, usuario: 'Mathieu Rouleau', fecha:"1 año atras",notas:5,comentario:`Very clean hostal, with a great view(see picture) and good service.
        Hostal is very quiet, took a private room with a view. I arrived over the night and they were very welcoming.
        The breakfast is great(see picture)! All the fresh fruit and the ladies doing the service!
        Only thing to note is the hostel is on a hill, you should take a taxi or uber to get there. Otherwise its a big walk with luggage or a bag.
        Another cool thing about this place is the proximity to the downtown part, the street art around and the hostal has many restaurants on the same street.`},
        {id: 4, usuario: 'Rodrigo Rios',fecha:"9 meses atras" ,nota:5,comentario:`Encantador paisaje y sitios para recorrer y degustar, la atención del lugar excelente, limpio atendido por sus dueños`},
        {id: 5, usuario:'christian arias',fecha:"1 año atras" ,nota:5,comentario:`Hotel estratégico . Un barrio bohemio con una gran variedad de pub y restaurantes
        muy cercanos a su ubicación. Atención cordial y cumple con lo que publica por los medios digitales de promoción de sus servicios y además con una vista espectacular nocturna de cerro alegre ...`},
        {id: 6, usuario : 'Fabián Andrés Rodríguez Sempolis',fecha:"1 año atras",nota:5,comentario:`Buena atención. Muy limpio. Estilo original. Un lugar especial para vivir la bohemia de Valparaiso.`},
        {id: 7, usuario: 'Karen Lezana Gaete', fecha:'2 años atras',nota:5,comentario:`Buenas y entretenidas habitaciones temáticas.
        Rico y contundente desayuno.
        Muy recomendado.`},
        {id: 8, usuario: 'Javier I. Zaragüeta',fecha:"1 año atras",nota:5,comentario:`Excelente lugar para conocer y vivir la parte histórica de Valparaíso. Esta a metros del ascensor Reina Victoria y redeado de los mejores bares, restaurant. Es el cerro alegria y hace honor a su nombre. Siempre hay gente joven disfrutandomy festejando. Ese espiritu del barrio vive en el hotel`},
        {id: 9, usuario: 'Virginia Vidal Contreras',fecha:"2 año atras",nota:5,comentario:`Excelente hotel, servicio de primera con la mucama Sra. Marta. Dormitorio cómodo limpio, desayuno muy completo.`},
        {id: 10, usuario: 'Pedro Alvarado',fecha:"2 años atras",nota:5,comentario:"Volveria 100 veces mas... Una atencion buenisima... Limpio.. Silencioso y mi habitacion tenia unas vistas a la ciudad preciosas..."},
        {id: 11, usuario: 'Luiz Eduardo Boson',fecha:"2 años atras",nota:5,comentario:"Maravilhoso hostel, limpo, agradável, atendimento super educado, café da manhã delicioso."},
        {id: 12, usuario: 'Camilo Arias' ,fecha:"1 año atras",nota:5,comentario:"Excelentísima ubicación. La habitación Pink Floyd estuvo lindísima, aunque si pueden pedir la Habitación Marley tendrán una vista genial del puerto, mar y la ciudad. El desayuno deliciosoo."},
      ]
    
    const breakpoints=[
      { width: 1, itemsToShow: 1 },
      { width: 550, itemsToShow: 2},
      { width: 850, itemsToShow: 3 },
      { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
      { width: 1450, itemsToShow: 3 },
      { width: 1750, itemsToShow: 3 },
    ]




    return (

        <div name="comentarios">
                   

            <Grid container className={classes.fondo} >
                <Grid container xs={12} sm={6}>

                        <Grid xs={6}> <img alt="Google Imagenes comentarios" className={classes.imagengoogle} src={Googleico}/></Grid>
                        <Grid xs={6}> <p>Google Reviews</p></Grid>
                        
                        <Grid xs={6}><h3 className={classes.numevaluacion}>4.5</h3></Grid>
                        <Grid xs={6}> 
                          <span class="material-icons" >star</span>
                          <span class="material-icons">star</span>
                          <span class="material-icons">star</span>
                          <span class="material-icons">star</span>
                          <span class="material-icons">star_half</span>
                          <p className={classes.numresenas}>97 reseñas</p>
                        </Grid>



                                          
                    

                </Grid>
              <Grid xs={12} sm={6}>
                    <Button variant="contained" className={classes.color}>
                              Escribe una reseña 
                    </Button>

                        
                </Grid>
            </Grid>
                      

                     


            <Carousel showArrows={false} className={classes.fondocarrusel} enableAutoPlay={true} isRTL={false} autoPlaySpeed={2000} itemsToShow={3} pagination={false} breakPoints={breakpoints}>
    {items.map(item => (

    <Itemcomentarios item={item}></Itemcomentarios>

    ))
    
    
    }
       
      </Carousel>
        </div>
    )
}


export default Comentariosdos



