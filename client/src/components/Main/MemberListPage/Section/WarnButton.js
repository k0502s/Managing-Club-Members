import React from 'react';
import { useDispatch } from 'react-redux';
import { MEMBER_WARN_REQUEST } from '../../../../redux/types';
import * as S from '../MemberListPage.style'

const WarnButton = ({ detail }) => {
    const dispatch = useDispatch();

    const clickHandler = () => {
        const body = {
            token: localStorage.getItem('token'),
            warndata: detail._id,
        };
        dispatch({
            type: MEMBER_WARN_REQUEST,
            payload: body,
        });
    };

    return (
        <div>
            <div>
                <S.Memberbtn color={'#e2b046'} margin={'0 0 15px 0'} width={'150px'} onClick={clickHandler}>
                    경고하기
                </S.Memberbtn>
            </div>
        </div>
    );
};

export default WarnButton;
