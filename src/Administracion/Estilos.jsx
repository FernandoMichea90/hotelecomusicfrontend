import { makeStyles } from '@material-ui/core'
import styled from 'styled-components';
import { TextField } from '@material-ui/core';
export const estilos = makeStyles((theme) => ({
    textField: {
        '& .MuiInputLabel-outlined': {
            color: '#000000 !important'
        }

    },
    verticalAlign: {
        display: 'flex',
        justifyContent: 'center'
        , alignItems: 'center',
        height: '80%'

    },
    BotonGoogle: {
        backgroundColor: "#fffff",
    },
    imagenGoogle: {
        margin: "12px"
    }




}))



export const StyledTextField = styled(TextField)`
  label.focused {
    color: green; 
  }
  .MuiOutlinedInput-root {
    fieldset {
      border-color: #00000;
    }
    &:hover fieldset {
      border-color: yellow; 
    }
    &.Mui-focused fieldset {
      border-color: green; 
    }
  }
`;