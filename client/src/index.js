import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import loadUser from './components/Authentication/loadUser';

loadUser();

ReactDOM.render(<App />, document.getElementById('root'));
