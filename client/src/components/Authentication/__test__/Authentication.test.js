import React from 'react';
import Login from '../Login';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { BrowserRouter } from 'react-router-dom';

describe('<Login /> 컴포넌트 테스트', () => {
    const mockStore = configureStore();
    let store = mockStore({
        auth: {
            isAuthenticated: false,
            errorMsg: '',
            user: [
                {
                    role:"",
                    register_date:"",
                    _id:"",
                    sex:"",
                    name:"",
                    email:"",
                    camera:"",
                    cart:[]
                },
            ],
        },
    });

    // it('matches snapshot', () => {
    //     const utils = render(
    //         <Provider store={store}>
    //             <Login />
    //         </Provider>
    //     );
    //     expect(utils.container).toMatchSnapshot();
    // });

    it('로그인을 위한 값들이 Input 값에 잘 들어오고 state 값에 잘 들어가는지', () => {
        const { getByTestId } = render(
            <BrowserRouter>
                <Provider store={store}>
                    <Login />
                </Provider>
            </BrowserRouter>
        );

        const email = getByTestId('login-email');
        const password = getByTestId('login-password');
        const button = getByTestId('login-button');

        fireEvent.change(email, {
            target: {
                value: 'k0502s@naver.com',
            },
        });
        fireEvent.change(password, {
            target: {
                value: '1234',
            },
        });
   
        fireEvent.click(button);

        expect(email).toHaveAttribute('value', 'k0502s@naver.com');
        expect(password).toHaveAttribute('value', '1234');
        expect(button).toBeEnabled();
    });
});
