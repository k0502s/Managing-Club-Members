import styled from 'styled-components';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { BsInboxFill } from 'react-icons/bs';
import { Row, Card } from 'reactstrap';

const EmptyIcon = styled(BsInboxFill)`
    display: block;
    margin: 0 auto;
    width: 300px;
    height: 240px;
    color: lightgrey;
`;

const Emptytext = styled.div`
    text-align: center;
    font-size: 60px;
`;

const WarnList = styled(List)`
    width: 100%;
    background-color: #f4fcfb;
`;
const WarnListItem = styled(ListItem)`
    .MuiListItemText-root {
        width: 25%;
    }
`;
const WarnListItems = styled(ListItem)`
    padding-left: 50px;
`;

const Img = styled.img`
    width: 80px;
`;
const WarnImg = styled.img`
    width: 200px;
    margin-left: 215px;
    margin-bottom: 20px;
    @media only screen and (max-width: 767px) {
        display: block;
        margin: 0 auto;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        display: block;
        margin: 0 auto;
    }
`;

const Title = styled(Row)`
    text-align: center;
    display: block;
    margin: -10px 0 18px 0;
`;

const WarnCard = styled(Card)`
    background-color: #f4fcfb;
    border-radius: 10px;
    @media only screen and (max-width: 767px) {
        margin-bottom: ${(props) => props.margin};
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        margin-bottom: ${(props) => props.margin};
    }
`;

const Span = styled.span`
    margin-left: ${(props) => props.margin};
    @media only screen and (max-width: 767px) {
        margin-left: 230px;
    }
    @media only screen and (min-width: 768px) and (max-width: 1024px) {
        margin-left: 170px;
    }
`;

export { WarnList, Img, WarnListItem, WarnListItems, Title, WarnCard, EmptyIcon, Emptytext, WarnImg, Span };
