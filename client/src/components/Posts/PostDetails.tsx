import React, { useContext } from 'react';
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
import MoreVertIcon from '@material-ui/icons/MoreVert';
import moment from 'moment';
import Rating from '@material-ui/lab/Rating';
import { PostI } from '../../@types';
import Skeleton from '@material-ui/lab/Skeleton';
import { InputBase, Divider } from '@material-ui/core';
import CommentIcon from '@material-ui/icons/Comment';
import SendIcon from '@material-ui/icons/Send';
import { PostsContext } from '../../context/PostsContext';


moment().format();

const styles = (theme: Theme) => createStyles({

    root: {
        // maxWidth: 345,
    },
    card: {
        // height: 600
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
        [theme.breakpoints.down('md')]: {
            paddingTop: '20', // 16:9
        },
    },
    action: {
        marginBottom: 0
    },
    avatar: {
        backgroundColor: fade(theme.palette.common.black, 0.5),
    },
    avatarIMG: {

    },
    expand: {
        transform: 'rotate(0deg)',
        marginRight: 0,
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    rating: {
        display: 'flex',
        // flexDirection: 'column',
        // '& > * + *': {
        //     marginTop: theme.spacing(1),
        // },
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
        marginRight: theme.spacing(2),
        paddingLeft: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            // width: 'auto',
        },
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

const PostDetails: React.FC<Props> = ({ classes, match }) => {
    const [expanded, setExpanded] = React.useState(false);
    const loading = false;
    const { postId } = match.params;
    const { posts } = useContext(PostsContext)
    const post = posts.find((post: PostI) => post._id === postId)
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                    loading ? (
                        <Skeleton animation="wave" variant="circle" width={40} height={40} />
                    ) : (
                            <Avatar
                                // component={classes.avatar}
                                classes={classes.avatarIMG}
                                className={classes.avatar}
                                alt={"user avatar"}
                                src={post.author.avatar}
                            />
                        )
                }
                action={
                    loading ? null : (
                        <IconButton aria-label="settings">
                            <MoreVertIcon />
                        </IconButton>
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
                    <CardMedia
                        className={classes.media}
                        image={post.mainPicture}
                        title={post.title}
                    />
                )}
            <CardContent>
                {loading ? (
                    <React.Fragment>
                        <Skeleton animation="wave" height={40} style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={15} width="80%" />
                    </React.Fragment>
                ) : (
                        <React.Fragment>
                            <Typography variant="h4" color="secondary" component="p">
                                {post.restaurant.name}
                            </Typography>
                            <Typography variant="body1" color="textSecondary" component="p">
                                {post.title}
                            </Typography>
                        </React.Fragment>
                    )}
            </CardContent>
            <CardActions className={classes.action} disableSpacing>
                {loading ? <Skeleton animation="wave" height={50} width="100%" />

                    : (
                        <React.Fragment >
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                            <div className={classes.rating}>
                                <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                            </div>
                            <div className={classes.comments}>
                                <div className={classes.commentIcon}>
                                    <CommentIcon />
                                </div>
                                <InputBase
                                    placeholder="Comment"
                                    classes={{
                                        root: classes.inputRoot,
                                        input: classes.inputInput,
                                    }}
                                    inputProps={{ 'aria-label': 'comment' }}
                                />
                                <Divider className={classes.divider} orientation="vertical" />
                                <IconButton color="primary" className={classes.iconButton} aria-label="directions">
                                    <SendIcon />
                                </IconButton>
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
                        </React.Fragment>)
                }

            </CardActions>
        </Card>
        // <Card className={classes.root}>
        //     <CardHeader
        //         avatar={
        //             <Avatar aria-label="recipe" className={classes.avatar}>
        //                 R
        //   </Avatar>
        //         }
        //         action={
        //             <IconButton aria-label="settings">
        //                 <MoreVertIcon />
        //             </IconButton>
        //         }
        //         title={post.restaurant.name}
        //         subheader={moment(post.date).fromNow()}
        //     />
        //     <CardMedia
        //         className={classes.media}
        //         image={post.mainPicture}
        //         title={post.title}
        //     />
        //     <CardContent>
        //         <Typography variant="body2" color="textSecondary" component="p">
        //             {post.body}
        //         </Typography>
        //     </CardContent>
        //     <CardActions disableSpacing>
        //         <IconButton aria-label="add to favorites">
        //             <FavoriteIcon />
        //         </IconButton>
        //         <IconButton aria-label="share">
        //             <ShareIcon />
        //         </IconButton>
        //         <div className={classes.rating}>
        //             <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
        //             {/* <Rating name="half-rating-read" defaultValue={2.5} precision={0.5} readOnly /> */}
        //         </div>
        //         <IconButton
        //             className={clsx(classes.expand, {
        //                 [classes.expandOpen]: expanded,
        //             })}
        //             onClick={handleExpandClick}
        //             aria-expanded={expanded}
        //             aria-label="show more"
        //         >

        //             <ExpandMoreIcon />
        //         </IconButton>
        //     </CardActions>
        //     <Collapse in={expanded} timeout="auto" unmountOnExit>
        //         <CardContent>
        //             <Typography >Comments to come:</Typography>

        //         </CardContent>
        //     </Collapse>
        // </Card>
    );
}




export default withStyles(styles)(PostDetails)
