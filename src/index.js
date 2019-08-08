import { AppRegistry } from 'react-native';
import App from './app';
AppRegistry.registerComponent('Sayonika', () => App);

AppRegistry.runApplication('Sayonika', {
    rootTag: document.getElementById('root')
});
