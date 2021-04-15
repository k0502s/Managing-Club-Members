import React from 'react';
import MemberListPage from '../MemberListPage';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

describe('<MemberListPage /> 컴포넌트 테스트', () => {
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
                    images: [['image1']],
                },
            ],
            totalPages: 1,
        },
    });

    // it('matches snapshot', () => {
    //     const utils = render(
    //         <Provider store={store}>
    //             <MemberListPage />
    //         </Provider>
    //     );
    //     expect(utils.container).toMatchSnapshot();
    // });

    it('스토어에서 회원 데이터 값들이 잘 랜더링 되는지', () => {
        const ref = React.createRef();
        const text = () => ref.current.textContent;
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <MemberListPage />
                </Provider>
            </BrowserRouter>
        );

        const listdata = getByTestId('list-data');
        const listsearch = getByTestId('list-search');
        const listpage = getByTestId('list-page');

        fireEvent.change(listsearch, {
            target: {
                value: '검색 테스트',
            },
        });

        expect(listsearch).toHaveAttribute('value', '검색 테스트');
        expect(listdata).toHaveTextContent('김진석');
        expect(listdata).toHaveTextContent('1');
        expect(listpage).toHaveTextContent(1);
    });

    it('회원 데이터 값들이 회원 데이터 표에 잘 랜더링 되는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <MemberListPage />
                </Provider>
            </BrowserRouter>
        );

        const listdata = getByTestId('list-data');

        fireEvent.click(listdata);

        const membertimage = getByTestId('member-image');
        const membertname = getByTestId('member-name');
        const membercamera = getByTestId('member-camera');
        const memberage = getByTestId('member-age');
        const membersex = getByTestId('member-sex');

        expect(membertimage).toHaveAttribute('src', 'image1');
        expect(membertname).toHaveTextContent('김진석');
        expect(membercamera).toHaveTextContent('A7S3');
        expect(memberage).toHaveTextContent('25');
        expect(membersex).toHaveTextContent('남');
    });

    it('Edit 링크가 잘 작동하는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <MemberListPage />
                </Provider>
            </BrowserRouter>
        );
        const listdata = getByTestId('list-data');

        fireEvent.click(listdata);

        const edit = getByTestId('member-edit');

        fireEvent.click(edit);

        expect(getByTestId('location-display')).toHaveTextContent('/edit/1234');
    });
});
