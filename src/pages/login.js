import React, { Component } from 'react';
import Recaptcha from 'react-recaptcha';
import { Card, RoundIcon, Row, LoginBackground } from '../components/common';
import {
    TextField,
    Button,
    Typography,
    Checkbox,
    FormControlLabel
} from '@material-ui/core';

import icon from '../assets/img/logo.svg';
import CONFIG from "../utils/config";
import API from '../utils/api';

class LoginPage extends Component {
    state = {
        username: '',
        password: '',
        recaptcha: '',  // TODO: Add recaptcha to login page
        email: '',
        stayLoggedIn: false
    };

    updateUsername(username) {
        this.setState({ username });
    }

    updatePassword(password) {
        this.setState({ password });
    }

    toggleRememberMeState(stayLoggedIn) {
        this.setState({ stayLoggedIn });
    }

    handleLogin = () => {
        let {username, password, recaptcha} = this.state;

        API.login(JSON.stringify({
            username,
            password,
            recaptcha
        })).then(r=>{
            console.log(r);

            const token = r.token;
            API.env.token = token;
            if (this.state.stayLoggedIn){
                window.localStorage.token = token;
            } else {
                window.sessionStorage.token = token
            }
            // TODO: Redirect to main page
        })
    };

    handleSignup = () => {
        // TODO: Ask for email
        let {username, password, recaptcha, email} = this.state;

        API.signup(JSON.stringify({
            username, password, recaptcha, email
        })).then(r=> {
            // Display "Verify email" message
        })
    };

    render() {
        const { username, password, stayLoggedIn } = this.state;
        return (
            <LoginBackground>
                <Card>
                    <RoundIcon src={icon} />
                    <Typography variant="h5">Welcome, please login</Typography>
                    <div style={{flexDirection: 'column'}}>
                        <div style={{flexDirection: 'column'}}>
                            <TextField
                                label="Username or email address"
                                variant="outlined"
                                onChange={e => this.updateUsername(e.target.value)}
                            />
                            <TextField
                                label="Password"
                                variant="outlined"
                                type="password"
                                onChange={e => this.updatePassword(e.target.value)}
                            />
                        </div>
                        <FormControlLabel
                            label="Remember me"
                            control={
                                <Checkbox
                                    value="Remember me"
                                    checked={stayLoggedIn}
                                    onChange={e =>
                                        this.toggleRememberMeState(e.target.checked)
                                    }
                                />
                            }
                        />
                    </div>
                    <Recaptcha
                        sitekey={CONFIG.CAPTCHA_KEY}
                        verifyCallback={recaptcha=>this.setState({recaptcha})}
                    />
                    <Row>
                        <Button onClick={this.handleSignup}>Sign up</Button>
                        <Button
                            color="primary"
                            variant="contained"
                            onClick={this.handleLogin}
                        >
                            Log in
                        </Button>
                    </Row>
                </Card>
            </LoginBackground>
        );
    }
}

export default LoginPage;
