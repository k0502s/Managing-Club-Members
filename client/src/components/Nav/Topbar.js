import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, NavbarToggler, Collapse, Nav, NavItem, NavLink, Badge, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';
import headerImage from '../../assets/img/camera2.png';
import * as S from './Nav.style';

const Topbar = ({ toggleSidebar }) => {
    const { isAuthenticated, user, userRole } = useSelector((state) => state.auth);
    const { chatalldata } = useSelector((state) => state.member);

    const guestLink = <div><strong>로그인이 필요합니다!</strong></div>;

    const authLink = (
        <Fragment>
            <Nav>
                <NavItem>
                    <NavLink tag={Link} to={'/addmember'}>
                        <S.AddIcon style={{ fontSize: 30, color: '#667777' }} />
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={'/list'}>
                        <S.ListIcon style={{ fontSize: 30, color: '#667777', marginLeft: 20 }} />
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={'/warnlist'}>
                        <S.WarnIcon style={{ fontSize: 30, color: '#667777', marginLeft: 20 }} />
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={'inquiries'}>
                        <S.QIcon style={{ fontSize: 30, color: '#667777', marginLeft: 20 }} />
                        <S.badge color="danger" data-testid="inquiries-data">
                            {chatalldata.length > 0 && '+' + chatalldata.length}
                        </S.badge>
                    </NavLink>
                </NavItem>
            </Nav>
        </Fragment>
    );

    return (
        <S.Topbar expand="md">
            <S.toggleIcon onClick={toggleSidebar} />
            <NavbarBrand>
                <img src={headerImage} />
            </NavbarBrand>
            {isAuthenticated ? authLink : guestLink}
        </S.Topbar>
    );
};

export default Topbar;
