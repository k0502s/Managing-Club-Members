import styled from 'styled-components';
import { Container } from 'reactstrap';

const container = styled(Container)`
    width: 100%;
    padding: 20px;
    min-height: 150vh;
    transition: all 0.3s;
    @media only screen and (max-width: 500px) {
        padding: 0;
    }
`;
const overlay = styled.div`
    @media only screen and (max-width: 500px) {
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

const wrapper = styled.div`
    @media only screen and (max-width: 500px) {
        padding: 20px;
    }
`;

export { container, wrapper, overlay };
