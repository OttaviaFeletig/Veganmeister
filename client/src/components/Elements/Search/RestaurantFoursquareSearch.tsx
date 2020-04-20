import fetch from 'cross-fetch';
import clsx from 'clsx';
import React, { useState, useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Theme, createStyles, fade, WithStyles, withStyles, Grid, Typography, FormControl, InputLabel, Select } from '@material-ui/core';
import MaterialIconAsync from '../GraphicElmts/MaterialIconAsync';
import { RestaurantsContext } from '../../../context/RestaurantsContext';
import { RestaurantN } from '../../../@types';
import dataSite from '../../../assets/data/siteData.json'

interface VenueType {
    id: string;
    name: string;
    location: any;
    categories: any;
    referralId: string;
    hasPerk: boolean;
}

const styles = (theme: Theme) => createStyles({

    flexCentered: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
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
    autoComplete: {
        width: '100%',
        margin: theme.spacing(1),
    },
    root: {
        backgroundColor: fade(theme.palette.secondary.main, 0.1),
        margin: 0,
        width: '100%',
    },
    inputInput: {
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },

})

const RestaurantFoursquareSearch: React.FC<WithStyles<typeof styles>> = ({ classes }) => {
    const [open, setOpen] = useState(false);
    const [city, setCity] = useState<string | unknown>('');
    const [options, setOptions] = useState<VenueType[]>([]);
    const [selectedVenue, setSelectedVenue] = useState<VenueType | null>();
    const [query, setQuery] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    // const loading = open && options.length === 0;
    const { newRestaurant, handleSetNewRestaurant } = useContext(RestaurantsContext)


    React.useEffect(() => {
        let active = true;

        if (!query || selectedVenue) {
            return undefined;
        }

        (async () => {
            const { REACT_APP_foursquare_client_secret, REACT_APP_foursquare_client_id } = process.env
            setLoading(true);

            const myHeaders = new Headers();
            myHeaders.append("Accept-Language", "English");
            const requestOptions = {
                method: 'GET',
                headers: myHeaders,
            };
            const response = await
                fetch(`https://api.foursquare.com/v2/venues/search?client_id=${REACT_APP_foursquare_client_id}&client_secret=${REACT_APP_foursquare_client_secret}&v=20200406&near=${city}&intent=browse&radius=10000&query=${query}&limit=10`, requestOptions);
            const result = await response.json();
            const venues = result.response.venues
            console.log('places :', venues);
            setLoading(false);
            if (active) {
                setOptions(venues)
            }
        })();

        return () => {
            active = false;
        };
    }, [query]);

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
            setQuery('')
            setSelectedVenue(undefined)
        }
    }, [open]);

    const handleSelectedOption = (option: VenueType, value: VenueType) => {
        setSelectedVenue(value);

        const hashtags = option.categories.map((category: { name: string; }) => category.name.split(" / "))

        const locationObj: RestaurantN.LocationI = {
            ...newRestaurant.location,
            geometry: {
                type: 'Point',
                coordinates: [option.location.lat, option.location.lng]
            },
            city: option.location.city,
            country: option.location.country,
            address: option.location.address
        }
        const restaurant = {
            ...newRestaurant,
            name: option.name,
            location: locationObj,
            hashtags,
        }
        handleSetNewRestaurant(restaurant)
        setOptions([]);
        return option.name === value.name

    }
    // if (city) {
    return (
        <Grid container spacing={2} className={clsx(classes.root, classes.flexCentered)}>
            <Grid item xs={12} >
                <Typography variant="body2">autofill search</Typography>
            </Grid>
            <Grid item xs={12} md={1} className={classes.flexCentered}>
                <FormControl >
                    <InputLabel htmlFor="age-native-simple">City</InputLabel>
                    <Select
                        native
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    // inputProps={{
                    //     name: 'age',
                    // }}
                    >
                        <option aria-label="None" value="" />
                        {dataSite.cities.map(city => <option key={city} value='berlin'>{city}</option>)}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={12} md={10} className={clsx(classes.flexCentered, classes.autoComplete)}>
                {city ? <Autocomplete
                    id="global-search"
                    // className={classes.root}
                    style={{ width: '100%' }}
                    open={open}
                    onOpen={() => {
                        setOpen(true);
                    }}
                    onClose={() => {
                        setOpen(false);
                        setQuery('')
                        setSelectedVenue(null)
                    }}
                    getOptionSelected={(option, value) => handleSelectedOption(option, value)}
                    getOptionLabel={(option) => option.name}
                    options={options}
                    loading={loading}
                    renderInput={(params) => (
                        <div className={classes.search}>
                            <div>
                                <MaterialIconAsync icon="SearchIcon" />
                            </div>

                            <TextField
                                {...params}
                                // label="Asynchronous"
                                color="secondary"
                                placeholder="Search for restaurants…"
                                onChange={(e) => setQuery(e.target.value)}
                                InputProps={{
                                    ...params.InputProps,
                                    endAdornment: (
                                        <React.Fragment>
                                            {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                            {/* {params.InputProps.endAdornment} */}
                                        </React.Fragment>
                                    ),
                                }}
                            />

                            {/* <InputBase
                            placeholder="Search…"
                            classes={{
                                root: classes.inputRoot,
                                input: classes.inputInput,
                            }}
                            inputProps={{ 'aria-label': 'search' }}
                        /> */}
                        </div>

                    )}
                    renderOption={(option) => {
                        // const matches = option.structured_formatting.main_text_matched_substrings;
                        // const parts = parse(
                        //     option.structured_formatting.main_text,
                        //     matches.map((match: any) => [match.offset, match.offset + match.length]),
                        // );

                        return (
                            <Grid container alignItems="center">
                                <Grid item>
                                    <MaterialIconAsync icon="LocationOnIcon" />
                                    {/* <LocationOnIcon className={classes.icon} /> */}
                                </Grid>
                                <Grid item xs>
                                    {/* {option.map((part, index) => ( */}
                                    <span key={option.id} style={{ fontWeight: 400 }}>
                                        {option.name}
                                    </span>
                                    {/* ))} */}
                                    <Typography variant="body2" color="textSecondary">
                                        {option.location.formattedAddress[0]}
                                    </Typography>
                                </Grid>
                            </Grid>
                        );
                    }}
                />
                    : <Typography variant="body2">select city to start looking for restaurants</Typography>}
            </Grid>
        </Grid>);
    // }
    // else {
    //     return (
    //         <FormControl className={classes.formControl}>
    //             <InputLabel htmlFor="age-native-simple">City</InputLabel>
    //             <Select
    //                 native
    //                 value={city}
    //                 onChange={(e) => setCity(e.target.value)}
    //             // inputProps={{
    //             //     name: 'age',
    //             // }}
    //             >
    //                 <option aria-label="None" value="" />
    //                 <option value={10}>Berlin</option>
    //                 <option value={20}>Paris</option>
    //                 <option value={30}>Toulouse</option>
    //             </Select>
    //         </FormControl>)
    // }
}
export default withStyles(styles)(RestaurantFoursquareSearch)