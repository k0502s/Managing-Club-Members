import styled from 'styled-components';
import List from '@material-ui/core/List';
import { Col, CardBody, Button, Card, CardImg } from 'reactstrap';
import { BsPersonFill } from 'react-icons/bs';

const PersonIcon = styled(BsPersonFill)`
    width: 300px;
    height: 240px;
    color: lightgrey;
`;

const Img = styled.img`
    width: 80px;
`;

const link = styled(List)`
    width: 100%;
    background-color: #f4fcfb;
`;
const card = styled(Card)`
    background-color: #f4fcfb;
    @media only screen and (max-width: 500px) {
        margin-top: ${(props) => props.margin};
    }
`;

const cardImg = styled(CardImg)`
    width: 78%;
    margin: 0 auto;
`;

const button = styled(Button)`
    font-weight: bold;
    color: white;
    border: 1px;
    border-radius: 20px;
    background-color: ${(props) => props.color};
    margin: ${(props) => props.margin};
    width: ${(props) => props.width};
    &:hover {
        color: white;
        background-color: lightslategray;
    }
    @media only screen and (max-width: 500px) {
        display: block;
        margin: 0 auto;
        margin-top: 10px;
        margin-bottom: 10px;
        width: 190px;
    }
`;

export { Img, link, card, button, PersonIcon, cardImg };
