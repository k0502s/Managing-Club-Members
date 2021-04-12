import styled from 'styled-components';
import { Navbar } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Icon = styled(FontAwesomeIcon)`
    margin-right: 10px;
`;

const Sidebar = styled.div`
    min-width: 250px;
    max-width: 250px;
    min-height: 950px;
    background: #7386d5;
    color: #fff;
    margin-left: -250px;
    transition: all 0.5s;
    margin-left: ${({ isOpen }) => (isOpen ? '0' : '')};
    transition: ${({ isOpen }) => (isOpen ? '0.5s' : '')};

    @media only screen and (max-width: 500px) {
        min-width: ${({ isOpen }) => (isOpen ? '100%' : '')};
        max-width: ${({ isOpen }) => (isOpen ? '100%' : '')};
        margin-left: ${({ isOpen }) => (isOpen ? 0 : '')};
        transition: ${({ isOpen }) => (isOpen ? 'all 0.5s, height 0s' : '')};
    }

    & ul,
    p {
        color: #fff;
        padding: 10px;
    }

    & .nav-item:hover {
        color: #7386d5;
        background: #fff;
    }
`;

const SidbarHeader = styled.div`
    background: #6d7fcc;

    & h3 {
        color: #fff;
        padding: 1em;
    }
    & img {
        width: 80x;
        height: 80px;
        margin-left: 16%;
        margin-top: 10%;
        
        @media only screen and (max-width: 500px) {
            margin-left: 92px;
        }
    }
    & h5 {
        text-align: center;
        color: #fff;
        padding:10px;
    }
    & > span {
        position: relative;
        float: right;
        margin: 0.5em;
        font-size: 2rem;
        cursor: pointer;
        display: none;
        color: #fff;
        @media only screen and (max-width: 500px) {
            display: ${({ isOpen }) => (isOpen ? 'unset' : '')};
        }
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
    background-color: light;
    border-radius: 15px;
    box-shadow: 0 6px 10px 0 rgb(55, 54, 54);
`;

export { Icon, Sidebar, SidbarHeader, SideMenu, Topbar };
