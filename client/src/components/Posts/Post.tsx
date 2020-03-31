import React from 'react';
import { makeStyles, Theme, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import moment from 'moment';
import Rating from '@material-ui/lab/Rating';
import { PostI } from '../../@types';

moment().format();

const styles = (theme: Theme) => createStyles({

    root: {
        // maxWidth: 345,
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
    rating: {
        display: 'flex',
        // flexDirection: 'column',
        // '& > * + *': {
        //     marginTop: theme.spacing(1),
        // },
    },
})

interface Props extends WithStyles<typeof styles> {
    classes: any,
    post: PostI
}

const Post: React.FC<Props> = ({ classes, post }) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    console.log('post', post)
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
          </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon />
                    </IconButton>
                }
                title={post.restaurant.name}
                subheader={moment(post.date).fromNow()}
            />
            <CardMedia
                className={classes.media}
                image={post.mainPicture}
                title={post.title}
            />
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">
                    {post.body}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <FavoriteIcon />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareIcon />
                </IconButton>
                <div className={classes.rating}>
                    <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                    {/* <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> */}
                </div>
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
                    <Typography >Comments to come:</Typography>

                </CardContent>
            </Collapse>
        </Card>
    );
}


export default withStyles(styles)(Post)
