import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { BsInboxFill } from 'react-icons/bs';
import { Label, Input, Button, Col, Row, Card } from 'reactstrap';

const emptyIcon = styled(BsInboxFill)`
    display: block;
    margin: 0 auto;
    width: 300px;
    height: 240px;
    color: lightgrey;
`;

const emptytext = styled.div`
    text-align: center;
    font-size: 60px;
`;

const link = styled(List)`
    width: 100%;
    background-color: #f4fcfb;
`;
const listItem = styled(ListItem)`
    .MuiListItemText-root {
        width: 25%;
    }
`;
const listItems = styled(ListItem)`
    padding-left: 50px;
`;

const Img = styled.img`
    width: 80px;
`;
const warnImg = styled.img`
    width: 200px;
    margin-left: 215px;
    margin-bottom: 20px;
    @media only screen and (max-width: 500px) {
        display: block;
        margin: 0 auto;
    }
`;

const title = styled(Row)`
    text-align: center;
    display: block;
    margin: -10px 0 18px 0;
`;

const card = styled(Card)`
    background-color: #f4fcfb;
    border-radius: 10px;
    @media only screen and (max-width: 500px) {
        margin-bottom: ${(props) => props.margin};
    }
`;

export { link, Img, listItem, listItems, title, card, emptyIcon, emptytext, warnImg };
