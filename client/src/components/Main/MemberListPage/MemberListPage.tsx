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
import { History } from 'history';
import { Button, Col, Row, Input, InputGroup, InputGroupAddon, CardHeader } from 'reactstrap';
import { MEMBER_DELETE_REQUEST, MEMBER_LIST_REQUEST, CLEAR_ERROR_REQUEST, CLEAR_ERROR_REQUEST_1 } from '../../../redux/types';
import * as S from './MemberListPage.style';

type MemberListtype = {
    history: History;
};
type paramstype = {
    name: string;
    page: number;
    size: string | number;
};
type MemberDatatype = {
    name: string;
    _id: string;
    sex: number;
    age: number;
    camera: string;
    images: string;
};
type State = {
    member: {
        memberlist: { name: string; _id: string; images: string; sex: number; map: any };
        totalPages: number;
        isLoading: boolean;
        deletesuccess: boolean;
    };
};

type Sextype = {
    1: string;
    2: string;
    [key: number]: string;
}

const sex: Sextype = {
    1: '남',
    2: '여',
};

const MemberList: React.FC<MemberListtype> = (props) => {
    const dispatch = useDispatch();
    const [currentMemberData, setCurrentMemberData] = useState<MemberDatatype | null>(null);
    const [searchName, setSearchName] = useState('');
    const [selectedIndex, setSelectedIndex] = useState<React.Key | number>(0);

    const handleListItemClick = (e: React.MouseEvent<HTMLDivElement>, index: React.Key) => {
        setSelectedIndex(index);
    };

    ////페이징/////

    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState<number | string>(3);
    const { memberlist, totalPages, isLoading, deletesuccess } = useSelector((state: State) => state.member);
    const pageSizes = [3, 6];

    const getRequestParams = (searchTitle: string, page: number, pageSize: number | string) => {
        let params: any = {};

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

    const handlePageChange = (e: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
    };

    const handlePageSizeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setPageSize(e.target.value);
        setPage(1);
    };

    /////리스트 목록//////

    const onChangeSearchName = (e: React.ChangeEvent<HTMLInputElement>) => {
        const searchName = e.target.value;
        setSearchName(searchName);
    };

    const Enter = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            retrieveMemberDatas();
        }
    };

    const refreshList = () => {
        retrieveMemberDatas();
        setCurrentMemberData(null);
    };

    const setActiveMemberData = (memberdata: MemberDatatype, index: React.Key) => {
        setCurrentMemberData(memberdata);
        setSelectedIndex(index);
    };

    const deleteMemberData = () => {
        if (window.confirm('해당 회원을 제명하시겠습니까?')) {
            if (currentMemberData) {
                dispatch({
                    type: MEMBER_DELETE_REQUEST,
                    payload: currentMemberData._id,
                });
                
            }
            if (deletesuccess) {
                alert('제명 완료.');
            }
            setTimeout(() => refreshList(), 500)
            
        } else {
            alert('취소 완료.');
        }
    };

    const deleteMemberData2 = (id: string) => {
        if (window.confirm('해당 회원을 제명하시겠습니까?')) {
            if (id) {
                dispatch({
                    type: MEMBER_DELETE_REQUEST,
                    payload: id,
                });
            }
            if (deletesuccess) {
                alert('제명 완료.');
            }
        } else {
            alert('취소 완료.');
        }
        setTimeout(() => refreshList(), 500)
    };

    const AddMember = () => {
        props.history.push('/addmember');
    };

    const Body = (
        <>
            <S.Title>
                <h1>MEMBER LIST</h1>
            </S.Title>
            <hr />
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
                                memberlist.map((memberlist: MemberDatatype, index: React.Key) => (
                                    <S.MemberList onClick={() => setActiveMemberData(memberlist, index)} key={index}>
                                        <ListItem button selected={selectedIndex === index} onClick={(e) => handleListItemClick(e, index)}>
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
