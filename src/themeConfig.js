import {createMuiTheme} from "@material-ui/core/styles"

const theme =createMuiTheme({

    typography: {
        fontFamily: [
          'Lato',
        ].join(','),
      },
    palette:{

        primary:{
            main:'#7FCD0D',
            naranjo:"#FF6600"

            
        },

        secondary:{
            main:"#7FCD0D"
        }
        ,info:{
            main:"#FFFFF"

        }

    }


})

export default theme;