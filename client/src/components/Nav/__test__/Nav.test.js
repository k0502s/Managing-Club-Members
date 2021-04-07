import React from 'react';
import Sidebar from '../Sidebar';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

describe('<Sidebar /> 컴포넌트 테스트', () => {
    const mockStore = configureStore();
    let store = mockStore({
        auth: {
            isAuthenticated: true,
            user: [
                {
                    role: 'User',
                    _id: '1234',
                    sex: '1',
                    name: '김진석',
                    email: 'k0502s@naver.com',
                    cart: ['1', '2', '3'],
                },
            ],
        },
        member: {
            chatalldata: ['1', '2', '3'],
        },
    });

    // it('matches snapshot', () => {
    //     const utils = render(
    //         <Provider store={store}>
    //             <Sidebar />
    //         </Provider>
    //     );
    //     expect(utils.container).toMatchSnapshot();
    // });

    it('홈 링크가 잘 작동하는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <Sidebar />
                </Provider>
            </BrowserRouter>
        );
        const home = getByTestId('home');

        fireEvent.click(home);
        expect(getByTestId('location-display')).toHaveTextContent('/');
    });
    it('회원 추가 페이지 링크가 잘 작동하는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <Sidebar />
                </Provider>
            </BrowserRouter>
        );
        const addmember = getByTestId('addmember');

        fireEvent.click(addmember);
        expect(getByTestId('location-display')).toHaveTextContent('/addmember');
    });
    it('회원 리스트 페이지 링크가 잘 작동하는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <Sidebar />
                </Provider>
            </BrowserRouter>
        );
        const list = getByTestId('list');

        fireEvent.click(list);
        expect(getByTestId('location-display')).toHaveTextContent('/list');
    });
    it('경고 회원 리스트 페이지 링크가 잘 작동하는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <Sidebar />
                </Provider>
            </BrowserRouter>
        );
        const warnlist = getByTestId('warnlist');

        fireEvent.click(warnlist);
        expect(getByTestId('location-display')).toHaveTextContent('/warnlist');
    });
    it('회원 문의 사항 리스트 페이지 링크가 잘 작동하는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <Sidebar />
                </Provider>
            </BrowserRouter>
        );
        const inquiries = getByTestId('inquiries');

        fireEvent.click(inquiries);
        expect(getByTestId('location-display')).toHaveTextContent('/inquiries');
    });
    it('스토어의 회원 문의 사항 데이터가 잘 랜더링 되어 데이터 갯수가 잘 표시되는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <Sidebar />
                </Provider>
            </BrowserRouter>
        );
        const inquiriesdata = getByTestId('inquiries-data');

        expect(inquiriesdata).toHaveTextContent('3');
    });
});
