import React from 'react';
import EditMemberPage from '../EditMemberPage';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('<EditMemberPage /> 컴포넌트 테스트', () => {
    const mockStore = configureStore();
    let store = mockStore({
        auth: {
            user: [
                {
                    _id: '12345Test',
                },
            ],
        },
        member: {
            singlememberlist: {
                age: 1,
                sex: 1,
                name: '김진석',
                camera: 'A7S2',
            },
            singlememberimage: [['image1']],
        },
    });
    const props = {
        match: {
            params: {
                id: '1234Test',
            },
        },
    };

    // it('matches snapshot', () => {
    //     const utils = render(
    //         <Provider store={store}>
    //             <EditMemberPage {...props}/>
    //         </Provider>
    //     );
    //     expect(utils.container).toMatchSnapshot();
    // });

    it('스토어에서 디폴트 값들이 잘 랜더링 되는지', () => {
        const onSubmit = jest.fn();
        const { getByTestId, getAllByTestId } = render(
            <Provider store={store}>
                <EditMemberPage onSubmit={onSubmit} {...props} />
            </Provider>
        );
        const name = getByTestId('add-name');
        const camera = getByTestId('add-camera');
        const age = getByTestId('add-age');
        const sex = getByTestId('add-sex');
        const image = getByTestId('add-image');
        const button = getByTestId('add-submit');
        let options = getAllByTestId('select-option');

        fireEvent.change(sex, {
            target: {
                value: '1',
            },
        });
        expect(image).toHaveAttribute('src', 'image1');
        expect(name).toHaveAttribute('value', '김진석');
        expect(camera).toHaveAttribute('value', 'A7S2');
        expect(age).toHaveAttribute('value', '1');
        expect(options[0]).toHaveAttribute('value', '1');
        expect(options[1]).toHaveAttribute('value', '2');
        expect(onSubmit).toHaveBeenCalledTimes(0);
    });
});
