import React, { Component } from 'react';
import LoginPage from './pages/login';
import Navbar from './components/navbar';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

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

class App extends Component {
    render() {
        return (
            <ThemeProvider theme={SayonikaTheme}>
                <div>
                    <LoginPage />
                </div>
            </ThemeProvider>
        );
    }
}

export default App;
