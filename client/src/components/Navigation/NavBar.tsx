import React from 'react';
import { fade, makeStyles, Theme, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import { Grid, Button, useScrollTrigger, Zoom, Fab } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import logo from '../assets/logo/logoNoBG.png'
import Logo from '../Elements/GraphicElmts/Logo';
import dataSite from '../../assets/data/siteData.json';
import { Link } from 'react-router-dom'
import MaterialIconAsync from '../Elements/GraphicElmts/MaterialIconAsync';
import AsyncSearch from '../Elements/Search/AsyncSearch'


const mainWindow = window;
interface ScrollTopProps {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: React.ReactElement;
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            position: 'fixed',
            bottom: theme.spacing(2),
            right: theme.spacing(2),
        },
    }),
);
function ScrollTop(props: ScrollTopProps) {
    const { children, window } = props;
    const classes = useStyles();
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = () => {
        mainWindow.scrollTo({
            top: 0,
            behavior: 'smooth',
        });

    };

    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {children}
            </div>
        </Zoom>
    );
}

const styles = (theme: Theme) => createStyles({
    grow: {
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: theme.palette.common.white,
        position: "fixed",
        [theme.breakpoints.up('sm')]: {
            // position: 'absolute',
            // bottom: 0
        },
        // color: theme.palette.common.black
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    logo: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
        },
    },
    button: {
        marginRight: theme.spacing(1),
        marginLeft: theme.spacing(1),
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'block',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        // backgroundColor: fade(theme.palette.common.black, 0.1),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.1),
        },
        marginRight: theme.spacing(2),
        marginLeft: theme.spacing(2),
        // width: '100%',
        // [theme.breakpoints.up('sm')]: {
        //     marginLeft: theme.spacing(3),
        //     width: 'auto',
        // },
    },
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputRoot: {
        width: '100%',
        color: 'inherit',
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
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
            justifySelf: 'flex-end',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    }

})

interface Props extends WithStyles<typeof styles> {
    classes: any
}



const NavBar: React.FC<Props> = (props) => {

    const { classes } = props
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState<null | HTMLElement>(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            {dataSite.navItems.map(item => (
                <MenuItem onClick={handleMenuClose} key={item.title} component={Link} to={item.to} >
                    <IconButton aria-label="show 4 new mails" color="inherit">
                        <Badge color="secondary">
                            <MaterialIconAsync icon={item.icon} />
                        </Badge>
                    </IconButton>
                    {item.title}
                </MenuItem>)
            )}
            <MenuItem>
                <IconButton aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="secondary">
                        <MaterialIconAsync icon="MailIcon" />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton aria-label="show 11 new notifications" color="inherit">
                    <Badge badgeContent={11} color="secondary">
                        <MaterialIconAsync icon="NotificationsIcon" />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <MaterialIconAsync icon="AccountCircle" />
                </IconButton>
                <p>Profile</p>
            </MenuItem>

        </Menu>
    );

    return (
        <div className={classes.grow}>
            <AppBar position="sticky" className={classes.appBar} >
                <Toolbar id="back-to-top-anchor">
                    <div className={classes.logo}>
                        <Link
                            to='/'
                        > <Logo height={50} />
                        </Link>
                        {/* <img src={logo} height={50} alt="" /> */}
                        <Typography component={Link} to='/' style={{ textDecoration: 'none' }} color="inherit" className={classes.title} variant="h6" noWrap>
                            {dataSite.siteName}
                        </Typography>
                    </div>
                    {dataSite.navItems.map(item =>
                        <Button key={item.title} component={Link} to={item.to} className={classes.button} color="inherit">{item.title}</Button>)}

                    <AsyncSearch />
                    {/* <div className={classes.grow} /> */}
                    <div className={classes.sectionDesktop}>
                        <IconButton aria-label="show 4 new mails" color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <MailIcon />
                            </Badge>
                        </IconButton>
                        <IconButton aria-label="show 17 new notifications" color="inherit">
                            <Badge badgeContent={17} color="secondary">
                                <NotificationsIcon />
                            </Badge>
                        </IconButton>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon />
                        </IconButton>
                    </div>
                </Toolbar>
                <ScrollTop {...props}>
                    <Fab color="secondary" size="small" aria-label="scroll back to top">
                        <MaterialIconAsync icon="KeyboardArrowUpIcon" />
                    </Fab>
                </ScrollTop>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}
export default withStyles(styles)(NavBar)