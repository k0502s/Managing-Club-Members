import React from 'react';
import AddMemberPage from '../AddMemberPage';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('<AddMemberPage />', () => {
    const initialState = { output: 10 };
    const mockStore = configureStore();
    let store;

    it('matches snapshot', () => {
        store = mockStore(initialState);
        const utils = render(
            <Provider store={store}>
                <AddMemberPage />
            </Provider>
        );
        expect(utils.container).toMatchSnapshot();
    });

    it('matches snapshot', () => {
        store = mockStore(initialState);
        const utils = render(
            <Provider store={store}>
                <AddMemberPage />
            </Provider>
        );
        expect(utils.container).toMatchSnapshot();
    });
});
