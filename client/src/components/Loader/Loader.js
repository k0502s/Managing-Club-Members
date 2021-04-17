import React, { Fragment } from 'react';
import { Row } from 'reactstrap';
import L from 'react-loader-spinner';

export const Loader = (
    <Fragment>
        <Row className="d-flex justify-content-center m-5">
            <L type="ThreeDots" color=" #f4fcfb" height={'100px'} width={'100px'} timeout={3000} />
        </Row>
    </Fragment>
);
