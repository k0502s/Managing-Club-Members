import React from 'react';
import L from 'react-loader-spinner';
import * as S from './Loader.style'

export const Loader = (
    <>
        <S.LoaderWrap>
            <L type="ThreeDots" color="#f4fcfb" height={'100px'} width={'100px'} timeout={3000} />
        </S.LoaderWrap>
    </>
);
