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

    it('스토어에서 디폴트 값들이 잘 랜더링 되는지', () => {
        const { getByTestId, getAllByTestId } = render(
            <Provider store={store}>
                <EditMemberPage {...props} />
            </Provider>
        );
        const name = getByTestId('edit-name');
        const camera = getByTestId('edit-camera');
        const age = getByTestId('edit-age');
        const sex = getByTestId('edit-sex');
        const image = getByTestId('edit-image');
        const button = getByTestId('edit-submit');
        let options = getAllByTestId('select-option');

        fireEvent.change(sex, {
            target: {
                value: '1',
            },
        });
        fireEvent.click(button);
        expect(image).toHaveAttribute('src', 'image1');
        expect(name).toHaveAttribute('value', '김진석');
        expect(camera).toHaveAttribute('value', 'A7S2');
        expect(age).toHaveAttribute('value', '1');
        expect(options[0]).toHaveAttribute('value', '1');
        expect(options[1]).toHaveAttribute('value', '2');
        expect(button).toBeEnabled();
    });
});
