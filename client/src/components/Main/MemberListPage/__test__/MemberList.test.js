import React from 'react';
import MemberList from '../MemberListPage';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('<MemberList />', () => {
    const mockStore = configureStore();
    let store = mockStore({
        member: {
            memberlist: [
                {
                    name: '김진석',
                },
            ],
        },
    });

    it('matches snapshot', () => {
        const utils = render(
            <Provider store={store}>
                <MemberList />
            </Provider>
        );
        expect(utils.container).toMatchSnapshot();
    });
});
