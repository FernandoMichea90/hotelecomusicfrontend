import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import {Button} from '@material-ui/core';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Precio from '@material-ui/icons/AttachMoney';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard(props) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const texto=`https://api.whatsapp.com/send?phone=56976226068&text=Hola,me gustaria consultar la disponibilidad de  la habitacion ${props.habitacion.categoria}`

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        
        title={props.habitacion.categoria}
     
      />
      <CardMedia
        className={classes.media}
         image={props.habitacion.imagen}  
        title=""
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        
            {props.habitacion.descripcion}

        </Typography>
      </CardContent>
      <CardActions disableSpacing>
       
        <IconButton aria-label="share">
          <Precio />
          {props.habitacion.precio}
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Button variant="contained" color="primary" href={texto} target="_blank">
                Reservar    
        </Button>
        </CardContent>
      </Collapse>
    </Card>
  );
}
