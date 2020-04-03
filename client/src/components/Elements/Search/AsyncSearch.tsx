// *https://www.registers.service.gov.uk/registers/country/use-the-api*
import fetch from 'cross-fetch';
import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Theme, createStyles, fade, WithStyles, withStyles } from '@material-ui/core';
import MaterialIconAsync from '../GraphicElmts/MaterialIconAsync';

interface CountryType {
    name: string;
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
        width: '80%',
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
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
    },

})

interface Props extends WithStyles<typeof styles> {
    classes: any
}
const AsyncSearch: React.FC<Props> = ({ classes }) => {
    const [open, setOpen] = React.useState(false);
    const [options, setOptions] = React.useState<CountryType[]>([]);
    const loading = open && options.length === 0;

    React.useEffect(() => {
        let active = true;

        if (!loading) {
            return undefined;
        }

        (async () => {
            const response = await fetch('https://country.register.gov.uk/records.json?page-size=5000');
            await sleep(1e3); // For demo purposes.
            const countries = await response.json();

            if (active) {
                setOptions(Object.keys(countries).map((key) => countries[key].item[0]) as CountryType[]);
            }
        })();

        return () => {
            active = false;
        };
    }, [loading]);

    React.useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

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
            getOptionSelected={(option, value) => option.name === value.name}
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
                        placeholder="Search…"
                        className={classes.inputRoot}
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
        />
    );
}
export default withStyles(styles)(AsyncSearch)