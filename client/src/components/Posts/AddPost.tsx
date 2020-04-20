import React, { useContext, useState } from 'react';
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
import { PostN, RestaurantN } from '../../@types';
import Skeleton from '@material-ui/lab/Skeleton';
import { FormControlLabel, Switch, Grid, FormControl, InputLabel, Select, TextField, CircularProgress, Fab } from '@material-ui/core';
import { PostsContext } from '../../context/PostsContext';
import Grow from '@material-ui/core/Grow';
import PostSections from './PostSections';
import PostComments from './PostComments';
import BackButton from '../Elements/GraphicElmts/BackButton';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import ImgDropzone from '../Elements/GraphicElmts/ImgDropzone'
import Autocomplete from '@material-ui/lab/Autocomplete';
import MaterialIconAsync from '../Elements/GraphicElmts/MaterialIconAsync';
import clsx from 'clsx';
import { RestaurantsContext } from '../../context/RestaurantsContext';
import dataSite from '../../assets/data/siteData.json'

moment().format();

const styles = (theme: Theme) => createStyles({
    root: {
        // backgroundColor: fade(theme.palette.secondary.main, 0.1),
        margin: 0,
        width: '100%',
    },
    flexCentered: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
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
    responsiveFieldSide: {
        textAlign: 'center',
        width: '100%',
        marginTop: 0,
        marginBottom: 0,
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            marginLeft: 0,
            marginRight: 0
        }
    },
    expand: {
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

    },
    content: {
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
        paddingLeft: theme.spacing(2),
        // marginLeft: 0,
        width: '100%',

    },
    commentIcon: {
        color: fade(theme.palette.common.black, 0.5),
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
    },
    commentBody: {
        width: '100%',
        padding: theme.spacing(2),
        backgroundColor: fade(theme.palette.common.black, 0.05),
        borderRadius: theme.shape.borderRadius,


    },
    search: {
        position: 'relative',
        display: 'flex',
        borderRadius: theme.shape.borderRadius,
        // backgroundColor: fade(theme.palette.common.black, 0.1),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.1),
        },
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
        width: '100%',

    },
    inputRoot: {
        color: 'inherit',
        width: '100%',

    },
    inputInput: {
        padding: theme.spacing(1, 1, 1, 0),
        paddingLeft: `calc(1em + ${theme.spacing(5)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
    },
    autoComplete: {
        width: '100%',
        margin: theme.spacing(1),
    },
})

interface Props extends WithStyles<typeof styles> {

}
const AddPost: React.FC<Props> = ({ classes }) => {
    const loading = false;
    const { newPost } = useContext(PostsContext)
    const { restaurants } = useContext(RestaurantsContext)
    const { user } = useContext(AuthContext)
    const [city, setCity] = useState<string | unknown>('');
    const [title, setTitle] = useState<string>('')
    const [options, setOptions] = useState<RestaurantN.RestaurantsT>(restaurants);
    const [selected, setSelected] = useState<RestaurantN.RestaurantI>();
    const { isAuthenticated } = useContext(AuthContext)
    const handleSelectedOption = (option: RestaurantN.RestaurantI, value: RestaurantN.RestaurantI) => {
        console.log('value :', value);
        console.log('option :', option);
        setSelected(option)
        return option.name === value.name
    }
    const handleNewPost = () => {
        console.log('user', user)
        newPost(selected, user, title)
    }
    console.log('options :', options);
    return (
        <React.Fragment>
            <BackButton to="/posts" text="Back to Posts" />
            <Card >
                <Grid container spacing={2} className={clsx(classes.root, classes.flexCentered)}>
                    <Grid item xs={12} >
                        <Typography variant="body2">select restaurant</Typography>
                    </Grid>
                    <Grid item xs={12} md={1} className={classes.flexCentered}>
                        <FormControl >
                            <InputLabel htmlFor="age-native-simple">City</InputLabel>
                            <Select
                                native
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                            >
                                <option aria-label="None" value="" />
                                {dataSite.cities.map(city => <option key={city} value={city}>{city}</option>)}
                            </Select>
                        </FormControl>
                    </Grid>
                    <Grid item xs={12} md={10} className={clsx(classes.flexCentered, classes.autoComplete)}>
                        {city ?
                            <Autocomplete

                                id="restaurant"
                                options={options}
                                getOptionLabel={(option) => option.name}
                                style={{ width: '100%' }}
                                getOptionSelected={(option, value) => handleSelectedOption(option, value)}
                                renderInput={(params) => <TextField color="secondary" {...params} label="Restaurant" variant="outlined" />}
                                filterOptions={(options, params) => {
                                    // const nameFiltered = filter(options, params) as RestaurantN.RestaurantsT;

                                    // if (params.inputValue !== '') {
                                    //     filtered.push({
                                    //         // inputValue: params.inputValue,
                                    //         title: `Add "${params.inputValue}"`,
                                    //     });
                                    // }
                                    console.log('options', options)
                                    const filtered = options.filter(opt => {
                                        console.log('opt.name :', opt.name);
                                        console.log('params', params)
                                        return opt.location.city === city &&
                                            opt.name.toLowerCase().includes(params.inputValue.toLowerCase())
                                    }

                                    )
                                    console.log('filtered', filtered)
                                    return filtered
                                }}
                                renderOption={(option) => {
                                    // const matches = option.structured_formatting.main_text_matched_substrings;
                                    // const parts = parse(
                                    //     option.structured_formatting.main_text,
                                    //     matches.map((match: any) => [match.offset, match.offset + match.length]),
                                    // );
                                    console.log('option :', option.location.city);
                                    console.log('city :', city);
                                    return (
                                        <Grid container alignItems="center">

                                            <Grid item xs>
                                                <span style={{ fontWeight: 400 }}>
                                                    {option.name}
                                                </span>
                                                <Typography variant="body1" color="textSecondary">
                                                    {option.description}
                                                </Typography>

                                            </Grid>
                                            {/* :
                                                <Grid item xs>
                                                    <span style={{ fontWeight: 400 }}>
                                                        No restaurant match in {city}
                                                    </span>
                                                    <Link to="./addRestaurant">
                                                        <Typography variant="body1" color="textSecondary">
                                                            consider adding a new restaurant instead
                                                    </Typography>
                                                    </Link>
                                                </Grid>
                                            } */}
                                        </Grid>
                                    );
                                }}
                            />
                            : <Typography variant="body2">select city to start looking for restaurants</Typography>}
                    </Grid>
                    {selected &&
                        <Grid container alignItems="center">
                            <Grid item xs={12}>
                                <TextField
                                    inputProps={{ style: { textAlign: 'center' } }}
                                    InputLabelProps={{ style: { marginLeft: '50px' } }}
                                    color="secondary"
                                    label={`title`}
                                    defaultValue={title}
                                    className={classes.responsiveFieldSide}
                                    onChange={(e) => setTitle(e.target.value)}
                                    margin="normal"
                                    variant="filled"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Fab
                                    component={Link}
                                    to={`./posts/${'3'}`}
                                    size="large"
                                    aria-label="image input"
                                    onClick={handleNewPost}
                                    // className={classes.addIcon}
                                    color="secondary"
                                >
                                    <MaterialIconAsync icon='AddCircleOutlineIcon' />
                                </Fab>
                                <Typography variant="body1">Create new post</Typography>
                            </Grid>
                        </Grid>
                    }
                </Grid>


            </Card>
        </React.Fragment >
    )
    // }
    //             </CardContent >

    // <CardActions className={classes.action} disableSpacing>
    //     <div className={classes.rating}>
    //         <Rating name="half-rating" readOnly defaultValue={post.rating} precision={0.5} />
    //     </div>
    //     <div>
    //         <IconButton aria-label="share">
    //             <ShareIcon />
    //         </IconButton>
    //         <IconButton aria-label="add to favorites">
    //             <FavoriteIcon />
    //             <Typography variant="body2"> {post.likes} likes</Typography>
    //         </IconButton>
    //     </div>


    // </CardActions>
    //         </Card >
    // <Grow in
    //     style={{ transformOrigin: '0 0 0' }}
    //     timeout={1000}

    // >
    //     <PostComments post={post} />
    // </Grow> * /}
    //     </React.Fragment >
    // );
}




export default withStyles(styles)(AddPost)
