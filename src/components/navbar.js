import React, { useState } from 'react';
import {
    AppBar,
    Typography,
    Toolbar,
    Button,
    IconButton,
    Tooltip,
    Menu,
    MenuItem,
    Link
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import navBarLogo from '../assets/img/logo.svg';
import AddIcon from '@material-ui/icons/Add';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import propTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        boxShadow: 'none'
    },
    title: {
        height: 48,
        paddingRight: theme.spacing(2)
    },
    titleLogo: {
        height: 48,
        width: 'auto'
    },
    links: {
        flexGrow: 1
    },
    link: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1)
    },
    button: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        backgroundColor: theme.palette.common.white,
        color: theme.palette.common.black,
        textTransform: 'none'
    }
}));

const Navbar = ({ loggedIn }) => {
    const [state, setState] = useState({
        loggedIn: loggedIn || false,
        menuVisible: false,
        isAdmin: false
    });
    const classes = useStyles();

    // lol js scopes
    const handleNewMod = () => {};
    const handleProfileRedirect = () => {};
    const handleSettingsRedirect = () => {};
    const handleAdminRedirect = () => {};
    const handleLogout = () => {};
    const toggleAccountMenu = () => {
        setState(prevState => {
            return { ...prevState, menuVisible: !state.menuVisible };
        });
    };

    return (
        <AppBar position="static" className={classes.root} color="default">
            <Toolbar>
                <div className={classes.title}>
                    <img src={navBarLogo} className={classes.titleLogo} />
                </div>
                <div className={classes.links}>
                    <Link href="/" className={classes.link} color="inherit">
                        Catalog
                    </Link>
                    <Link
                        href="https://medium.com/sayonika"
                        className={classes.link}
                        color="inherit"
                    >
                        Blog
                    </Link>
                    <Link className={classes.link} color="inherit">
                        Developers
                    </Link>
                </div>
                <div>
                    {state.loggedIn ? (
                        <div>
                            <Tooltip title="Add a new mod">
                                <IconButton
                                    color="inherit"
                                    onClick={handleNewMod}
                                >
                                    <AddIcon />
                                </IconButton>
                            </Tooltip>
                            <Tooltip title="Your account">
                                <IconButton
                                    id="sk-navbar-acct-menu"
                                    color="inherit"
                                    onClick={toggleAccountMenu}
                                >
                                    <AccountCircleIcon />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right'
                                }}
                                anchorEl={document.getElementById(
                                    'sk-navbar-acct-menu'
                                )}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right'
                                }}
                                open={state.menuVisible}
                                onClose={toggleAccountMenu}
                            >
                                <MenuItem onClick={handleProfileRedirect}>
                                    Profile
                                </MenuItem>
                                {state.isAdmin ? (
                                    <MenuItem onClick={handleAdminRedirect}>
                                        Admin Dashboard
                                    </MenuItem>
                                ) : null}
                                <MenuItem onClick={handleSettingsRedirect}>
                                    Settings
                                </MenuItem>
                                <MenuItem onClick={handleLogout}>
                                    Log out
                                </MenuItem>
                            </Menu>
                        </div>
                    ) : (
                        <div>
                            <Button
                                component={RouterLink}
                                to="/login"
                                color="inherit"
                                variant="contained"
                                className={classes.button}
                            >
                                Log in
                            </Button>
                            <Button
                                component={RouterLink}
                                to="/signup"
                                color="inherit"
                                variant="contained"
                                className={classes.button}
                            >
                                Sign up
                            </Button>
                        </div>
                    )}
                </div>
            </Toolbar>
        </AppBar>
    );
};

Navbar.propTypes = {
    loggedIn: propTypes.bool
};

export default Navbar;
