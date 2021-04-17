import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MEMBER_INQUIRIES_REQUEST } from '../../redux/types';
import { NavItem, NavLink, Nav, Badge, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import Login from '../Authentication/Login';
import LocationDisplay from '../../utils/LocationDisplay';
import headerImage from '../../assets/img/camera2.png';
import * as S from './Nav.style';
import { Discovery } from 'aws-sdk';

const SideBar = ({ isOpen, toggleSidebar }) => {
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
                    <S.ListIcon />
                    MEMBER LIST
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to={'/warnlist'} data-testid="warnlist">
                    <S.WarnIcon />
                    WARN MEMBER LIST
                    {/* <Badge color="secondary">{usercart.length}</Badge> */}
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to={'/inquiries'} data-testid="inquiries">
                    <S.QIcon />
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
                <Row>
                    <Link to={'/'}>
                        <S.mobilelogo src={headerImage} />
                    </Link>
                    <S.sidetoggleIcon onClick={toggleSidebar} />
                </Row>
                <Link to={'/'}>
                    <S.logo src={headerImage} />
                </Link>
                <h5>MEMBER ADMIN SYSTEM</h5>
            </S.SidbarHeader>
            <Login />
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
