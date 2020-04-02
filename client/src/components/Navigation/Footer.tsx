import React from 'react'
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Container from '@material-ui/core/Container';
import CssBaseline from '@material-ui/core/CssBaseline';
import { createStyles, Theme } from '@material-ui/core';
import { WithStyles, withStyles } from '@material-ui/styles';
import dataSite from '../../assets/data/siteData.json';


const styles = (theme: Theme) => createStyles({
    footer: {
        position: 'relative',
        bottom: 0,
        width: '100%'
    },
    text: {
        padding: theme.spacing(1),
    }
});

interface Props extends WithStyles<typeof styles> {
    classes: {
        footer: string,
        text: string,
    },
}


const Footer: React.FC<Props> = ({ classes }) => {
    return (

        <footer
            className={classes.footer}
        >
            <CssBaseline />

            <Typography className={classes.text} variant="body2" color="textSecondary" align="center">
                {'Copyright © '}
                <Link color="inherit" href="/">
                    {dataSite.siteName}
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>

        </footer>
    )
}

export default withStyles(styles)(Footer);