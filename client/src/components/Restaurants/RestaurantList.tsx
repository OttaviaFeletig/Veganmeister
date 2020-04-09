import React, { useContext, useState } from 'react';
import { makeStyles, createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RestaurantItem from './RestaurantItem';
import { RestaurantsContext } from '../../context/RestaurantsContext';
import { RestaurantN } from '../../@types';
import Grow from '@material-ui/core/Grow';
import Filters from '../Elements/Search/Filters';
import { Fab, Typography } from '@material-ui/core';
import MaterialIconAsync from '../Elements/GraphicElmts/MaterialIconAsync';
import { Link } from 'react-router-dom';




const styles = (theme: Theme) => createStyles({
    root: {
        flexGrow: 1,
        marginTop: theme.spacing(2),

    },
    container: {
        padding: 0
    },
    paper: {
        padding: theme.spacing(2),

        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    addIcon: {
        fontSize: 90,
        marginRight: theme.spacing(5),
        color: theme.palette.common.white,
        '&:hover': {
            color: theme.palette.primary.main
        }
    },
    bottomAdd: {
        marginTop: theme.spacing(5),
        marginLeft: theme.spacing(2),
        display: 'flex',
        justifyItems: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center'
    }
});

interface Props extends WithStyles<typeof styles> {
    classes: {
        root: string,
        paper: string,
        container: string,
        addIcon: string,
        bottomAdd: string
    },
}


const RestaurantList: React.FC<Props> = ({ classes }) => {
    const { restaurants, sort, handleSort } = useContext(RestaurantsContext)
    const [cardDisplay, setCardDisplay] = useState(true)

    const toggleDisplay = () => {
        setCardDisplay((prev) => !prev)
    }
    return (
        <div className={classes.root}>
            <Filters sort={sort} handleSort={handleSort} toggleDisplay={toggleDisplay} />
            <Grid container className={classes.container} spacing={2}>

                {restaurants && restaurants.map((restaurant: RestaurantN.RestaurantI, i: number) =>
                    <Grow in
                        style={{ transformOrigin: '0 0 0' }}
                        timeout={1500 + (1000 * i)}
                        key={restaurant._id}
                    >
                        <Grid item xs={12} md={6}>
                            <RestaurantItem restaurant={restaurant} loading={false} />
                        </Grid>
                    </Grow>
                )}
                <Grid container spacing={5} >

                    <Grid className={classes.bottomAdd} item xs={12}>
                        <Fab
                            component={Link}
                            to="./addRestaurant"
                            size="large"
                            // aria-label="image input"
                            // onClick={() => onAddClick()}
                            className={classes.addIcon}
                            color="secondary"
                        >
                            <MaterialIconAsync icon='AddCircleOutlineIcon' />
                        </Fab>
                        <Typography variant="h6">Add new restaurant</Typography>


                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}
export default withStyles(styles)(RestaurantList)