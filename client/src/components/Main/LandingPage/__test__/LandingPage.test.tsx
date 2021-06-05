import React from 'react';
import LandingPage from '../LandingPage';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';


describe('<LandingPage /> 컴포넌트 테스트', () => {
    const mockStore = configureStore();
    let store = mockStore({
        auth: {
            isAuthenticated: true,
            warnlisttoltal: 5,
        },
        member: {
            chatalldata: [ { _id: '1234', name: '김진석', email: 'k0502s@naver.com', opinion: '테스트입니다' }],
            membertoltal: [{
                age: 2,
                sex: 2,
                _id: '1234',
                writer: '12345',
                name: '냥냥이',
                camera: 'A7S2',
                createdAt: '2021-04-15T03:43:21.475Z',
                updatedAt: '2021-04-15T03:43:33.856Z',
            }]
        },
    });

    it('스토어의 데이터가 화면에 잘 랜더링 되는지', () => {
        const { getByTestId } = render(
            <Provider store={store}>
                <LandingPage />
            </Provider>
        );
        const member = getByTestId('member-count');
        const warnmember = getByTestId('warnmember-count');
        const Qmember = getByTestId('Qmember-count');

        expect(member).toHaveTextContent('1');
        expect(warnmember).toHaveTextContent('5');
        expect(Qmember).toHaveTextContent('1');
    });
});
