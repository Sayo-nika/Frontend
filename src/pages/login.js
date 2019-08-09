import React, { Component } from 'react';
import { Card, RoundIcon, Row, LoginBackground } from '../components/common';
import {
    TextField,
    Button,
    Typography,
    Checkbox,
    FormControlLabel
} from '@material-ui/core';

import icon from '../assets/img/logo.svg';

class LoginPage extends Component {
    state = {
        username: '',
        password: '',
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
        // Arrow function because lol js scope
        // TODO: make request to log in
    };

    handleSignup = () => {
        // TODO: make request to sign up
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
