import React from 'react';
import { Row, Col } from 'reactstrap';
import * as S from './Footer.style';

const Footer = () => {
    const thisYear = () => {
        const year = new Date().getFullYear();
        return year;
    };
    return (
        <S.footer>
            <Row>
                <Col>
                    <span>김진석</span>&nbsp;&nbsp;<span>|</span>&nbsp;&nbsp;<span>이메일 k0502s@naver.com</span>
                    <p>
                        Copyright &copy; <span>{thisYear()} Jin Seok Kim All rights reserved.</span>
                    </p>
                </Col>
            </Row>
        </S.footer>
    );
};

export default Footer;
