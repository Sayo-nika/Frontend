import React, { Component } from 'react';
import injectStyles from 'react-jss';
import navbarStyles from './Navbar.styles';
import logo from '../../assets/logo.svg';

interface INavbarProps {
    classes: any;
}

class Navbar extends Component<INavbarProps, any> {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div>
                    <img className={classes.logo} src={logo} alt="Sayonika"/>
                </div>
            </div>
        );
    }
}

export default injectStyles(navbarStyles)(Navbar)
