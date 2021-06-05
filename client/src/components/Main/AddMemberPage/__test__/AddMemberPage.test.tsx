import React from 'react';
import AddMemberPage from '../AddMemberPage';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

describe('<AddMemberPage />컴포넌트 테스트', () => {
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
            isLoading: false
        }
    });
    it('Form의 Input과 Select에 입력값이 들어오고 state값에 잘 들어가는지', () => {
        const { getByTestId, getAllByTestId } = render(
            <Provider store={store}>
                <AddMemberPage />
            </Provider>
        );
        const name = getByTestId('add-name');
        const camera = getByTestId('add-camera');
        const age = getByTestId('add-age');
        const sex = getByTestId('add-sex');
        const button = getByTestId('add-submit');
        let options = getAllByTestId('select-option');

        fireEvent.change(name, {
            target: {
                value: '김진석',
            },
        });
        fireEvent.change(camera, {
            target: {
                value: 'a7s2',
            },
        });
        fireEvent.change(age, {
            target: {
                value: '25',
            },
        });
        fireEvent.change(sex, {
            target: {
                value: '1',
            },
        });
        fireEvent.click(button);

        expect(name).toHaveAttribute('value', '김진석');
        expect(camera).toHaveAttribute('value', 'a7s2');
        expect(age).toHaveAttribute('value', '25');
        expect(options[0]).toHaveAttribute('value', '1');
        expect(options[1]).toHaveAttribute('value', '2');
        expect(button).toBeEnabled();
    });
});