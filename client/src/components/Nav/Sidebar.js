import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MEMBER_INQUIRIES_REQUEST } from '../../redux/types';
import { NavItem, NavLink, Nav, Badge } from 'reactstrap';
import { Link } from 'react-router-dom';
import Login from '../Authentication/Login';
import LocationDisplay from '../../utils/LocationDisplay';
import headerImage from '../../assets/img/camera2.png';
import * as S from './Nav.style';

const SideBar = ({ isOpen, toggle }) => {
    const dispatch = useDispatch();
    const { isAuthenticated, user } = useSelector((state) => state.auth);
    const { chatalldata } = useSelector((state) => state.member);

    useEffect(() => {
        dispatch({
            type: MEMBER_INQUIRIES_REQUEST,
        });
    }, [dispatch]);

    const guestLink = <div></div>;

    const authLink = (
        <Fragment>
            <NavItem>
                <NavLink tag={Link} to={'/'} data-testid="home">
                    <S.HomeIcon />
                     HOME
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to={'/addmember'} data-testid="addmember">
                    <S.AddIcon />
                    ADD MEMBER
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to={'/list'} data-testid="list">
                    <S.ListIcon/>
                    MEMBER LIST
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to={'/warnlist'} data-testid="warnlist">
                    <S.WarnIcon/>
                    WARN MEMBER LIST
                    {/* <Badge color="secondary">{usercart.length}</Badge> */}
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to={'/inquiries'} data-testid="inquiries">
                    <S.QIcon/>
                    MEMBER INQIRIES{' '}
                    <Badge color="danger" data-testid="inquiries-data">
                        {chatalldata.length > 0 && '+' + chatalldata.length}
                    </Badge>
                </NavLink>
            </NavItem>
        </Fragment>
    );

    return (
        <S.Sidebar isOpen={isOpen}>
            <S.SidbarHeader isOpen={isOpen}>
                <span onClick={toggle}>&times;</span>
                <img src={headerImage}/>
                <h5>ADMIN SYSTEM</h5>
            </S.SidbarHeader>
            <Nav vertical className="list-unstyled pb-3">
                <Login />
            </Nav>
            <S.SideMenu>
                <Nav vertical className="list-unstyled pb-3">
                    {isAuthenticated ? authLink : guestLink}
                </Nav>
            </S.SideMenu>
            <LocationDisplay />
        </S.Sidebar>
    );
};

export default SideBar;
