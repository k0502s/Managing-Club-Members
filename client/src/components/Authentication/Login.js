import React, { Fragment, useState, useCallback, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Form, FormGroup, Card, CardTitle, CardText, Row, Col, CardHeader, CardBody } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { LOGIN_REQUEST, LOGOUT_REQUEST } from '../../redux/types';
import * as S from './Authentication.style';

const Login = () => {
    const [localMsg, setLocalMsg] = useState('');
    const [form, setValues] = useState({
        email: '',
        password: '',
    });

    const { isAuthenticated, user, errorMsg } = useSelector((state) => state.auth);

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

    const onChange = (e) => {
        setValues({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const { email, password } = form;
        const user = { email, password };
        console.log(user);
        dispatch({
            type: LOGIN_REQUEST,
            payload: user,
        });
    };
    const Enter = (e) => {
        if (e.key === 'Enter') {
            onSubmit(e);
        }
    };

    const guestLink = (
        <Fragment>
            {localMsg ? <Alert color="danger">{localMsg}</Alert> : null}
            <Form onSubmit={onSubmit}>
                <FormGroup>
                    <S.label for="email">Email</S.label>
                    <S.input type="email" name="email" value={form.email} id="email" placeholder="Email" onChange={onChange} onKeyPress={Enter} data-testid="login-email" />
                    <S.label for="password">Password</S.label>
                    <S.input type="password" name="password" value={form.password} id="password" placeholder="Password" onChange={onChange} onKeyPress={Enter} data-testid="login-password" />
                    <Col>
                        <S.button data-testid="login-button">
                            Login
                        </S.button>
                    </Col>
                </FormGroup>
            </Form>
        </Fragment>
    );

    const authLink = (
        <Fragment>
            <Col>
                <S.welcome>안녕하세요.</S.welcome>
                {user && user.name ? (
                    <S.userName>{user ? `${user.name} 님` : ''}</S.userName>
                ) : (
                    <S.userName>
                        <strong>No User</strong>
                    </S.userName>
                )}
            </Col>
            <Col>
                <Link onClick={onLogout} to="/">
                    <S.button>Logout</S.button>
                </Link>
            </Col>
        </Fragment>
    );

    return <div>{isAuthenticated ? authLink : guestLink}</div>;
};

export default Login;
