import React from 'react';
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
import { Link } from 'react-router-dom'
import moment from 'moment';
import Rating from '@material-ui/lab/Rating';
import { RestaurantN } from '../../@types';
import Skeleton from '@material-ui/lab/Skeleton';
import { Grid, Divider, Box } from '@material-ui/core';
import Ratings from '../Elements/GraphicElmts/Ratings';
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
    overlay: {
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: '400px',
        left: '00px',
        marginRight: '10px',
        width: 250,
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.5),
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
    bottomSkeleton: {
        marginBottom: 6,
        marginTop: 20
    }
})

interface Props extends WithStyles<typeof styles> {
    classes: any,
    restaurant: RestaurantN.RestaurantI,
    loading?: boolean;
}

const RestaurantItem: React.FC<Props> = ({ classes, restaurant, loading }) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    console.log('restaurant', restaurant)
    return (
        <Card className={classes.card}>
            {/* <CardHeader
                avatar={
                    loading ? (
                        <Skeleton animation="wave" variant="circle" width={40} height={40} />
                    ) : (
                            <Avatar
                                classes={{ img: classes.avatarIMG }}
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
            /> */}
            {loading ? (
                <Skeleton animation="wave" variant="rect" className={classes.media} />
            ) : (
                    <React.Fragment>
                        {/* <div className={classes.overlay}>

                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon />
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon />
                            </IconButton>
                            <div className={classes.rating}>
                                <Rating name="half-rating" readOnly defaultValue={post.rating} precision={0.5} />
                            </div>
                        </div> */}
                        <CardMedia
                            component={Link} to={`/restaurants/${restaurant._id}`} style={{ textDecoration: 'none' }}
                            className={classes.media}
                            image={restaurant.mainPicture}
                            title={restaurant.name}
                        />

                    </React.Fragment>
                )
            }
            <CardContent>

                {loading ? (
                    <React.Fragment>
                        <Skeleton animation="wave" height={40} style={{ marginBottom: 6 }} />
                        <Skeleton animation="wave" height={15} width="80%" />
                    </React.Fragment>
                ) : (
                        <Grid component={Link} to={`/restaurants/${restaurant._id}`} style={{ textDecoration: 'none' }}>
                            <Typography variant="h4" color="secondary" component="p">
                                {restaurant.name}
                            </Typography>
                            {/* <Typography variant="body1" color="textSecondary" component="p">
                                {post.title}
                            </Typography> */}
                        </Grid>
                    )}
            </CardContent>
            <Divider variant="middle" />

            <CardActions className={classes.action} disableSpacing>
                {loading ? (<React.Fragment>
                    <Skeleton animation="wave" variant="circle" width={40} height={40} className={classes.bottomSkeleton} />
                    <Skeleton animation="wave" height={50} width="20%" className={classes.bottomSkeleton} />
                    <Skeleton animation="wave" height={50} width="30%" className={classes.bottomSkeleton} />
                    <Skeleton animation="wave" height={50} width="30%" className={classes.bottomSkeleton} />
                </React.Fragment>)

                    : (
                        <React.Fragment >
                            {/* <CardHeader
                                avatar={
                                    <Avatar
                                        classes={{ img: classes.avatarIMG }}
                                        className={classes.avatar}
                                        alt={"user avatar"}
                                        src={post.author.avatar}
                                    />
                                }

                                title={<React.Fragment > {post.author.username}</React.Fragment>}
                                subheader={moment(post.date).fromNow()}
                            /> */}

                            <Ratings rating={restaurant.globalRating} />

                            <div>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                    <Typography variant="body2"> {restaurant.likes} likes</Typography>
                                </IconButton>
                            </div>

                        </React.Fragment>)
                }

            </CardActions>
        </Card >
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




export default withStyles(styles)(RestaurantItem)
