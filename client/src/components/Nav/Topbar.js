import React, { Fragment, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAlignLeft } from '@fortawesome/free-solid-svg-icons';
import { Button, NavbarToggler, Collapse, Nav, NavItem, NavLink, Badge } from 'reactstrap';
import { Link } from 'react-router-dom';
import * as S from './Nav.style';

const Topbar = ({ toggleSidebar }) => {
    const [topbarIsOpen, setTopbarOpen] = useState(true);
    const { isAuthenticated, user, userRole } = useSelector((state) => state.auth);
    const { chatalldata } = useSelector((state) => state.member);

    const toggleTopbar = () => setTopbarOpen(!topbarIsOpen);

    const guestLink = <div className="ml-auto">로그인 인증이 필요합니다.</div>;

    const authLink = (
        <Fragment>
            <Nav className="ml-auto" navbar>
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
            <Button color="dark" onClick={toggleSidebar}>
                <S.toggleIcon />
            </Button>
            <NavbarToggler onClick={toggleTopbar} />
            <Collapse isOpen={false} navbar>
                {isAuthenticated ? authLink : guestLink}
            </Collapse>
        </S.Topbar>
    );
};

export default Topbar;
