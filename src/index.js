import { AppRegistry } from 'react-native';
import LoginPage from './pages/login';

AppRegistry.registerComponent('Sayonika', () => LoginPage);

AppRegistry.runApplication('Sayonika', {
    rootTag: document.getElementById('root')
});
