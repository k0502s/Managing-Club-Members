import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';
import Contact from './Section/Contact';
import { MEMBER_INQUIRIES_REQUEST, MEMBER_REMOVE_INQUIRIES_REQUEST, CLEAR_ERROR_REQUEST, CLEAR_ERROR_REQUEST_1 } from '../../../redux/types';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Row, Col, Button, InputGroup, InputGroupAddon, Input, Label, Table, CardHeader, CardBody } from 'reactstrap';

const MemberInquiries = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(5);
    const pageSizes = [5, 10];
    const { inquiriesdata, totalPages } = useSelector((state) => state.member);

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

    return (
        <Row>
            <Helmet title={`문의 사항 리스트`} />
            <Col md={8} sm={4}>
                <h2 style={{ textAlign: 'center' }}>회원 문의 리스트</h2>
                <Col md={{ offset: 10 }}>
                    <Button onClick={retrieveDB} id='btn-reload'>
                        <FontAwesomeIcon id="icon" icon={faRedo} /> Reload
                    </Button>
                </Col>
                <Table>
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'center' }}>회원 이름</th>
                            <th style={{ textAlign: 'center' }}>연락 이메일</th>
                            <th style={{ textAlign: 'center' }}>문의 내용</th>
                            <th style={{ textAlign: 'center' }}>삭제</th>
                        </tr>
                    </thead>
                    {inquiriesdata &&
                        inquiriesdata.map((inquiries, index) => (
                            <tbody key={index}>
                                <tr>
                                    <th style={{ width: '10%', fontWeight: 'bold', textAlign: 'center' }} data-testid="inquiries-name">{inquiries.name}</th>
                                    <td style={{ width: '15%', color: 'black', fontWeight: 'bold', fontSize: 'large', textAlign: 'center' }} data-testid="inquiries-email">{inquiries.email}</td>
                                    <td style={{ width: '25%' }} data-testid="inquiries-opinion">{inquiries.opinion}</td>
                                    <td style={{ width: '10%', textAlign: 'center' }}>
                                        <Button onClick={() => removeFromInquiries(inquiries._id)} data-testid="inquiries-button">삭제</Button>
                                    </td>
                                </tr>
                            </tbody>
                        ))}
                </Table>
                <Col md={{ offset: 4 }} className="mt-3">
                    <h7 style={{ marginLeft: 250 }}>Page: </h7>
                    <select onChange={handlePageSizeChange} value={pageSize}>
                        {pageSizes.map((size) => (
                            <option key={size} value={size}>
                                {size}
                            </option>
                        ))}
                    </select>
                </Col>
                <Col md={{ offset: 5 }} xs={{ offset: 4 }}>
                    <Pagination className="my-3" color="primary" count={totalPages} page={page} siblingCount={1} boundaryCount={1} shape="rounded" onChange={handlePageChange}/>
                </Col>
            </Col>
            <Col sm={4}>
                <Card>
                    <CardHeader>
                        <strong>이메일 전송</strong>
                    </CardHeader>
                    <Card body>
                        <CardText>※ 문의 사항에 대한 답을 연락 이메일로 보낼 수 있습니다.</CardText>
                    </Card>
                    <CardBody>
                        <Contact />
                    </CardBody>
                </Card>
            </Col>
        </Row>
    );
};

export default MemberInquiries;
