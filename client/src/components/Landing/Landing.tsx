import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { WithStyles, Theme, createStyles, withStyles } from '@material-ui/core/styles';
import logo from '../../assets/logo/logoNoBG.png'
import SvgIcon from '@material-ui/icons/LockOutlined';


const styles = (theme: Theme) => createStyles({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/user/loukass23)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
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
});



interface Props extends WithStyles<typeof styles> {
    classes: any,

}
{/* <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.2 86.24"><title>noun_Deer_53375 (1)</title><path d="M76,7.75V2H73V23.17l-5.57-5.33L65,20.14,71.84,27,64.2,34.63l-4-4L57.92,33l3.83,4L55,43.56V39H52v7H39V39H36v4.56l-6.63-6.75L33.27,33,31,30.68l-3.82,3.83L19.7,27l6.89-6.88-2.28-2.3L19,23.17V2H16V7.75L10.53,2.42,8.31,4.72,16,12.34V27.63L34.09,46H22.18c0,7,8.59,7,8.59,7h5L29.05,78.59l17,9.65,17.18-9.72L56.16,52h4.58s9.36,1,9.36-6H57.39L76,27.63V12.34l7.51-7.62-2.24-2.3ZM59.5,77.27,46.06,84.75,32.5,77.27l4.63-17.86L41.42,74s.72,2.32,4.64,2.32S50.58,74,50.58,74l4.23-14.6Z" transform="translate(-8.31 -2)" /></svg> */ }
function HomeIcon(props: JSX.IntrinsicAttributes) {
    return (
        <SvgIcon {...props}>
            <path d="M76,7.75V2H73V23.17l-5.57-5.33L65,20.14,71.84,27,64.2,34.63l-4-4L57.92,33l3.83,4L55,43.56V39H52v7H39V39H36v4.56l-6.63-6.75L33.27,33,31,30.68l-3.82,3.83L19.7,27l6.89-6.88-2.28-2.3L19,23.17V2H16V7.75L10.53,2.42,8.31,4.72,16,12.34V27.63L34.09,46H22.18c0,7,8.59,7,8.59,7h5L29.05,78.59l17,9.65,17.18-9.72L56.16,52h4.58s9.36,1,9.36-6H57.39L76,27.63V12.34l7.51-7.62-2.24-2.3ZM59.5,77.27,46.06,84.75,32.5,77.27l4.63-17.86L41.42,74s.72,2.32,4.64,2.32S50.58,74,50.58,74l4.23-14.6Z" />
        </SvgIcon>
    );
}

const Landing: React.FC<Props> = ({ classes }) => {


    return (
        <Grid container component="main" className={classes.root}>
            <CssBaseline />

            <Grid item xs={false} sm={4} md={7} className={classes.image} />
            <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <HomeIcon />
                    <img src={logo} alt="" />
                    <Typography component="h1" variant="h5">
                        Sign in
          </Typography>
                    {/* <form className={classes.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign In
            </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
                </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                        <Box mt={5}>
                        </Box>
                    </form> */}
                </div>
            </Grid>
        </Grid>
    );
}

export default withStyles(styles)(Landing)