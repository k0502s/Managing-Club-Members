import React from 'react';
import { useSelector } from 'react-redux';
import { Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';
import headerImage from '../../assets/img/로고.png';
import * as S from './Nav.style';

type TopbarProps = {
    toggleSidebar: () => void;
    toggleMSidebar: () => void;
};
type State = {
    auth: {
        isAuthenticated: boolean;
    };
    member: {
        chatalldata: object[];
    };
};

const Topbar: React.FC<TopbarProps> = ({ toggleSidebar, toggleMSidebar }) => {
    const { isAuthenticated } = useSelector((state: State) => state.auth);
    const { chatalldata } = useSelector((state: State) => state.member);

    const guestLink = (
        <div>
            <strong>로그인이 필요합니다!</strong>
        </div>
    );

    const authLink = (
        <>
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
                        <S.CountbBadge color="danger" data-testid="inquiries-data">
                            {chatalldata.length > 0 && '+' + chatalldata.length}
                        </S.CountbBadge>
                    </NavLink>
                </NavItem>
            </Nav>
        </>
    );

    return (
        <S.Topbar expand="md">
            <S.ToggleIcon onClick={toggleSidebar} />
            <S.MToggleIcon onClick={toggleMSidebar} />
            <NavbarBrand>
                <Link to={'/'} data-testid="Home">
                    <img src={headerImage} />
                </Link>
            </NavbarBrand>
            {isAuthenticated ? authLink : guestLink}
        </S.Topbar>
    );
};

export default Topbar;
