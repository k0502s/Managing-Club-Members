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

    /* padding: 20px;
    margin-left: 0;
    height: 100vh;
    @media only screen and (max-width: 500px) {
        margin-left: ${({ isOpen }) => (isOpen ? '100%' : '')};
    } */
`;

const wrapper = styled.div `
@media only screen and (max-width: 500px) {
padding: 20px;
}
`

export { container, wrapper };
