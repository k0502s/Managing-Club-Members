import styled from 'styled-components';
import { Label, Input, Button, Col } from 'reactstrap';

const LoginLabel = styled(Label)`
    margin-left: 1.5rem;
    margin-top: 0.7rem;
`;

const LoginInput = styled(Input)`
    width: 80%;
    margin-left: 1.5rem;

`;

const LoginButton = styled(Button)`
    width: 100%;
    margin-top: 1.5rem;
    color: white;
    background-color: #333;
    border-radius: 18px;
    border: 1px;
    &:hover {
        background-color: lightslategray;
    }
`;

const UserName = styled(Col)`
    text-align: center;
    margin-top: 10px;
`;

const Welcome = styled(Col)`
    text-align: center;
    margin-top: 30px;
    font-weight: bold;
`;

export { LoginLabel, LoginInput, LoginButton, UserName, Welcome };
