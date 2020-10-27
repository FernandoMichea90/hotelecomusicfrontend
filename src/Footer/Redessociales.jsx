import React from 'react'
import {makeStyles,Grid,Link} from '@material-ui/core'
import instagram from '../redes sociales/instagram.png'
import facebook from '../redes sociales/facebook.png'
import whatsapp from '../redes sociales/whatsapp.png'


const useStyles=makeStyles((theme)=>({

    margenes:{
        paddingTop:"68px",
        paddingBottom:"30px"
    },root: {
        flexGrow: 1,
      }

}))


const Redessociales = () => {
    const clases=useStyles()
    return (
        <div>
            
            <h3 className={clases.margenes}>
                Siguenos en nuestras redes sociales    
            </h3>
        <div className={clases.root}>
        <Grid container>
                <Grid item xs={1} sm={2} md={1} lg={1}>
                    <Link href="https://www.instagram.com/hotelecomusicvalparaiso/" target="_blank">
                            <img src={instagram} style={{height:'30px'}}></img>
                    </Link>
                </Grid>
                <Grid item xs={1} sm={2} md={1} lg={1}>
                    <Link href="https://www.facebook.com/hotelecomusic/" target="_blank">
                  
                        <img src={facebook} style={{height:'30px'}}></img>
                    </Link>
                </Grid>
                <Grid item xs={1} sm={2} md={1} lg={1} >
                    <Link href="https://api.whatsapp.com/send?phone=56976226068&text=Hola" target="_blank">
                        <img src={whatsapp} style={{height:'30px'}}></img>
                    </Link>
                </Grid>   

        </Grid> 
        </div>
        </div>
    )
}

export default Redessociales
