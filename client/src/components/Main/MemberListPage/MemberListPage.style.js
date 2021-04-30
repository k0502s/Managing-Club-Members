import styled from 'styled-components';
import List from '@material-ui/core/List';
import { Row, Button, Card, CardImg } from 'reactstrap';
import { BsPersonFill } from 'react-icons/bs';

// Icon CSS

const PersonIcon = styled(BsPersonFill)`
    width: 300px;
    height: 240px;
    color: lightgrey;
`;

// List Page CSS
const Img = styled.img`
    width: 80px;
`;

const MemberList = styled(List)`
    width: 100%;
    background-color: #f4fcfb;
`;
const MemberCard = styled(Card)`
    background-color: #f4fcfb;
    border-radius: 10px;
    & .card-img-top {
        width: 100%;
        height: 20rem;
        object-fit: cover;
    }
    @media only screen and (max-width: 767px) {
        margin-top: ${(props) => props.margin};
    }
`;

const MemberCardImg = styled(CardImg)`
    width: 78%;
    margin: 0 auto;
`;

const Memberbtn = styled(Button)`
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
    @media only screen and (max-width: 767px) {
        display: block;
        margin: 0 auto;
        margin-top: 10px;
        margin-bottom: 10px;
        width: 190px;
    }
`;

const Title = styled(Row)`
    text-align: center;
    display: block;
    margin: -10px 0 22px 0;
    color: #f9e81c;
`;

const Span = styled.span`
    margin-left: ${(props) => props.margin};
    @media only screen and (max-width: 767px) {
        margin-left: 210px;
    }
`;

export { Img, MemberList, MemberCard, Memberbtn, PersonIcon, MemberCardImg, Title, Span };
