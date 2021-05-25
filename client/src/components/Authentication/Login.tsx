import React, { useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Form, FormGroup, Col } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_REQUEST, LOGOUT_REQUEST } from '../../redux/types';
import * as S from './Authentication.style';

type State = {
    auth: {
        user: {
            name: string;
        };
        isAuthenticated: boolean;
        errorMsg: string;
    };
};

const Login = () => {
    const [localMsg, setLocalMsg] = useState('');
    const [form, setValues] = useState({
        email: '',
        password: '',
    });
    const { isAuthenticated, user, errorMsg } = useSelector((state: State) => state.auth);

    const dispatch = useDispatch();

    const onLogout = useCallback(() => {
        dispatch({
            type: LOGOUT_REQUEST,
        });
    }, [dispatch]);

    useEffect(() => {
        try {
            setLocalMsg(errorMsg);
        } catch (e) {
            console.log(e);
        }
    }, [errorMsg]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement> | KeyboardEvent) => {
        e.preventDefault();
        const { email, password } = form;
        const user = { email, password };
        console.log(user);
        dispatch({
            type: LOGIN_REQUEST,
            payload: user,
        });
    };
    const Enter = (e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            onSubmit(e);
        }
    };

    const guestLink = (
        <>
            {localMsg ? <Alert color="danger">{localMsg}</Alert> : null}
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <S.LoginLabel for="email">Email</S.LoginLabel>
                    <S.LoginInput type="email" name="email" value={form.email} id="email" placeholder="Email" onChange={onChange} onKeyPress={Enter} data-testid="login-email" />
                    <S.LoginLabel for="password">Password</S.LoginLabel>
                    <S.LoginInput type="password" name="password" value={form.password} id="password" placeholder="Password" onChange={onChange} onKeyPress={Enter} data-testid="login-password" />
                    <Col>
                        <S.LoginButton data-testid="login-button">Login</S.LoginButton>
                    </Col>
                </FormGroup>
            </Form>
        </>
    );

    const authLink = (
        <>
            <Col>
                <S.Welcome>안녕하세요.</S.Welcome>
                {user && user.name ? (
                    <S.UserName>{user ? `${user.name} 님` : ''}</S.UserName>
                ) : (
                    <S.UserName>
                        <strong>No User</strong>
                    </S.UserName>
                )}
            </Col>
            <Col>
                <Link onClick={onLogout} to="/">
                    <S.LoginButton>Logout</S.LoginButton>
                </Link>
            </Col>
        </>
    );

    return <div>{isAuthenticated ? authLink : guestLink}</div>;
};

export default Login;
