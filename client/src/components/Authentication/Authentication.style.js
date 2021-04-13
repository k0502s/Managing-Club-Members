import styled from 'styled-components';
import { Label, Input, Button, Col } from 'reactstrap';

const label = styled(Label)`
    margin-left: 1.5rem;
    margin-top: 0.5rem;
`;

const input = styled(Input)`
    width: 80%;
    margin-left: 1.5rem;
`;

const button = styled(Button)`
    width: 100%;
    margin-top: 1rem;
    color: white;
    background-color: #333;
    border-radius: 18px;
    border: 1px;
    &:hover {
        background-color: lightslategray;
    }
`;

const userName = styled(Col)`
    text-align: center;
    margin-top: 10px;
`;

const welcome = styled(Col)`
    text-align: center;
    margin-top: 30px;
    font-weight: bold;
`;

export { label, input, button, userName, welcome };
