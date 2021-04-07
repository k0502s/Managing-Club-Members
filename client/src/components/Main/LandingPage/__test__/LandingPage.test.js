import React from 'react';
import LandingPage from '../LandingPage';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

describe('<LandingPage /> 컴포넌트 테스트', () => {
    const mockStore = configureStore();
    let store = mockStore({
        auth: {
            isAuthenticated: true,
        },
    });

    // it('matches snapshot', () => {
    //     const utils = render(
    //         <Provider store={store}>
    //             <LandingPage />
    //         </Provider>
    //     );
    //     expect(utils.container).toMatchSnapshot();
    // });
});
