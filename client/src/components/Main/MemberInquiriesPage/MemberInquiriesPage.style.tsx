import styled from 'styled-components';
import List from '@material-ui/core/List';
import { BsFillTrashFill } from 'react-icons/bs';
import { Button, Row, Card, Table } from 'reactstrap';

type SpanProps = {
    margin: string;
}
type ThProps = {
    width?: string;
}

// Icon CSS
const DeleteIcon = styled(BsFillTrashFill)`
    transition: 0.4s;
    &:hover {
        transform: scale(1.4);
    }
`;
// Inquiries Page CSS
const Title = styled(Row)`
    text-align: center;
    display: block;
    margin: -10px 0 26px 0;
    color: #f9e81c;
`;
const QTable = styled(Table)`
    @media only screen and (max-width: 767px) {
        display: none;
    }
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        display: none;
    }
`;
const QList = styled(List)`
    display: none;
    width: 100%;
    background-color: #f4fcfb;
    @media only screen and (max-width: 767px) {
        display: block;
    }
    @media only screen and (min-width: 768px) and (max-width: 1023px) {
        display: block;
    }
`;
const Qbtn = styled(Button)`
    border-radius: 7px;
    border: 1px;
    background-color: #8bc34a;
    & #icon {
        width: 24px;
        height: 24px;
        transition: all 0.4s ease-in-out;
    }
    &:hover {
        color: white;
        background-color: lightslategray;
    }
    &:hover #icon {
        transform: rotate(360deg) scale(1.2);
    }
`;

const QCard = styled(Card)`
    background-color: #f4fcfb;
    border-radius: ${(props) => props.radius};
    border: 0px;
    @media only screen and (max-width: 767px) {
        margin-top: 25px;
    }
`;
const Th = styled.th`
    text-align: center;
    width: ${(props: ThProps) => props.width};
`;

const Span = styled.span`
    margin-left: ${(props: SpanProps) => props.margin};
    @media only screen and (max-width: 767px) {
        margin-left: 230px;
    }
`;

// Contact Email CSS
const Input = styled.input`
    width: 100%;
`
const TextArea = styled.textarea`
    width: 100%;
`
const Form = styled.form`

`

export { Title, QCard, QTable, QList, Qbtn, DeleteIcon, Th, Span, Input, TextArea, Form};
