import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { MEMBER_INQUIRIES_REQUEST } from '../../redux/types';
import { NavItem, NavLink, Nav, Badge, Row } from 'reactstrap';
import { Link } from 'react-router-dom';
import Login from '../Authentication/Login';
import LocationDisplay from '../../utils/LocationDisplay';
import headerImage from '../../assets/img/로고.png';
import * as S from './Nav.style';

type SideBarProps = {
    toggleMSidebar: () => void;
    isOpen: Boolean;
    isMOpen: Boolean;
};
type State = {
    auth: {
        isAuthenticated: boolean,
    };
    member: {
        chatalldata: object[]
    }
};

const SideBar: React.FC<SideBarProps> = ({ isOpen, toggleMSidebar, isMOpen }) => {
    const dispatch = useDispatch();
    const { isAuthenticated } = useSelector((state: State) => state.auth);
    const { chatalldata } = useSelector((state: State) => state.member);

    useEffect(() => {
        dispatch({
            type: MEMBER_INQUIRIES_REQUEST,
        });
    }, [dispatch]);

    const guestLink = <></>;

    const authLink = (
        <>
            <NavItem>
                <NavLink tag={Link} to={'/'} data-testid="home" onClick={toggleMSidebar}>
                    <S.HomeIcon />
                    HOME
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to={'/addmember'} data-testid="addmember" onClick={toggleMSidebar}>
                    <S.AddIcon />
                    ADD MEMBER
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to={'/list'} data-testid="list" onClick={toggleMSidebar}>
                    <S.ListIcon />
                    MEMBER LIST
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to={'/warnlist'} data-testid="warnlist" onClick={toggleMSidebar}>
                    <S.WarnIcon />
                    WARN MEMBER LIST
                </NavLink>
            </NavItem>
            <NavItem>
                <NavLink tag={Link} to={'/inquiries'} data-testid="inquiries" onClick={toggleMSidebar}>
                    <S.QIcon />
                    MEMBER INQIRIES{' '}
                    <Badge color="danger" data-testid="inquiries-data">
                        {chatalldata.length > 0 && '+' + chatalldata.length}
                    </Badge>
                </NavLink>
            </NavItem>
        </>
    );

    return (
        <S.Sidebar isOpen={isOpen} isMOpen={isMOpen}>
            <S.SidbarHeader>
                <Row>
                    <Link to={'/'} data-testid="Home">
                        <S.MobileLogo src={headerImage} />
                    </Link>
                    <S.SideToggleIcon onClick={toggleMSidebar} />
                </Row>
                <Link to={'/'} data-testid="Home">
                    <S.Logo src={headerImage} />
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
