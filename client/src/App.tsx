import React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import store, { history } from './store';
import Router from './components/MyRouter/Router';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/custom.scss';
import GlobalStyle from './assets/GlobalStyle';
import { HashRouter } from 'react-router-dom';

const App = () => {
    return (
        <Provider store={store}>
            <GlobalStyle />
            <ConnectedRouter history={history}>
                <HashRouter>
                    <Router />
                </HashRouter>
            </ConnectedRouter>
        </Provider>
    );
};

export default App;
