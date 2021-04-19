import styled from 'styled-components';
import { Navbar, Badge } from 'reactstrap';
import { BsFillPersonPlusFill, BsXSquareFill, BsFillHouseDoorFill, BsFillPersonLinesFill, BsExclamationTriangle, BsFillQuestionDiamondFill, BsJustify } from 'react-icons/bs';

const HomeIcon = styled(BsFillHouseDoorFill)`
    margin-right: 10px;
    margin-bottom: 4px;
    font-size: large;
`;
const AddIcon = styled(BsFillPersonPlusFill)`
    margin-right: 10px;
    margin-bottom: 3px;
    font-size: large;
    /* transition: 0.4s;
    &:hover {
        transform: scale(1.6);
    } */
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

const toggleIcon = styled(BsJustify)`
    font-size: 40px;
    margin-bottom: 2px;
    color: #333;
`;
const sidetoggleIcon = styled(BsXSquareFill)`
    display: none;
    @media only screen and (max-width: 1024px) {
        display: block;
        font-size: 30px;
        color: #333;
        margin-left: 17px;
        margin-top: 5px;
    }
`;

const Sidebar = styled.div`
    min-width: 250px;
    max-width: 250px;
    background: #48877f;
    color: #fff;
    margin-left: -250px;
    transition: all 0.5s;
    margin-left: ${({ isOpen }) => (isOpen ? '0' : '')};
    transition: ${({ isOpen }) => (isOpen ? '0.5s' : '')};

    & ul {
        color: #fff;
        padding: 22px 18px;
    }

    & .nav-item:hover {
        color: #4c443c;
    }
    @media only screen and (max-width: 1024px) {
        z-index: 999;
        position: fixed;
        left: -250px;
        left: ${({ isOpen }) => (isOpen ? '0' : '')};
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

const mobilelogo = styled.img`
    display: none;
    @media only screen and (max-width: 1024px) {
        display: block;
        width: 80x;
        height: 80px;
        margin-top: 10px;
        margin-left: 5px;
    }
`;
const logo = styled.img`
    width: 80x;
    height: 80px;
    margin-top: 10%;
    @media only screen and (max-width: 1024px) {
        display: none;
    }
`;

const SideMenu = styled.div`
    height: calc(100vh - 130px);

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
    & ul.nav {
        width: 100%;
        justify-content: flex-end;
    }
    @media only screen and (max-width: 1024px) {
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
            margin-right: 24px;
        }
    }
`;

const badge = styled(Badge)`
    position: relative;
    margin-left: -18px;
    top: 10px;
    border-radius: 50%;
`;

export { AddIcon, HomeIcon, ListIcon, WarnIcon, QIcon, toggleIcon, Sidebar, SidbarHeader, SideMenu, Topbar, badge, sidetoggleIcon, mobilelogo, logo };
