import styled from 'styled-components';
import { Container } from 'reactstrap';

const container = styled(Container)`
    padding: 20px;
    margin-left: 0;
    height: 100vh;
    @media only screen and (max-width: 500px) {
        margin-left: ${({ isOpen }) => (isOpen ? '100%' : '')};
    }
`;

export { container }
