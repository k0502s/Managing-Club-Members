import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useSelector, useDispatch } from 'react-redux';
import MemberCard from './Section/MemberCard';
import LocationDisplay from '../../../utils/LocationDisplay';
import { BsFillTrashFill } from 'react-icons/bs';
import Pagination from '@material-ui/lab/Pagination';
import { Loader } from '../../Loader/Loader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import IconButton from '@material-ui/core/IconButton';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import { Button, Col, Row, Input, InputGroup, InputGroupAddon, CardHeader } from 'reactstrap';
import { MEMBER_DELETE_REQUEST, MEMBER_LIST_REQUEST, CLEAR_ERROR_REQUEST, CLEAR_ERROR_REQUEST_1 } from '../../../redux/types';
import * as S from './MemberListPage.style';

const sex = {
    1: '남',
    2: '여',
};

const MemberList = (props) => {
    const dispatch = useDispatch();
    const [currentMemberData, setCurrentMemberData] = useState(null);
    const [searchName, setSearchName] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    ////페이징/////

    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(3);
    const { memberlist, totalPages, isLoading } = useSelector((state) => state.member);
    const pageSizes = [3, 6];

    const getRequestParams = (searchTitle, page, pageSize) => {
        let params = {};

        if (searchTitle) {
            params.name = searchName;
        }

        if (page) {
            params.page = page - 1;
        }

        if (pageSize) {
            params.size = pageSize;
        }

        return params;
    };

    const retrieveMemberDatas = () => {
        const params = getRequestParams(searchName, page, pageSize);

        dispatch({
            type: MEMBER_LIST_REQUEST,
            payload: { params },
        });
        dispatch({
            type: CLEAR_ERROR_REQUEST,
        });
        dispatch({
            type: CLEAR_ERROR_REQUEST_1,
        });
    };

    useEffect(retrieveMemberDatas, [page, pageSize]);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const handlePageSizeChange = (event) => {
        setPageSize(event.target.value);
        setPage(1);
    };

    /////리스트 목록//////

    const onChangeSearchName = (e) => {
        const searchName = e.target.value;
        setSearchName(searchName);
    };

    const Enter = (e) => {
        if (e.key === 'Enter') {
            retrieveMemberDatas();
        }
    };

    const refreshList = () => {
        retrieveMemberDatas();
        setCurrentMemberData(null);
        setSelectedIndex(-1);
    };

    const refreshList2 = () => {
        retrieveMemberDatas();
        setCurrentMemberData(null);
        setSelectedIndex(0);
    };

    const setActiveMemberData = (memberdata, index) => {
        setCurrentMemberData(memberdata);
        setSelectedIndex(index);
    };

    const deleteMemberData = () => {
        if (currentMemberData) {
            dispatch({
                type: MEMBER_DELETE_REQUEST,
                payload: currentMemberData._id,
            });
            refreshList2();
        } else {
            refreshList();
        }
    };

    const deleteMemberData2 = (id) => {
        if (id) {
            dispatch({
                type: MEMBER_DELETE_REQUEST,
                payload: id,
            });
            refreshList2();
        } else {
            refreshList();
        }
    };

    const AddMember = () => {
        props.history.push('/addmember');
    };

    const Body = (
        <>
            <S.Title>
                <h1>MEMBER LIST</h1>
            </S.Title>
            <Row>
                <Helmet title={`회원 리스트`} />
                <Col md={6}>
                    <Col>
                        <S.MemberCard>
                            <CardHeader>
                                <InputGroup>
                                    <Input
                                        type="text"
                                        id="form-control"
                                        placeholder="회원 이름을 입력해주세요."
                                        value={searchName}
                                        onChange={onChangeSearchName}
                                        onKeyPress={Enter}
                                        data-testid="list-search"
                                    />
                                    <InputGroupAddon addonType="prepend">
                                        <Button onClick={retrieveMemberDatas}>검색</Button>
                                    </InputGroupAddon>
                                </InputGroup>
                            </CardHeader>
                            {memberlist &&
                                memberlist.map((memberlist, index) => (
                                    <S.MemberList onClick={() => setActiveMemberData(memberlist, index)} key={index}>
                                        <ListItem button selected={selectedIndex === index} onClick={(event) => handleListItemClick(event, index)}>
                                            <ListItemAvatar>
                                                <Avatar>
                                                    <S.Img src={memberlist.images} />
                                                </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText primary={memberlist.name} secondary={sex[memberlist.sex]} data-testid="list-data" />
                                            <ListItemSecondaryAction onClick={() => deleteMemberData2(memberlist._id)}>
                                                <IconButton edge="end" aria-label="delete">
                                                    <BsFillTrashFill />
                                                </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>
                                        <Divider variant="inset" />
                                    </S.MemberList>
                                ))}
                            <S.Memberbtn color={'#5E5EC1'} margin={'15px'} onClick={AddMember}>
                                회원 추가
                            </S.Memberbtn>
                        </S.MemberCard>
                    </Col>
                    <Col className="mt-3">
                        <S.Span margin={'360px'}>Page: </S.Span>
                        <select onChange={handlePageSizeChange} value={pageSize}>
                            {pageSizes.map((size) => (
                                <option key={size} value={size}>
                                    {size}
                                </option>
                            ))}
                        </select>
                        <Pagination variant="outlined" count={totalPages} page={page} siblingCount={1} boundaryCount={1} shape="rounded" onChange={handlePageChange} data-testid="list-page" />
                    </Col>
                </Col>
                <Col>
                    <MemberCard currentMemberData={currentMemberData} deleteMemberData={deleteMemberData} />
                </Col>
                <LocationDisplay />
            </Row>
        </>
    );

    return <>{isLoading ? Loader : Body}</>;
};

export default MemberList;
