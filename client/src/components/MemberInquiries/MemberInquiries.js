import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import Contact from './Section/Contact'
import { MEMBER_INQUIRIES_REQUEST, MEMBER_REMOVE_INQUIRIES_REQUEST } from '../../redux/types';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Row, Col, Button, InputGroup, InputGroupAddon, Input, Label, Table } from 'reactstrap';

const MemberInquiries = () => {
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);
    const pageSizes = [3, 6];
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

    const retrieveTutorials = () => {
        const params = getRequestParams(page, pageSize);

        dispatch({
            type: MEMBER_INQUIRIES_REQUEST,
            payload: { params },
        });
    };

    useEffect(retrieveTutorials, [page, pageSize]);

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
        retrieveTutorials();
    };

    return (
        <div>
            회원 문의
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
                                <th scope="row" style={{ width: '10%', fontWeight: 'bold', textAlign: 'center' }}>
                                    {inquiries.name}
                                </th>
                                <td style={{ width: '15%', color: 'black', fontWeight: 'bold', fontSize: 'large', textAlign: 'center' }}>{inquiries.email}</td>
                                <td style={{ width: '25%' }}>{inquiries.opinion}</td>
                                <td style={{ width: '10%', textAlign: 'center' }}>
                                    <Button onClick={() => removeFromInquiries(inquiries._id)}>삭제</Button>
                                </td>
                            </tr>
                        </tbody>
                    ))}
            </Table>
            <div className="mt-3">
                <h7 style={{ marginLeft: 250 }}>Page: </h7>
                <select onChange={handlePageSizeChange} value={pageSize}>
                    {pageSizes.map((size) => (
                        <option key={size} value={size}>
                            {size}
                        </option>
                    ))}
                </select>
                <Pagination className="my-3" color="primary" count={totalPages} page={page} siblingCount={1} boundaryCount={1} shape="rounded" onChange={handlePageChange} />
            </div>
            <Contact />
        </div>
    );
};

export default MemberInquiries;
