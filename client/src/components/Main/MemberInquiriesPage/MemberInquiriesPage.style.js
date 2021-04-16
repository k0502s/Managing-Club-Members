import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { BsFillTrashFill } from 'react-icons/bs';
import { Label, Input, Button, Col, Row, Card, Table } from 'reactstrap';

const deleteIcon = styled(BsFillTrashFill)`
    transition: 0.4s;
    &:hover {
        transform: scale(1.4);
    }
`;

const title = styled(Row)`
    text-align: center;
    display: block;
    margin: -10px 0 26px 0;
`;
const table = styled(Table)`
    @media only screen and (max-width: 500px) {
        display: none;
    }
`;
const list = styled(List)`
    display: none;
    width: 100%;
    background-color: #f4fcfb;
    @media only screen and (max-width: 500px) {
        display: block;
    }
`;
const btn = styled(Button)`
    margin-bottom: 10px;
    border-radius: 7px;
    border: 1px;
    background-color: #8bc34a;

    & #icon {
        width: 24px;
        height: 24px;
        transition: all 0.4s ease-in-out;
        margin: 0 5px 2px 0;
    }
    &:hover {
        color: white;
        background-color: lightslategray;
    }
    &:hover #icon {
        transform: rotate(360deg) scale(1.2);
    }
`;

const card = styled(Card)`
    background-color: #f4fcfb;
    border-radius: ${(props) => props.radius};
    @media only screen and (max-width: 500px) {
        margin-top: 25px;
    }
`;
const th = styled.th`
    text-align: center;
    width: ${(props) => props.width};
`;

const span = styled.span`
    margin-left: ${(props) => props.margin};
    @media only screen and (max-width: 500px) {
        margin-left: 230px;
    }
`;

export { title, card, table, list, btn, deleteIcon, th, span };
