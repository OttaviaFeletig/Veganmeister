// *https://www.registers.service.gov.uk/registers/country/use-the-api*
import fetch from 'cross-fetch';
import React, { useState, useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Theme, createStyles, fade, WithStyles, withStyles, Grid, Typography } from '@material-ui/core';
import MaterialIconAsync from '../GraphicElmts/MaterialIconAsync';
import { RestaurantsContext } from '../../../context/RestaurantsContext';

interface VenueType {
    id: string;
    name: string;
    location: any;
    categories: any;
    referralId: string;
    hasPerk: boolean;
}

function sleep(delay = 0) {
    return new Promise((resolve) => {
        setTimeout(resolve, delay);
    });
}
const styles = (theme: Theme) => createStyles({

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
        // [theme.breakpoints.up('sm')]: {
        //     marginLeft: theme.spacing(3),
        //     width: 'auto',
        // },
    },
    searchIcon: {
        // padding: theme.spacing(0, 2),
        // height: '100%',
        // position: 'absolute',
        // pointerEvents: 'none',
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    root: {
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        width: '100%',
    },
    inputInput: {
        // padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        // paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },

})

interface Props extends WithStyles<typeof styles> {
    classes: any,
    city: string,
}
const AsyncSearch: React.FC<Props> = ({ classes, city }) => {
    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState<VenueType[]>([]);
    const [selectedVenue, setSelectedVenue] = useState<VenueType>();
    const [query, setQuery] = useState<string>('');
    const loading = open && options.length === 0;
    const { handleSetNewRestaurant } = useContext(RestaurantsContext)


    React.useEffect(() => {
        let active = true;

        if (!query) {
            return undefined;
        }

        (async () => {
            const { REACT_APP_foursquare_client_secret, REACT_APP_foursquare_client_id } = process.env
            var myHeaders = new Headers();
            myHeaders.append("Accept-Language", "English");

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
            };

            // fetch("https://api.foursquare.com/v2/venues/search?client_id=ZEWDZSLE4RGSMDB2ZFY1JZVYCYCU3DEEDFIBWWNCZAUZJFT1&client_secret=5M4UO4S14G2TEDQLF0JYZU3PSLUYYMRA4QVTZPDWJ321WSO4&v=20200406&near=berlin&intent=browse&radius=10000&query=Akkawy&limit=10", requestOptions)
            //     .then(response => response.text())
            //     .then(result => console.log(result))
            //     .catch(error => console.log('error', error));
            const response = await fetch(`https://api.foursquare.com/v2/venues/search?client_id=${REACT_APP_foursquare_client_id}&client_secret=${REACT_APP_foursquare_client_secret}&v=20200406&near=${city}&intent=browse&radius=10000&query=${query}&limit=10`, requestOptions);
            // await sleep(1e3); // For demo purposes.
            const result = await response.json();
            const venues = result.response.venues
            console.log('places :', venues);

            if (active) {
                setOptions(venues)
                // setOptions(venues.map((venue: VenueType) => venue.name) as VenueType[]);
            }
        })();

        return () => {
            active = false;
        };
    }, [query]);

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    const handleSelectedOption = (option: VenueType, value: VenueType) => {
        setSelectedVenue(value);
        handleSetNewRestaurant(city, option.name)
        return option.name === value.name

    }

    return (
        <Autocomplete
            id="global-search"
            className={classes.root}

            open={open}
            onOpen={() => {
                setOpen(true);
            }}
            onClose={() => {
                setOpen(false);
            }}
            getOptionSelected={(option, value) => handleSelectedOption(option, value)}
            getOptionLabel={(option) => option.name}
            options={options}
            loading={loading}
            renderInput={(params) => (
                <div className={classes.search}>
                    <div className={classes.searchIcon}>
                        <MaterialIconAsync icon="SearchIcon" />
                    </div>

                    <TextField
                        {...params}
                        // label="Asynchronous"
                        color="secondary"
                        placeholder="Search for restaurants…"
                        className={classes.inputRoot}
                        onChange={(e) => setQuery(e.target.value)}
                        // classes={{
                        //     root: classes.inputRoot,
                        //     // input: classes.inputInput,
                        // }}
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
    );
}
export default withStyles(styles)(AsyncSearch)