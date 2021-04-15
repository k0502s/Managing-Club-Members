import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { Label, Input, Button, Col, Card } from 'reactstrap';

const link = styled(List)`
    width: 100%;
    background-color: #f4fcfb;
    /* border: 1px solid black; */
`;
const listItem = styled(ListItem)`
.MuiListItemText-root {
      width: 25%;
  }
`;

const Img = styled.img`
    width: 80px;
`;

export { link, Img, listItem }