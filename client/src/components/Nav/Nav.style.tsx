import styled from 'styled-components';
import { Navbar, Badge } from 'reactstrap';
import { BsFillPersonPlusFill, BsXSquareFill, BsFillHouseDoorFill, BsFillPersonLinesFill, BsExclamationTriangle, BsFillQuestionDiamondFill, BsJustify } from 'react-icons/bs';

type SideBarProps = {
    isOpen: Boolean;
    isMOpen: Boolean;
};

// Nav Icon CSS
const HomeIcon = styled(BsFillHouseDoorFill)`
    margin-right: 10px;
    margin-bottom: 4px;
    font-size: large;
`;
const AddIcon = styled(BsFillPersonPlusFill)`
    margin-right: 10px;
    margin-bottom: 3px;
    font-size: large;
`;
const ListIcon = styled(BsFillPersonLinesFill)`
    margin-right: 10px;
    margin-bottom: 3px;
    font-size: large;
`;
const WarnIcon = styled(BsExclamationTriangle)`
    margin-left: -2px;
    margin-right: 10px;
    margin-bottom: 3px;
    font-size: large;
`;
const QIcon = styled(BsFillQuestionDiamondFill)`
    margin-left: -2px;
    margin-right: 10px;
    margin-bottom: 3px;
    font-size: large;
`;

const ToggleIcon = styled(BsJustify)`
    font-size: 40px;
    margin-bottom: 2px;
    color: #333;
    @media only screen and (max-width: 1023px) {
        display: none;
    }
`;
const MToggleIcon = styled(BsJustify)`
    display: none;
    @media only screen and (max-width: 1023px) {
        display: block;
        font-size: 40px;
        margin-bottom: 2px;
        color: #333;
    }
`;
const SideToggleIcon = styled(BsXSquareFill)`
    display: none;
    @media only screen and (max-width: 1023px) {
        display: block;
        font-size: 30px;
        color: #333;
        margin-left: 17px;
        margin-top: 5px;
    }
`;

// Nav CSS
const Sidebar = styled.div`
    min-width: 250px;
    max-width: 250px;
    background: #48877f;
    color: #fff;
    margin-left: -250px;
    transition: all 0.5s;
    margin-left: ${({ isOpen }: SideBarProps) => (isOpen ? '0' : '')};
    transition: ${({ isOpen }: SideBarProps) => (isOpen ? '0.5s' : '')};

    & ul {
        color: #fff;
        padding: 22px 18px;
    }

    & .nav-item:hover {
        color: #4c443c;
    }
    @media only screen and (max-width: 1023px) {
        z-index: 999;
        position: fixed;
        left: -250px;
        left: ${({ isMOpen }: SideBarProps) => (isMOpen ? '0' : '')};
    }
`;

const SidbarHeader = styled.div`
    padding: 20px 20px 0 20px;
    background: #1c685e;
    text-align: center;
    & h3 {
        color: #fff;
        padding: 1em;
    }
    & h5 {
        text-align: center;
        color: #fff;
        padding: 10px;
    }
`;

const MobileLogo = styled.img`
    display: none;
    @media only screen and (max-width: 1023px) {
        display: block;
        width: 80x;
        height: 80px;
        margin-top: 10px;
        margin-left: 5px;
    }
`;
const Logo = styled.img`
    width: 80x;
    height: 80px;
    margin-top: 10%;
    @media only screen and (max-width: 1023px) {
        display: none;
    }
`;

const SideMenu = styled.div`
    height: 90vh;

    & a {
        border-bottom: 1px solid #ededed;
        padding: 12px 0;
    }
    &::-webkit-scrollbar {
        width: 10px;
    }

    &::-webkit-scrollbar-thumb {
        background: #5466b3;
        border-radius: 3px;
    }

    &::-webkit-scrollbar-thumb:hover {
        background: #3a4c99;
    }
`;

const Topbar = styled(Navbar)`
    padding: 15px;
    margin-bottom: 50px;
    background-color: #f4fcfb;
    border-radius: 15px;
    box-shadow: 0 6px 10px 0 rgb(55, 54, 54);
    & .navbar-brand {
        display: none;
    }
    & .nav {
        width: 100%;
        justify-content: flex-end;
    }
    & div {
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
    @media only screen and (max-width: 1023px) {
        padding: 10px 9px 10px 9px;
        margin-bottom: 30px;
        border-radius: 0;
        & a.nav-link {
            display: none;
        }
    }
    @media only screen and (max-width: 767px) {
        & .navbar-brand {
            display: block;
            margin: 0 auto;
        }
        & img {
            width: 130px;
            margin-right: 40px;
        }
        & div {
            display: none;
        }
    }
`;

const CountbBadge = styled(Badge)`
    position: relative;
    margin-left: -18px;
    top: 10px;
    border-radius: 50%;
`;

export { AddIcon, HomeIcon, ListIcon, WarnIcon, QIcon, ToggleIcon, MToggleIcon, Sidebar, SidbarHeader, SideMenu, Topbar, CountbBadge, SideToggleIcon, MobileLogo, Logo };
