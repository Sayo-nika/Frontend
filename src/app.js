import React, { Component } from 'react';
import LoginPage from './pages/login';
import Navbar from './components/navbar';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import DemoPage from './pages/zenno';

const SayonikaTheme = createMuiTheme({
    palette: {
        primary: {
            main: '#e84444'
        }
    },
    typography: {
        fontFamily: [
            'Noto Sans JP',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"'
        ].join(',')
    }
});

function App() {
    return (
        <Router>
            <ThemeProvider theme={SayonikaTheme}>
                <Route path="/login" component={LoginPage} />
                <Route path="/zenno" component={DemoPage} />
            </ThemeProvider>
        </Router>
    );
}

export default App;
