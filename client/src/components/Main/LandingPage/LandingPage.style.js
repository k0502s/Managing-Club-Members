import styled from 'styled-components';
import { Row, Card, Button, CardHeader, CardBody } from 'reactstrap';
import { BsMap, BsBell, BsBarChart, BsFillPersonPlusFill, BsFillPersonLinesFill, BsExclamationTriangle, BsFillQuestionDiamondFill } from 'react-icons/bs';

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

const title = styled(Row)`
    text-align: center;
    display: block;
    margin: -10px 0 22px 0;
`;

const bellIcon = styled(BsBell)`
    margin: 3px 8px 0 0;
`;

const img = styled.img`
    width: 200px;
    display: block;
    margin: 0 auto;
    margin-right: 30px;
`;
const img2 = styled.img`
    width: 300px;
    display: block;
    margin: 0 auto;
    margin-bottom: -40px;
   
`;
const header = styled(CardHeader)`
    & div {
        width: 100%;
        
        display: flex;
        justify-content: 'center';
    }
`;
const card = styled(Card)`
margin-top: ${(props) => props.margin};
 @media only screen and (max-width: 767px) {
     margin-top: 20px;
    }
`

const circle = styled.div`
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

export { header, bellIcon, img, img2, AddIcon, ListIcon, WarnIcon, QIcon, MapIcon, ChartIcon,  circle, card, title };
