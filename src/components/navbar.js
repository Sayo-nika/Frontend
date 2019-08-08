import React, { useState } from 'react';
import {
    AppBar,
    Typography,
    Toolbar,
    Button,
    IconButton,
    Tooltip,
    Menu,
    MenuItem
} from '@material-ui/core';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import navBarLogo from '../assets/img/logo-white.svg';
import AddIcon from '@material-ui/icons/Add';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import propTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    title: {
        flexGrow: 1,
        height: 48
    },
    titleLogo: {
        height: 48,
        width: 'auto'
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
    const handleLogin = () => {};
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
        <AppBar position="static" className={classes.root}>
            <Toolbar>
                <div className={classes.title}>
                    <img src={navBarLogo} className={classes.titleLogo} />
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
                        <Button color="inherit" onClick={handleLogin}>
                            Log in
                        </Button>
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
