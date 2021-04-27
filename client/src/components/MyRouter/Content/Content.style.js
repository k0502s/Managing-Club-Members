import styled from 'styled-components';
import { Container } from 'reactstrap';

const MainContainer = styled(Container)`
    width: 100%;
    padding: 20px 20px 0 20px;
    min-height: 100vh;
    transition: all 0.3s;
    @media only screen and (max-width: 1023px) {
        padding: 0;
    }
`;
const Overlay = styled.div`
    @media only screen and (max-width: 1023px) {
        display: none;
        position: fixed;
        width: 100vw;
        height: 100vh;
        background: rgba(0, 0, 0, 0.7);
        z-index: 998;
        opacity: 0;
        transition: all 0.5s ease-in-out;
        opacity: ${({ isOpen }) => (isOpen ? '1' : '')};
        display: ${({ isOpen }) => (isOpen ? 'block' : '')};
    }
`;

const MainWrap = styled.div`
    @media only screen and (max-width: 1023px) {
        padding: 20px 20px 0 20px;
    }
`;

export { MainContainer, MainWrap, Overlay };
