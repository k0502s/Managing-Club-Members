import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Form, Input, Card, Col, CardHeader } from 'reactstrap';
import FileUpload from '../../../utils/FileUpload';
import { useDispatch, useSelector } from 'react-redux';
import { MEMBER_SINGLELIST_REQUEST, MEMBER_UPDATELIST_REQUEST, CLEAR_ERROR_REQUEST, CLEAR_ERROR_REQUEST_1 } from '../../../redux/types';
import * as S from './EditMemberePage.style';

const SexInfo = [
    { key: 1, value: '남' },
    { key: 2, value: '여' },
];
type State = {
    auth: {
        user: {
            _id: string;
        };
    };
    member: {
        singlememberlist: {
            _id: string;
            name: string;
            camera: string;
            age: string;
            sex: number;
        };
        singlememberimage: [images: string[]];
    };
};
type Matchstype = {
    match: { params: { id: string } };
};

const EditMemberPage: React.FC<Matchstype> = ({ match }) => {
    const [form, setValues] = useState({
        name: '',
        camera: '',
        age: '',
    });
    const [Sex, setSex] = useState({
        sex: 0,
    });
    const [Images, setImages] = useState<any>([]);
    const dispatch = useDispatch();

    const { user } = useSelector((state: State) => state.auth);
    const { singlememberlist, singlememberimage } = useSelector((state: State) => state.member);

    const getMemberList = (id: string) => {
        dispatch({
            type: MEMBER_SINGLELIST_REQUEST,
            payload: id,
        });
    };

    useEffect(() => {
        getMemberList(match.params.id);
        dispatch({
            type: CLEAR_ERROR_REQUEST,
        });
        dispatch({
            type: CLEAR_ERROR_REQUEST_1,
        });
    }, [match.params.id]);

    useEffect(() => {
        setValues({
            name: singlememberlist.name,
            camera: singlememberlist.camera,
            age: singlememberlist.age,
        });
        setSex({
            ...Sex,
            sex: singlememberlist.sex
        });
        setImages([...singlememberimage]);
    }, [singlememberlist.name, singlememberlist.camera, singlememberlist.age, singlememberlist.sex]);

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    const onChangeSex = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSex({
            ...Sex,
            [e.target.name]: e.target.value,
        });
    };

    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.name === '') {
            return alert('이름 정보를 입력해야 합니다.');
        }
        if (form.camera === '') {
            return alert('카메라 기종 정보를 입력해야 합니다.');
        }
        if (form.age === '') {
            return alert('나이 정보를 입력해야 합니다.');
        }
        if (Sex.sex === 0) {
            return alert('성별 정보를 입력해야 합니다.');
        }
        if (Images.length === 0) {
            return alert('프로필 사진을 입력해야 합니다.');
        }

        const { name, camera, age } = form;
        const { sex } = Sex;

        const body = {
            id: singlememberlist._id,
            writer: user._id,
            name: name,
            camera: camera,
            age: age,
            sex: sex,
            images: Images,
        };

        dispatch({
            type: MEMBER_UPDATELIST_REQUEST,
            payload: body,
        });
    };
    const updateImages = (newImages: string[]) => {
        setImages([...Images, newImages]);
    };

    const removefile = () => {
        setImages([]);
    };

    return (
        <>
            <S.Title>
                <h1>EDIT MEMBER</h1>
            </S.Title>
            <hr />
            <Col md={{ size: 6, offset: 3 }} sm={12} xs={12}>
                <Helmet title={`회원 정보 수정`} />
                <Card>
                    <CardHeader>
                        <strong>회원 정보 수정</strong>
                    </CardHeader>
                    <S.EditCard>
                        <S.Profile>
                            {Images.map((image: string, index: React.Key) => (
                                <S.Img key={index} src={`${image}`} data-testid="edit-image" />
                            ))}
                            {Images.length === 0 ? <S.PersonIcon /> : ''}
                        </S.Profile>
                        <S.FileUpload>
                            <FileUpload refreshFunction={updateImages} removefile={removefile} />
                        </S.FileUpload>
                        <Form onSubmit={submitHandler} name="myform" data-testid="form">
                            <label>이름</label>
                            <Input type="text" onChange={onChange} placeholder={'빈 칸에 정보를 입력해주세요.'} name="name" defaultValue={singlememberlist.name} data-testid="edit-name" />
                            <br />
                            <label>카메라 기종</label>
                            <Input type="text" onChange={onChange} placeholder={'빈 칸에 정보를 입력해주세요.'} name="camera" defaultValue={singlememberlist.camera} data-testid="edit-camera" />
                            <br />
                            <label>나이</label>
                            <Input type="number" onChange={onChange} placeholder={'빈 칸에 정보를 입력해주세요.'} name="age" defaultValue={singlememberlist.age} data-testid="edit-age" />
                            <br />
                            <select onChange={onChangeSex} defaultValue={singlememberlist.sex} name="sex" data-testid="edit-sex">
                                <option value="">성별을 선택해주세요</option>
                                {SexInfo.map((item) => (
                                    <option key={item.key} value={item.key} data-testid="select-option">
                                        {item.value}
                                    </option>
                                ))}
                            </select>
                            <S.Editbtn color={'#3DC89B'} className="col-md-2 offset-md-10 mt-1" onClick={submitHandler} data-testid="edit-submit">
                                확인
                            </S.Editbtn>
                        </Form>
                    </S.EditCard>
                </Card>
            </Col>
        </>
    );
};

export default EditMemberPage;
