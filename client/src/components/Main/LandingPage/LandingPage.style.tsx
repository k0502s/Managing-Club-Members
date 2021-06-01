import styled from 'styled-components';
import { Row, Card, CardHeader } from 'reactstrap';
import { BsMap, BsBell, BsBarChart, BsFillPersonPlusFill, BsFillPersonLinesFill, BsExclamationTriangle, BsFillQuestionDiamondFill, BsFillHouseDoorFill } from 'react-icons/bs';

// Icon CSS
const HomeIcon = styled(BsFillHouseDoorFill)`
    margin-right: 10px;
    margin-bottom: 4px;
    font-size: large;
`;

const AddIcon = styled(BsFillPersonPlusFill)`
    margin-right: 10px;
    margin-bottom: 3px;
    font-size: large;
`;
const ListIcon = styled(BsFillPersonLinesFill)`
    margin-right: 10px;
    margin-bottom: 3px;
    font-size: large;
`;
const WarnIcon = styled(BsExclamationTriangle)`
    margin-left: -3px;
    margin-right: 5px;
    margin-bottom: 3px;
    font-size: large;
`;
const QIcon = styled(BsFillQuestionDiamondFill)`
    margin-left: -2px;
    margin-right: 5px;
    margin-bottom: 3px;
    font-size: large;
`;
const ChartIcon = styled(BsBarChart)`
    margin-left: -2px;
    margin-right: 5px;
    margin-bottom: 3px;
    font-size: large;
`;
const MapIcon = styled(BsMap)`
    margin-left: -2px;
    margin-right: 5px;
    margin-bottom: 3px;
    font-size: large;
`;
const BellIcon = styled(BsBell)`
    margin: 3px 8px 0 0;
`;

// Home Page CSS

const Title = styled(Row)`
    text-align: center;
    display: block;
    margin: -10px 0 22px 0;
    color: #f9e81c;
`;

const Img = styled.img`
    width: 200px;
    display: block;
    margin: 0 auto;
    margin-right: 30px;
`;
const Img2 = styled.img`
    width: 300px;
    display: block;
    margin: 0 auto;
    margin-top: 40px;
`;
const Header = styled(CardHeader)`
    & div {
        width: 100%;

        display: flex;
        justify-content: 'center';
    }
`;
const HomeCard = styled(Card)`
    margin: ${(props) => props.margin};
    min-height: ${(props) => props.height};
    @media only screen and (max-width: 767px) {
        margin-top: 20px;
    }
`;

const DataCircle = styled.div`
    position: relative;
    width: 100px;
    height: 100px;
    border: 1px;
    display: block;
    border-radius: 50%;
    margin: 0 auto;
    color: #fff;
    background-color: ${(props) => props.color};
    & div {
        position: absolute;
        display: block;
        width: 100%;
        top: 5%;
        text-align: center;
        margin-left: 3px;
    }
    & p {
        position: absolute;
        display: block;
        width: 100%;
        top: 30%;
        text-align: center;
    }
    & span {
        position: absolute;
        display: block;
        width: 100%;
        top: 60%;
        text-align: center;
    }
`;

export { Header, BellIcon, Img, Img2, AddIcon, ListIcon, WarnIcon, HomeIcon, QIcon, MapIcon, ChartIcon, DataCircle, HomeCard, Title };
