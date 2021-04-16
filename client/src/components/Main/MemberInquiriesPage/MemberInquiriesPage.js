import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Loader } from '../../Loader/Loader';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import { BsArrowRepeat } from 'react-icons/bs';
import Contact from './Section/Contact';
import MobileCard from './Section/MobileCard';
import * as S from './MemberInquiriesPage.style';
import { MEMBER_INQUIRIES_REQUEST, MEMBER_REMOVE_INQUIRIES_REQUEST, CLEAR_ERROR_REQUEST, CLEAR_ERROR_REQUEST_1 } from '../../../redux/types';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Row, Col, Button, InputGroup, InputGroupAddon, Input, Label, Table, CardHeader, CardBody } from 'reactstrap';

const MemberInquiries = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const pageSizes = [5, 10];
    const { inquiriesdata, totalPages, isLoading } = useSelector((state) => state.member);

    const getRequestParams = (page, pageSize) => {
        let params = {};

        if (page) {
            params.page = page - 1;
        }

        if (pageSize) {
            params.size = pageSize;
        }

        return params;
    };

    const retrieve = () => {
        const params = getRequestParams(page, pageSize);

        dispatch({
            type: MEMBER_INQUIRIES_REQUEST,
            payload: { params },
        });
        dispatch({
            type: CLEAR_ERROR_REQUEST,
        });
        dispatch({
            type: CLEAR_ERROR_REQUEST_1,
        });
    };

    useEffect(retrieve, [page, pageSize]);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const handlePageSizeChange = (event) => {
        setPageSize(event.target.value);
        setPage(1);
    };

    let removeFromInquiries = (id) => {
        dispatch({
            type: MEMBER_REMOVE_INQUIRIES_REQUEST,
            payload: id,
        });
        retrieve();
    };

    const retrieveDB = () => {
        retrieve();
    };

    const Body = (
        <>
            <S.title>
                <h1>MEMBER INQUIRIES LIST</h1>
            </S.title>
            <Row>
                <Helmet title={`문의 사항 리스트`} />
                <Col md={8} sm={4}>
                    <Col md={{ offset: 10 }}>
                        <S.btn onClick={retrieveDB}>
                            <BsArrowRepeat id="icon" /> Reload
                        </S.btn>
                    </Col>
                    <S.card radius={'5px'}>
                        <S.table size="sm">
                            <thead>
                                <tr>
                                    <S.th>회원 이름</S.th>
                                    <S.th>연락 이메일</S.th>
                                    <S.th>문의 내용</S.th>
                                    <S.th>삭제</S.th>
                                </tr>
                            </thead>
                            {inquiriesdata &&
                                inquiriesdata.map((inquiries, index) => (
                                    <tbody key={index}>
                                        <tr>
                                            <S.th width={'10%'} data-testid="inquiries-name">
                                                {inquiries.name}
                                            </S.th>
                                            <S.th width={'15%'} data-testid="inquiries-email">
                                                {inquiries.email}
                                            </S.th>
                                            <S.th width={'25%'} data-testid="inquiries-opinion">
                                                {inquiries.opinion}
                                            </S.th>
                                            <S.th width={'10%'}>
                                                <S.deleteIcon onClick={() => removeFromInquiries(inquiries._id)} data-testid="inquiries-button" />
                                            </S.th>
                                        </tr>
                                    </tbody>
                                ))}
                        </S.table>
                    </S.card>

                    <MobileCard removeFromInquiries={removeFromInquiries} />

                    <Col md={{ offset: 4 }} className="mt-3">
                        <S.span margin={'280px'}>Page: </S.span>
                        <select onChange={handlePageSizeChange} value={pageSize}>
                            {pageSizes.map((size) => (
                                <option key={size} value={size}>
                                    {size}
                                </option>
                            ))}
                        </select>
                    </Col>
                    <Col>
                        <Pagination variant="outlined" count={totalPages} page={page} siblingCount={1} boundaryCount={1} shape="rounded" onChange={handlePageChange} />
                    </Col>
                </Col>
                <Col sm={4}>
                    <S.card>
                        <CardHeader>
                            <strong>이메일 전송</strong>
                        </CardHeader>
                        <S.card body>
                            <CardText>※ 회원 문의 사항 관리 안내</CardText>
                            <CardText>1. 동호회 사이트의 챗봇 시스템을 통해 접수한 회원분들의 문의 사항 데이터를 받아 옵니다.</CardText>
                            <br />
                            <CardText>2. 문의 사항에 대한 답은 아래 이메일 발송 기능을 통해 바로 답장 이메일을 보낼 수 있습니다.</CardText>
                        </S.card>
                        <CardBody>
                            <Contact />
                        </CardBody>
                    </S.card>
                </Col>
            </Row>
        </>
    );

    return <>{isLoading ? Loader : Body}</>;
};

export default MemberInquiries;
