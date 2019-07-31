import React, {Component} from 'react';
import {
    Card,
    Flag,
    Header,
    Link,
    RoundIcon, Row,
    SecretInput,
    SubmitButton, SubText,
    TextInput
} from "../components/common";

class LoginPage extends Component{
    constructor(props){
        super(props);

        this.username = '';
        this.password = '';
        this.stayLoggedIn = false;
    }

    handleLogin = () => {
        // Arrow function because lol js scope
        // TODO: make request to log in
    };

    handleSignup = () => {
        // TODO: make request to sign up
    };

    render() {
        return (
            <Card>
                <RoundIcon src='assets/icon.png'/>
                <Header>Welcome, please login</Header>
                <SubText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</SubText>
                <TextInput value={ this.username } />
                <SecretInput value={ this.password } />
                <Flag value={ this.stayLoggedIn } title='Remember this device' />
                <Row>
                    <SubmitButton title='Sign Up' onPress={ this.handleSignup }/>
                    <SubmitButton title='Log In' onPress={ this.handleLogin }/>
                </Row>
            </Card>
        )
    }
}