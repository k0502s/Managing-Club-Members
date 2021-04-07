import React from 'react';
import WarnMemberListPage from '../WarnMemberListPage';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('<WarnMemberListPage /> 컴포넌트 테스트', () => {
    const mockStore = configureStore();
    let store = mockStore({
        auth: {
            totalPages: 1,
            warnlistDetail: [
                {
                    age: 25,
                    sex: 1,
                    _id: '1234',
                    name: '김진석',
                    camera: 'A7S3',
                    quantity: '1',
                    images: [['image1']],
                },
            ],
        },
    });

    // it('matches snapshot', () => {
    //     const utils = render(
    //         <Provider store={store}>
    //             <WarnMemberListPage {...props}/>
    //         </Provider>
    //     );
    //     expect(utils.container).toMatchSnapshot();
    // });

    it('스토어의 경고 회원 데이터가 잘 랜더링 되는지', () => {
        const onSubmit = jest.fn();
        const { getByTestId, getAllByTestId } = render(
            <Provider store={store}>
                <WarnMemberListPage onSubmit={onSubmit} />
            </Provider>
        );
        const name = getByTestId('warn-name');
        const sex = getByTestId('warn-sex');
        const quantity = getByTestId('warn-quantity');
        const age = getByTestId('warn-age');
        const image = getByTestId('warn-image');
        const button = getByTestId('warn-button');

        fireEvent.click(button);

        expect(name).toHaveTextContent('김진석');
        expect(sex).toHaveTextContent('남');
        expect(quantity).toHaveTextContent('1');
        expect(age).toHaveTextContent('25');
        expect(image).toHaveAttribute('src', 'image1');
        expect(button).toBeEnabled();
    });
});
