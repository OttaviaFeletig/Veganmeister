import React, { useContext } from 'react';
import { makeStyles, createStyles, Theme, WithStyles, withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import RestaurantItem from './RestaurantItem';
import { RestaurantsContext } from '../../context/RestaurantsContext';
import { RestaurantN } from '../../@types';
import Grow from '@material-ui/core/Grow';
import SelectGMap from '../Elements/Search/SelectGMap'



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
});

interface Props extends WithStyles<typeof styles> {
    classes: {
        root: string,
        paper: string,
        container: string,
    },
}


const RestaurantList: React.FC<Props> = ({ classes }) => {
    const { restaurants } = useContext(RestaurantsContext)
    console.log('restaurants :', restaurants);
    return (
        <div className={classes.root}>
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
            </Grid>
        </div>
    );
}
export default withStyles(styles)(RestaurantList)