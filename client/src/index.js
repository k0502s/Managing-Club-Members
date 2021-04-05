import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import loadUser from './components/Auth/loadUser';

loadUser();

ReactDOM.render(<App />, document.getElementById('root'));
