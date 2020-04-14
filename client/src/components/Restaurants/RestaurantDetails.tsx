import React, { useContext } from 'react';
import { fade, Theme, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import moment from 'moment';
import { RestaurantN } from '../../@types';
import Skeleton from '@material-ui/lab/Skeleton';
import { GridList, GridListTile, Button, Grid } from '@material-ui/core';
import { RestaurantsContext } from '../../context/RestaurantsContext';
import BackButton from '../Elements/GraphicElmts/BackButton';
import ImgDialog from '../Elements/GraphicElmts/ImgDialog';
import MaterialIconAsync from '../Elements/GraphicElmts/MaterialIconAsync';
import Ratings from '../Elements/GraphicElmts/Ratings';
import { match } from 'react-router-dom';


moment().format();

const styles = (theme: Theme) => createStyles({

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
    iconButton: {
        // padding: 10,
    },
    gridList: {
        width: '100%',
        justifyContent: 'center',
        // height: 450,
    },

})

type TParams = { restaurantId: string };
interface Props extends WithStyles<typeof styles> {
    match: match<TParams>,
}
const PostDetails: React.FC<Props> = ({ classes, match }) => {
    const loading = false;
    const { restaurantId } = match.params;
    const { restaurants } = useContext(RestaurantsContext)
    const restaurant = restaurants.find((restaurant: RestaurantN.RestaurantI) => restaurant._id === restaurantId)
    console.log('restaurant', restaurant)




    const handleImgClick = (img: string) => {
        console.log('img', img)
        return (<ImgDialog img={img} />)
    }
    return (
        <React.Fragment>
            <BackButton to="/restaurants" text="Back to Restaurants" />
            <Card >

                {loading ? (
                    <Skeleton animation="wave" variant="rect" className={classes.media} />
                ) : (
                        <CardMedia
                            component="image"
                            className={classes.media}
                            image={restaurant.mainPicture}
                        // title={restaurant.name}
                        />
                    )}
                <CardContent>
                    {loading ? (
                        <React.Fragment>
                            <Skeleton animation="wave" height={40} style={{ marginBottom: 6 }} />
                            <Skeleton animation="wave" height={15} width="80%" />
                        </React.Fragment>
                    ) : (
                            <Grid container spacing={2} >
                                <Grid item xs={12} md={6} >
                                    <Typography variant="h4" color="secondary" component="p">
                                        {restaurant.name}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} md={6} >
                                    <Typography variant="h6" color="secondary" component="p">
                                        {restaurant.address}
                                    </Typography>
                                </Grid>
                                <Grid item xs={12} >
                                    <Typography variant="body1" color="textSecondary" component="p">
                                        {restaurant.description}
                                    </Typography>
                                </Grid>
                                {/* <PostSections post={post} />
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {post.body}
                                </Typography> */}
                                <GridList cellHeight={160} className={classes.gridList} cols={3}>
                                    {restaurant.images.map((img: string, i: number) => (
                                        <GridListTile key={img} cols={Math.round(Math.sin(i * 2))}>
                                            <img onClick={() => handleImgClick(img)} src={img} alt={img} />
                                            {/* <ImgDialog img={img} /> */}
                                        </GridListTile>
                                    ))}
                                </GridList>
                            </Grid>
                        )}
                </CardContent>
                <CardActions className={classes.action} disableSpacing>
                    <Ratings rating={restaurant.rating} />
                    <div>
                        <IconButton aria-label="share">
                            <ShareIcon />
                        </IconButton>
                        <IconButton aria-label="add to favorites">
                            <FavoriteIcon />
                            <Typography variant="body2"> {restaurant.likes} likes</Typography>
                        </IconButton>
                    </div>

                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        startIcon={<MaterialIconAsync icon="RateReview" />}
                    // onClick={() => history.push('/restaurants')}
                    >
                        Review
                          </Button>

                </CardActions>
            </Card>
            {/* <Grow in
                style={{ transformOrigin: '0 0 0' }}
                timeout={1000}

            >
                 <PostComments post={post} /> 
            </Grow> */}
        </React.Fragment >
    );
}




export default withStyles(styles)(PostDetails)
