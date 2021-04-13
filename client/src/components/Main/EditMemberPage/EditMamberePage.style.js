import styled from 'styled-components';
import { CardBody, Button } from 'reactstrap';
import { BsPersonFill } from 'react-icons/bs';

const PersonIcon = styled(BsPersonFill)`
    width: 300px;
    height: 240px;
    color: lightgrey;
`;
const button = styled(Button)`
    margin-right: 10px;
    font-weight: bold;
    color: white;
    background-color: ${(props) => props.color};

    &:hover {
        color: white;
        background-color: lightslategray;

    }
`;
const Profile = styled.div`
    width: 300px;
    height: 240px;
    border-radius: 55%;
    border: 1px solid lightgray;
    margin-bottom: 15px;
    display: block;
    margin: 0px auto;
    text-align: center;
`;

const Img = styled.img`
    width: 300px;
    height: 240px;
    border-radius: 55%;
    border: 1px solid lightgray;
`;

const FileUpload = styled.div`
    margin-top: 30px;
    margin-bottom: 30px;
`;

const card = styled(CardBody)`
    height: 720px;
`;
export { Profile, Img, FileUpload, card, PersonIcon, button };
