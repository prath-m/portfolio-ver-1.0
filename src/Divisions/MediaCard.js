import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    // maxWidth: 300,
  },
  media: {
    // height: 240,
  },
});

export const MediaCard = ({name,url, descreption})=> {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{margin:"10px"}}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="{url}"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p" style={{margin:"10px"}}>
            {descreption}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" style={{marginTop:"20px"}}>
          Open
        </Button>
      </CardActions>
    </Card>
  );
}
