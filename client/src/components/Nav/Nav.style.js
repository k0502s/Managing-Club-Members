import styled from 'styled-components';
import { Navbar, Badge } from 'reactstrap';
import { BsFillPersonPlusFill, BsFillHouseDoorFill, BsFillPersonLinesFill, BsExclamationTriangle, BsFillQuestionDiamondFill, BsJustify } from 'react-icons/bs';

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

const toggleIcon = styled(BsJustify)`
    font-size: 25px;
    margin-bottom: 2px;
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
        padding: 20px 0;
        border-bottom: 1px solid #fff;
    }

    & .nav-item:hover {
        color: #7386d5;
        background: #fff;
    }
    /* & ul li.active > a,
    a[aria-expanded='true'] {
        color: #fff;
        background: #6d7fcc;
    } */
    @media (max-width: 768px) {
        margin-left: -250px;
        margin-left: ${({ isOpen }) => (isOpen ? '0' : '')};
    }
`;

const SidbarHeader = styled.div`
    padding: 20px;
    background: #1c685e;
    text-align: center;
    & h3 {
        color: #fff;
        padding: 1em;
    }
    & img {
        width: 80x;
        height: 80px;
        margin-top: 10%;
    }
    & h5 {
        text-align: center;
        color: #fff;
        padding: 10px;
    }
`;

const SideMenu = styled.div`
    height: calc(100vh - 130px);
    overflow-y: scroll;

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
    padding: 30px;
    margin-bottom: 50px;
    background-color: #f4fcfb;
    border-radius: 15px;
    box-shadow: 0 6px 10px 0 rgb(55, 54, 54);
`;

const badge = styled(Badge)`
    position: relative;
    margin-left: -18px;
    top: 10px;
    border-radius: 50%;
`;

export { AddIcon, HomeIcon, ListIcon, WarnIcon, QIcon, toggleIcon, Sidebar, SidbarHeader, SideMenu, Topbar, badge };
