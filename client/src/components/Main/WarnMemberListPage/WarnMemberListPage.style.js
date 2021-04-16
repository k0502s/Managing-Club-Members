import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Label, Input, Button, Col, Row, Card } from 'reactstrap';

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

export { link, Img, listItem, listItems, title, card };
