import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { red } from '@material-ui/core/colors';
import ShareIcon from '@material-ui/icons/Share';

const useStyles = makeStyles({
  title: {
    fontSize: 14,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
});

const Coffee = ({ avatarSrc, title, subTitle, description, imgSrc }) => {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card variant="outlined">
      <CardHeader
        avatar={
          <Avatar src={avatarSrc} />
        }
        action={
          <IconButton aria-label="settings">
            <ShareIcon />
          </IconButton>
        }
        title={title}
        subheader={subTitle}
      />

      <CardMedia
        className={classes.media}
        image={imgSrc}
        title="Paella dish"
      />

      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary">
          Buy now
        </Button>
        <Button size="small" color="primary">
          Offer
        </Button>
      </CardActions>
    </Card>
  );
}
export default Coffee