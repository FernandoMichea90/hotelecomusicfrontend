import React from 'react'
import Carousel from 'react-material-ui-carousel'
import Carrusel from './Carrusel'
import Single from '../../Imagenes/single.JPG'
import Extra from '../../Imagenes/camextra.jpg'
import Estandar  from '../../Imagenes/beatlesHab.jpeg'
import Supvista from '../../Imagenes/supvista.jpg'


const CarPri = () => {


    var items =[ {
      
        categoria:"Superior con vista al mar",
        precio:"60.000",
        descripcion:"Habitacion matrimonial   con una espectacular vista al mar",
        imagen:"https://lh3.googleusercontent.com/2vqUeaD7Ti5nh7IQgE-nCcNP8SsNmNCB7s5lxy17SMycU28P4MNFn9sJk81OIKPlsB-y14rxmc12qzgY=s239-c",
        imagenDos:Single
    } ,   
   {
      
      categoria:"Estandar",
      precio:"50.000",
      descripcion:"Habitacion matrimonial , fantasticas para parejas , que vienen a valparaiso  y quieren cuidar su billetera",
      imagen:"https://q-xx.bstatic.com/xdata/images/hotel/max1024x768/33852720.jpg?k=d7782abcf00351460f303338103d6e4bba94331142ebc540d62e03618935eb66&o=",
      imagenDos:Estandar
  
      
  
    } ,
{
    categoria:'Matrimonial con cama extra',
    precio:"60.000",
    descripcion:" Habitacion con cama matrimional y una cama single, ideal  para parejas con hijo  ",
    imagen:"https://lh3.googleusercontent.com/-VXFDifAt70o/X7q0Qk35D4I/AAAAAAAAAAY/HjdMrRYusIYhk3vM6-PM361H3KhRYUWSwCLQBGAYYCw/s239-c/camextra.jpg",
    imagenDos:Extra

   },
 {
     categoria:'Single',
     precio:"45.000",
     descripcion:"Habitacion individual , fabulosa para  viajeros solitarios",
     imagen:"https://lh3.googleusercontent.com/-d9FMj9--AX4/X7q310ixxDI/AAAAAAAAAAk/A09GhCKmFhsxbwrbhdkYEWRqG6m8Yp6iQCLQBGAYYCw/s239-c/IMG_0060.JPG",
     imagenDos:Supvista
   }]
    return (

        <div className='centrado'>
        <Carousel
            indicators={true} 
            autoPlay={false}

            
            indicatorIconButtonProps={{
                style: {
                      // 1
                    color: '#7FCD0D'       // 3
                }
            }}
            activeIndicatorIconButtonProps={{
                style: {
                    color: '#FF8B3E' // 2
                }
            }}
            indicatorContainerProps={{
                style: {
                   
                }
        
            }}
        >

            {
                items.map( (item, i) =>  <Carrusel room={item}></Carrusel> )
            }

               
        </Carousel>
        </div>
    )
}

export default CarPri
