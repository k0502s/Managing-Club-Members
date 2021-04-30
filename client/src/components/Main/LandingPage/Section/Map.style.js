import styled from 'styled-components';

const MapWrap = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 350px;
    & div#map {
        width: 100%;
        height: 100%;
        position: relative;
        overflow: hidden;
        /* border-radius: 0 0 20px 20px; */
    }
    & .custom_typecontrol {
        position: absolute;
        top: 10px;
        right: 10px;
        overflow: hidden;
        width: 130px;
        height: 30px;
        margin: 0;
        padding: 0;
        z-index: 1;
        font-size: 12px;
        font-family: 'Malgun Gothic', '맑은 고딕', sans-serif;
        }
    }
    & .custom_typecontrol span {
        display: block;
        width: 65px;
        height: 30px;
        float: left;
        text-align: center;
        line-height: 30px;
        cursor: pointer;
    }
    & #btnRoadmap {
        font-size: 12px;
        text-align: center;
        padding: 0;
    }
    & #btnSkyview {
        font-size: 12px;
        text-align: center;
        padding: 0;
    }
    & .custom_typecontrol .btn:hover {
    background: #f5f5f5;
    background: linear-gradient(#f5f5f5, #e3e3e3);
    }
    & .custom_typecontrol .selected_btn .btn:active {
    background: #e6e6e6;
    background: linear-gradient(#e6e6e6, #fff);
    }
    & .custom_typecontrol .selected_btn {
    color: #fff;
    background: #425470;
    background: linear-gradient(#425470, #5b6d8a);
    }
    & .custom_typecontrol .btn {
    background: #fff;
    background: linear-gradient(#fff, #e6e6e6);
    }
    & .custom_zoomcontrol {
        position: absolute;
        top: 50px;
        right: 10px;
        width: 36px;
        height: 80px;
        overflow: hidden;
        z-index: 1;
        background-color: #f5f5f5;
        & span {
            display: block;
            width: 36px;
            height: 40px;
            text-align: center;
            cursor: pointer;
            & img {
                width: 15px;
                height: 15px;
                margin-top: 12px;
                border: none;
            }
    }
    & span:first-child {
            border-bottom: 1px solid #bfbfbf;
        }
`;

export { MapWrap };