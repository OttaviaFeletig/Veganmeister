import React, { useContext, useState } from 'react';
import { fade, Theme, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import moment from 'moment';
import { Grid, TextField, Button } from '@material-ui/core';
import { RestaurantsContext } from '../../context/RestaurantsContext';
import BackButton from '../Elements/GraphicElmts/BackButton';
import { AuthContext } from '../../context/AuthContext';
import ImgDropzone from '../Elements/GraphicElmts/ImgDropzone'
import RestaurantFoursquareSearch from '../Elements/Search/RestaurantFoursquareSearch';
import Hashtags from '../Elements/GraphicElmts/Hashtags';
import MaterialIconAsync from '../Elements/GraphicElmts/MaterialIconAsync';

moment().format();

const styles = (theme: Theme) => createStyles({
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
    actionGrid: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
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
    inHash: {
        display: 'flex',
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
    input: {
        color: 'inherit',
        width: '100%',
        padding: theme.spacing(2),
        backgroundColor: fade(theme.palette.common.black, 0.05),
    },
    button: {
        width: 150,
        margin: theme.spacing(1),
        color: theme.palette.common.white,
    },


})

interface Props extends WithStyles<typeof styles> {
    history: any,
}
const AddRestaurant: React.FC<Props> = ({ classes, history }) => {

    const { newRestaurant, handleSetNewRestaurant, addRestaurant } = useContext(RestaurantsContext)
    const [newHashtags, setNewHashtags] = useState('')

    console.log('restaurant :', newRestaurant);
    const handleSave = () => {

        Object.keys(newRestaurant).forEach(key => {
            if (!newRestaurant[key]) alert(`fill up ${key}`)
        })

        //TODO check if complete
        addRestaurant()
        history.push('/restaurants')
    }
    const handleAddNewHashtags = () => {
        if (newHashtags) {
            handleSetNewRestaurant({
                ...newRestaurant,
                hashtags: [...newRestaurant.hashtags, ...newHashtags.split(",")]
            })
            setNewHashtags('')
        }
    }
    return (
        <React.Fragment>
            <BackButton to="/restaurants" text="Back to Restaurants" />
            <Card >

                <React.Fragment>

                    <ImgDropzone />

                </React.Fragment>
                <CardContent>

                    <Grid container spacing={2} >

                        <RestaurantFoursquareSearch />

                        <Grid item xs={12} md={10}>

                            <TextField
                                inputProps={{ style: { textAlign: 'center' } }}
                                // InputLabelProps={{ style: { marginLeft: '50px' } }}
                                color="secondary"
                                label={`restaurant name`}
                                value={newRestaurant.name}
                                // defaultValue={newRestaurant ? newRestaurant.name : ''}
                                className={classes.responsiveField}
                                onChange={(e) => handleSetNewRestaurant({ ...newRestaurant, name: e.target.value })}
                                margin="normal"
                                variant="filled"
                            />
                        </Grid>
                        <Grid item xs={12} md={2} >

                            <TextField
                                inputProps={{ style: { textAlign: 'center' } }}
                                // InputLabelProps={{ style: { marginLeft: '50px' } }}
                                color="secondary"
                                label={`city`}
                                value={newRestaurant.location.city}
                                // defaultValue={newRestaurant ? newRestaurant.name : ''}
                                className={classes.responsiveField}
                                onChange={(e) => handleSetNewRestaurant({ ...newRestaurant, location: { ...newRestaurant.location, city: e.target.value } })}
                                margin="normal"
                                variant="filled"
                            />
                        </Grid>

                        <Grid item xs={12} md={8}>

                            <TextField
                                inputProps={{ style: { textAlign: 'center' } }}
                                // InputLabelProps={{ style: { marginLeft: '50px' } }}
                                color="secondary"
                                label={`address`}
                                value={newRestaurant.location.address}
                                // defaultValue={newRestaurant ? newRestaurant.name : ''}
                                className={classes.responsiveField}
                                onChange={(e) => handleSetNewRestaurant({ ...newRestaurant, location: { ...newRestaurant.location, address: e.target.value } })}
                                margin="normal"
                                variant="filled"
                            />
                        </Grid>
                        <Grid item xs={12} md={2}>

                            <TextField
                                inputProps={{ style: { textAlign: 'center' } }}
                                // InputLabelProps={{ style: { marginLeft: '50px' } }}
                                color="secondary"
                                label={`district`}
                                value={newRestaurant.location.district}
                                // defaultValue={newRestaurant ? newRestaurant.name : ''}
                                className={classes.responsiveField}
                                onChange={(e) => handleSetNewRestaurant({ ...newRestaurant, location: { ...newRestaurant.location, district: e.target.value } })}
                                margin="normal"
                                variant="filled"
                            />
                        </Grid>
                        <Grid item xs={12} md={2}>

                            <TextField
                                inputProps={{ style: { textAlign: 'center' } }}
                                // InputLabelProps={{ style: { marginLeft: '50px' } }}
                                color="secondary"
                                label={`country`}
                                value={newRestaurant.location.country}
                                // defaultValue={newRestaurant ? newRestaurant.name : ''}
                                className={classes.responsiveField}
                                onChange={(e) => handleSetNewRestaurant({ ...newRestaurant, location: { ...newRestaurant.location, country: e.target.value } })}
                                margin="normal"
                                variant="filled"
                            />
                        </Grid>
                        <Grid item xs={12} >

                            <TextField
                                inputProps={{ style: { textAlign: 'center' } }}
                                // InputLabelProps={{ style: { marginLeft: '50px' } }}
                                color="secondary"
                                label={`description`}
                                value={newRestaurant.description}
                                multiline
                                rows="5"
                                className={classes.responsiveField}
                                onChange={(e) => handleSetNewRestaurant({ ...newRestaurant, description: e.target.value })}
                                margin="normal"
                                variant="filled"
                            />
                        </Grid>
                    </Grid>
                </CardContent>

                <CardActions className={classes.action} disableSpacing>
                    <Grid container spacing={2} className={classes.actionGrid}>

                        <Grid item xs={12} md={4} className={classes.inHash}>
                            <TextField
                                inputProps={{ style: { textAlign: 'center' } }}
                                // InputLabelProps={{ style: { marginLeft: '50px' } }}
                                color="secondary"
                                placeholder='Add Hashtags separated by ","'
                                value={newHashtags}
                                // defaultValue={newRestaurant ? newRestaurant.name : ''}
                                className={classes.responsiveField}
                                onChange={(e) => setNewHashtags(e.target.value)}
                                margin="normal"
                                variant="filled"
                            />
                            <Grid item xs={2} className={classes.inHash}>

                                <IconButton onClick={handleAddNewHashtags}
                                    aria-label="hashtags">
                                    <MaterialIconAsync icon="Add" />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} md={6}>


                            < Hashtags hashtags={newRestaurant.hashtags} />
                        </Grid>

                        <Grid item xs={12} className={classes.actionGrid} >
                            <Button
                                variant="contained"
                                color="secondary"
                                size="large"
                                className={classes.button}
                                startIcon={<MaterialIconAsync icon="Clear" />}
                                onClick={() => history.push('/restaurants')}
                            >
                                Cancel
                          </Button>
                            <Button
                                variant="contained"
                                color="secondary"
                                size="large"
                                className={classes.button}
                                startIcon={<MaterialIconAsync icon="SaveIcon" />}
                                onClick={handleSave}
                            >
                                Save
                          </Button>

                        </Grid>
                    </Grid>
                </CardActions>
            </Card>

        </React.Fragment >
    );
}




export default withStyles(styles)(AddRestaurant)
