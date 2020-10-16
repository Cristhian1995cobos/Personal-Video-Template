import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 200,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

const Cart = ({sentence1, sentence2, button1}) => {

  const classes = useStyles();


  return (

    <Card className={classes.root} variant="outlined" >
      <CardContent>

        <Typography variant="h5" component="h2">
          {sentence1}
        </Typography>
        <Typography variant="body2" component="p">
        <br></br>
          {sentence2}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" >{button1}</Button>
      </CardActions>
    </Card>
  );


  }

export default Cart