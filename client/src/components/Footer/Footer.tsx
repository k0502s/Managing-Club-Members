import React from 'react';
import { Row, Col } from 'reactstrap';
import * as S from './Footer.style';

const Footer = () => {
    const thisYear = () => {
        const year = new Date().getFullYear();
        return year;
    };
    return (
        <S.FooterWrap>
            <hr />
            <Col>
                <span>김진석</span>&nbsp;&nbsp;<span>|</span>&nbsp;&nbsp;<span>Email k0502s@naver.com</span>&nbsp;&nbsp;<span>KakaoID k0502s</span>
                <p>
                    Copyright &copy; <span>{thisYear()} Jin Seok Kim All rights reserved.</span>
                </p>
            </Col>
        </S.FooterWrap>
    );
};

export default Footer;