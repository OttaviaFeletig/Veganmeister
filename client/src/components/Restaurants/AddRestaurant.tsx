import React, { useContext, useRef, useState, useEffect } from 'react';
import { fade, Theme, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
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
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import moment from 'moment';
import Rating from '@material-ui/lab/Rating';
import { PostN } from '../../@types';
import Skeleton from '@material-ui/lab/Skeleton';
import { InputBase, Divider, Grid, FormControlLabel, Switch, Box, TextField } from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';
import SendIcon from '@material-ui/icons/Send';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import { RestaurantsContext } from '../../context/RestaurantsContext';
import JoditEditor from "jodit-react";
import DoneIcon from '@material-ui/icons/Done'
import { EditorState } from 'draft-js'
import Grow from '@material-ui/core/Grow';
// import PostSections from './PostSections';
// import PostComments from './PostComments';
import BackButton from '../Elements/GraphicElmts/BackButton';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import ImgDropzone from '../Elements/GraphicElmts/ImgDropzone'
import AsyncRestaurantSearch from '../Elements/Search/AsyncRestaurantSearch';

moment().format();

const styles = (theme: Theme) => createStyles({

    root: {
        // maxWidth: 345,
    },
    commentsCard: {
        marginTop: theme.spacing(2)
    },
    media: {
        height: 200,
        objectFit: 'cover',
        textAlign: 'center'
    },
    action: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 0
    },
    avatar: {
        backgroundColor: theme.palette.secondary.main,
    },
    avatarIMG: {
        opacity: 0.6
    },
    expand: {
        // transform: 'rotate(0deg)',
        marginRight: 0,
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        // transform: 'rotate(180deg)',
    },
    rating: {
        display: 'flex',
        // flexDirection: 'column',
        // '& > * + *': {
        //     marginTop: theme.spacing(1),
        // },
    },
    content: {
        // marginBottom: theme.spacing(4)
    },
    comments: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.05),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.1),
        },
        // marginRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        // marginLeft: 0,
        width: '100%',
        // [theme.breakpoints.up('sm')]: {
        //     marginLeft: theme.spacing(3),
        //     // width: 'auto',
        // },
    },
    commentIcon: {
        color: fade(theme.palette.common.black, 0.5),
        // padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    commentsContainer: {
        display: 'flex',
        alignItems: 'center',
        // marginTop: theme.spacing(1)

    },
    commentBody: {
        width: '100%',
        padding: theme.spacing(2),
        backgroundColor: fade(theme.palette.common.black, 0.05),
        borderRadius: theme.shape.borderRadius,


    },
    responsiveField: {
        height: '100%',
        width: '100%',
        margin: 0,
        textAlign: 'center',
        // [theme.breakpoints.down('xs')]: {
        //     width: '100%',
        //     marginLeft: 0,
        //     marginRight: 0
        // }
    },
    inputRoot: {
        color: 'inherit',
        width: '100%',

    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(5)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        // [theme.breakpoints.up('md')]: {
        //     width: '20ch',
        // },
    },
    iconButton: {
        // padding: 10,
    },
    divider: {
        // height: 28,
        // margin: 4,
    },
})

interface Props extends WithStyles<typeof styles> {
    classes: any,
    match: any,
}
const AddRestaurant: React.FC<Props> = ({ classes, match }) => {
    const loading = false;
    const { postId } = match.params;
    const { newRestaurant } = useContext(RestaurantsContext)
    const [restaurant, setRestaurant] = useState(newRestaurant)

    useEffect(() => {
        setRestaurant(newRestaurant)
    }, [newRestaurant])
    // const post = posts.find((post: PostN.PostI) => post._id === postId)
    const { isAuthenticated } = useContext(AuthContext)
    console.log('newRestaurant :', newRestaurant);
    return (
        <React.Fragment>
            <BackButton to="/posts" text="Back to Posts" />
            <Card className={classes.card}>

                <React.Fragment>

                    <ImgDropzone />

                </React.Fragment>
                <CardContent>

                    <Grid container spacing={2} className={classes.article}>

                        <Grid item xs={12}>
                            <AsyncRestaurantSearch city='berlin' />
                        </Grid>
                        <Grid item xs={12}>

                            <TextField
                                inputProps={{ style: { textAlign: 'center' } }}
                                InputLabelProps={{ style: { marginLeft: '50px' } }}
                                color="secondary"
                                id="filled-required"
                                label={`restaurant name`}
                                value={restaurant ? restaurant.name : ''}
                                // defaultValue={newRestaurant ? newRestaurant.name : ''}
                                className={classes.responsiveField}
                                onChange={(e) => setRestaurant({ ...restaurant, name: e.target.value })}
                                margin="normal"
                                variant="filled"
                            />
                        </Grid>
                    </Grid>
                </CardContent>

                <CardActions className={classes.action} disableSpacing>
                    {/* <div className={classes.rating}>
                        <Rating name="half-rating" readOnly defaultValue={post.rating} precision={0.5} />
                    </div>
                    <div>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                            <Typography variant="body2"> {post.likes} likes</Typography>
                        </IconButton>
                    </div> */}


                </CardActions>
            </Card>

        </React.Fragment >
    );
}




export default withStyles(styles)(AddRestaurant)
