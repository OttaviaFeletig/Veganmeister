import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { WithStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import Logo from './Logo'
// import SvgIcon from '@material-ui/core/SvgIcon';
import { ReactComponent as ReactLogo } from '../../assets/logo/noun_Deer.svg';
import { Card, CardContent, CardMedia, Slide } from '@material-ui/core';

const styles = (theme: Theme) => createStyles({
    root: {
        height: '100%',
    },
    image: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundImage: 'url(https://source.unsplash.com/user/loukass23)',
        backgroundImage:
            `linear-gradient(to bottom, ${theme.palette.secondary.main}ed, ${theme.palette.primary.main}ed), url('https://source.unsplash.com/user/loukass23')`,
        // opacity: 0.5,
        backgroundRepeat: 'no-repeat',
        backgroundColor: theme.palette.common.white,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
    card: {
        margin: theme.spacing(3),
        display: 'flex',
        width: '100%',
        boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
        justifyContent: 'space-between',


    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    content: {
        // flex: '1 0 auto',
    },
    cover: {
        width: '200px',

        // height: '100%',
    },
});



interface Props extends WithStyles<typeof styles> {
    classes: any,

}

const Page404: React.FC<Props> = ({ classes }) => {
    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />

            <Grid item xs={false} sm={false} md={6} className={classes.image} >
                <div>
                    <Logo height={300} color="secondary" />
                </div>



            </Grid>
            <Grid item xs={12} sm={12} md={6} component={Paper} elevation={6} square>
                <div className={classes.paper}>

                    {/* {dataSite.navItems.map((card, i: number) =>
                        <Slide in
                            direction="left"
                            // style={{ transformOrigin: '8 0 0' }}
                            timeout={1000 + (500 * i)}
                        >
                            <Card className={classes.card} component={Link} to={card.to} style={{ textDecoration: 'none' }}>
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                        <Typography component="h5" variant="h5">
                                            {card.title}
                                        </Typography>
                                        <Typography variant="subtitle1" color="textSecondary">
                                            {card.subtitle}
                                        </Typography>
                                    </CardContent>

                                </div>
                                <CardMedia
                                    className={classes.cover}
                                    image={card.img}
                                    title="posts"
                                />
                            </Card>
                        </Slide>)} */}

                    {/* <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar> */}
                    <Typography component="h1" variant="h5">
                        Page not found
                    </Typography>
                </div>
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(Page404)