import React from 'react';
import { render } from 'react-dom';

import App from './app';
import { setHeader } from './utils/api';

const token = localStorage.getItem('token');

if (token) setHeader('Authorization', token);

render(<App />, document.getElementById('root'));
