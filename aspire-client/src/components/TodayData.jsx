import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
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
  cardAction: {
      float: 'left',
  }
});

export default function TodayData() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Today
        </Typography>
        <Typography variant="h5" component="h2">
          4 hrs 58 mins
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          -
        </Typography>
        <Typography variant="body2" component="p">
          Your average usage is 
          <br />
          8 hrs 3 mins
        </Typography>
      </CardContent>
      <CardActions className={classes.cardAction}>
        <Button size="small">More</Button>
      </CardActions>
    </Card>
  );
}
