import React from 'react';
import { Button } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { MEMBER_WARN_REQUEST } from '../../../../redux/types';
import * as S from '../MemberListPage.style'

const WarnButton = (props) => {
    const dispatch = useDispatch();

    const clickHandler = () => {
        const body = {
            token: localStorage.getItem('token'),
            warndata: props.detail._id,
        };
        //필요한 정보를 Cart 필드에 넣어준다.
        // dispatch(addToCart(props.detail._id))
        dispatch({
            type: MEMBER_WARN_REQUEST,
            payload: body,
        });
    };

    return (
        <div>
            <div>
                <S.button color={'#e2b046'} margin={'0 0 15px 0'} width={'150px'} onClick={clickHandler}>
                    경고하기
                </S.button>
            </div>
        </div>
    );
};

export default WarnButton;
