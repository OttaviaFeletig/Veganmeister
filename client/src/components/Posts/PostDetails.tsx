import React, { useContext } from 'react';
import { fade, Theme, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import moment from 'moment';
import Rating from '@material-ui/lab/Rating';
import { PostN } from '../../@types';
import Skeleton from '@material-ui/lab/Skeleton';
import { FormControlLabel, Switch } from '@material-ui/core';
import { PostsContext } from '../../context/PostsContext';
import Grow from '@material-ui/core/Grow';
import PostSections from './PostSections';
import PostComments from './PostComments';
import BackButton from '../Elements/GraphicElmts/BackButton';
import { Link, match, Redirect } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import ImgDropzone from '../Elements/GraphicElmts/ImgDropzone'

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
})

type TParams = { postId: string };
interface Props extends WithStyles<typeof styles> {
    match: match<TParams>,
}
const PostDetails: React.FC<Props> = ({ classes, match }) => {
    const loading = false;
    const { postId } = match.params;
    const { posts, editMode, toggleEditMode } = useContext(PostsContext)
    const post = posts.find((post: PostN.PostI) => post._id === postId)
    const { isAuthenticated } = useContext(AuthContext)
    if (post)
        return (
            <React.Fragment>
                <BackButton to="/posts" text="Back to Posts" />
                <Card>
                    <CardHeader
                        avatar={
                            loading ? (
                                <Skeleton animation="wave" variant="circle" width={40} height={40} />
                            ) : (
                                    <Avatar
                                        // component={classes.avatar}
                                        classes={{ img: classes.avatarIMG }}
                                        className={classes.avatar}
                                        alt={"user avatar"}
                                        src={post.author.avatar}
                                    />
                                )
                        }
                        action={
                            loading ? null : (
                                <React.Fragment>
                                    {isAuthenticated && <FormControlLabel
                                        control={
                                            <Switch checked={editMode} value={editMode} onChange={() => toggleEditMode(!editMode)} />
                                        }
                                        label="Edit Mode"
                                    />}
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon />
                                    </IconButton>
                                </React.Fragment>
                            )
                        }
                        title={
                            loading ? (
                                <Skeleton animation="wave" height={10} width="80%" style={{ marginBottom: 6 }} />
                            ) : (<React.Fragment > {post.author.username}</React.Fragment>)
                        }
                        subheader={loading ? <Skeleton animation="wave" height={10} width="40%" /> : '5 hours ago'}
                    />
                    {loading ? (
                        <Skeleton animation="wave" variant="rect" className={classes.media} />
                    ) : (
                            <React.Fragment>
                                {editMode ?
                                    <ImgDropzone />
                                    :
                                    <CardMedia
                                        className={classes.media}
                                        image={post.mainPicture}
                                        title={post.title}
                                    />}
                            </React.Fragment>)}
                    <CardContent>
                        {loading ? (
                            <React.Fragment>
                                <Skeleton animation="wave" height={40} style={{ marginBottom: 6 }} />
                                <Skeleton animation="wave" height={15} width="80%" />
                            </React.Fragment>
                        ) : (
                                <React.Fragment>
                                    <React.Fragment>
                                        <Link to={`/restaurants/${post.restaurant._id}`} style={{ textDecoration: 'none' }}>
                                            <Typography variant="h4" color="secondary" component="p">
                                                {post.restaurant.name}
                                            </Typography>
                                        </Link>
                                        <Typography variant="body1" color="textSecondary" component="p">
                                            {post.title}
                                        </Typography>
                                    </React.Fragment>
                                    <PostSections post={post} />
                                    {/* <Typography variant="body2" color="textSecondary" component="p">
                                    {post.body}
                                </Typography> */}
                                </React.Fragment>
                            )}
                    </CardContent>

                    <CardActions className={classes.action} disableSpacing>
                        <div className={classes.rating}>
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
                        </div>


                    </CardActions>
                </Card>
                <Grow in
                    style={{ transformOrigin: '0 0 0' }}
                    timeout={1000}

                >
                    <PostComments post={post} />
                </Grow>
            </React.Fragment >
        );
    else return (<Redirect to='/posts' />)
}




export default withStyles(styles)(PostDetails)
