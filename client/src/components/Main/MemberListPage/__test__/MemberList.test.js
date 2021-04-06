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
                    age: 25,
                    sex: 1,
                    _id: '1234',
                    name: '김진석',
                    camera: 'A7S3',
                },
            ],
        },
    });

    // it('matches snapshot', () => {
    //     const utils = render(
    //         <Provider store={store}>
    //             <MemberList />
    //         </Provider>
    //     );
    //     expect(utils.container).toMatchSnapshot();
    // });

    it('스토어에서 디폴트 값들이 잘 랜더링 되는지', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <MemberList />
            </Provider>
        );

        const listname = getByTestId('list-name');
        const listcamera = getByTestId('list-camera');

        expect(listname).toHaveTextContent('김진석');
        expect(listcamera).toHaveTextContent('A7S3');
    });
});
