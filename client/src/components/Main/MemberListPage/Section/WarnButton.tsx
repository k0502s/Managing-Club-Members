import React from 'react';
import { useDispatch } from 'react-redux';
import { MEMBER_WARN_REQUEST } from '../../../../redux/types';
import * as S from '../MemberListPage.style';

type WarnButtontype = {
    detail: { _id: string };
};

const WarnButton: React.FC<WarnButtontype> = ({ detail }) => {
    const dispatch = useDispatch();

    const clickHandler = () => {
        const body = {
            token: localStorage.getItem('token'),
            warndata: detail._id,
        };
        if (window.confirm('해당 회원을 경고하시겠습니까?')) {
            dispatch({
                type: MEMBER_WARN_REQUEST,
                payload: body,
            });
            alert('경고 완료.')
        } else {
            alert('경고 취소')
        }
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
