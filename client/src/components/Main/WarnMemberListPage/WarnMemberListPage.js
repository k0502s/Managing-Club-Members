import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MEMBER_WARNLIST_REQUEST } from '../../../redux/types';
import WarnCardBlock from './Section/WarnCardBlock';
import Pagination from '@material-ui/lab/Pagination';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Row, Col, Button, InputGroup, InputGroupAddon, Input, Label, Table, CardHeader, CardBody } from 'reactstrap';

const WarnMemberList = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);
    const { warnlistDetail, totalPages } = useSelector((state) => state.auth);
    const pageSizes = [3, 6];

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

    useEffect(() => {
        const params = getRequestParams(page, pageSize);
        let warnLists = [];

        //리덕스 User state안에 cart 안에 상품이 들어있는지 확인
        if (user && user.cart)
            if (user.cart.length > 0) {
                user.cart.forEach((item) => {
                    warnLists.push(item.id);
                });
                const body = {
                    warnListsId: warnLists,
                    list: user.cart,
                    page: params.page,
                    size: params.size,
                };

                dispatch({
                    type: MEMBER_WARNLIST_REQUEST,
                    payload: body,
                });
            }
    }, [user, page, pageSize]);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const handlePageSizeChange = (event) => {
        setPageSize(event.target.value);
        setPage(1);
    };

    return (
        <Row style={{ width: '85%', margin: '3rem auto' }}>
            <Col>
                <h1>WARN MEMBER LIST</h1>
                <WarnCardBlock />

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
                    <Pagination className="my-3" color="primary" count={totalPages} page={page} siblingCount={1} boundaryCount={1} shape="rounded" onChange={handlePageChange} />
                </Col>
            </Col>
        </Row>
    );
};

export default WarnMemberList;
