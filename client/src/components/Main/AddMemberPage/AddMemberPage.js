import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Form, Input, CardTitle, CardText, Row, Col, CardHeader, CardBody } from 'reactstrap';
import FileUpload from '../../../utils/FileUpload';
import { Loader } from '../../Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import img from '../../../assets/img/imgbin_photography-logo-photographer-png.png';
import { MEMBER_UPLOADING_REQUEST, CLEAR_ERROR_REQUEST, CLEAR_ERROR_REQUEST_1 } from '../../../redux/types';
import * as S from './AddMemberPage.style';

const Sex = [
    { key: 1, value: '남' },
    { key: 2, value: '여' },
];

const AddMemberPage = () => {
    const dispatch = useDispatch();
    const [form, setValues] = useState({
        name: '',
        camera: '',
        age: '',
        sex: '',
    });

    const [Images, setImages] = useState([]);
    const { user } = useSelector((state) => state.auth);
    const { isLoading } = useSelector((state) => state.member);

    useEffect(() => {
        dispatch({
            type: CLEAR_ERROR_REQUEST,
        });
        dispatch({
            type: CLEAR_ERROR_REQUEST_1,
        });
    }, []);

    const onChange = (e) => {
        setValues({
            ...form,
            [e.target.name]: e.target.value,
        });
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const nameinput = document.myform.name.value;
        const camerainput = document.myform.camera.value;
        const ageinput = document.myform.age.value;
        const sexinput = document.myform.sex.value;
        if (nameinput === '') {
            return alert('이름 정보를 입력해야 합니다.');
        }
        if (camerainput === '') {
            return alert('카메라 기종 정보를 입력해야 합니다.');
        }
        if (ageinput === '') {
            return alert('나이 정보를 입력해야 합니다.');
        }
        if (sexinput === '') {
            return alert('성별 정보를 입력해야 합니다.');
        }
        if (Images.length === 0) {
            return alert('프로필 사진을 입력해야 합니다.');
        }

        const { name, camera, age, sex } = form;

        const body = {
            writer: user._id,
            name: name,
            camera: camera,
            age: age,
            sex: sex,
            images: Images,
        };

        dispatch({
            type: MEMBER_UPLOADING_REQUEST,
            payload: body,
        });
    };
    const updateImages = (newImages) => {
        setImages([...Images, newImages]);
    };

    const removefile = () => {
        setImages([]);
    };

    const Body = (
        <>
            <S.Title>
                <h1>ADD MEMBER</h1>
            </S.Title>
            <Row>
                <Helmet title={`회원 추가`} />
                <Col>
                    <S.AddCard>
                        <CardHeader>
                            <strong>참고 사항</strong>
                        </CardHeader>
                        <CardBody>
                            <CardTitle tag="h5">※ 회원 추가 안내</CardTitle>
                            <br />
                            <br />
                            <CardText>1. 앞으로 동호회에서 활동 예정인 동호회 회원분들의 정보를 추가해주세요.</CardText>
                            <br />
                            <CardText>2. 추가하실 때 회원 분의 이름, 성별, 나이, 보유 카메라, 프로필 사진을 꼭 추가해주세요.</CardText>
                            <br />
                            <CardText>3. 회원분이 동호회에서 탈퇴하거나 경고 누적으로 제명이 되면 회원 리스트 페이지에서 회원 정보를 삭제할 수 있습니다.</CardText>
                            <S.PngImg src={img} />
                        </CardBody>
                    </S.AddCard>
                </Col>
                <Col>
                    <S.AddCard>
                        <CardHeader>
                            <strong>회원 정보 추가</strong>
                        </CardHeader>
                        <CardBody>
                            <S.Profile>
                                {Images.map((image, index) => (
                                    <S.Img key={index} src={`${image}`} />
                                ))}
                                {Images.length === 0 ? <S.PersonIcon /> : ''}
                            </S.Profile>
                            <S.FileUpload>
                                <FileUpload refreshFunction={updateImages} removefile={removefile} />
                            </S.FileUpload>
                            <Form onSubmit={submitHandler} name="myform" data-testid="form">
                                <label>이름</label>
                                <Input type="text" onChange={onChange} placeholder={'이름 정보를 입력해주세요.'} value={form.name} name="name" data-testid="add-name" />
                                <br />
                                <label>카메라 기종</label>
                                <Input type="text" onChange={onChange} placeholder={'카메라 정보를 입력해주세요.'} value={form.camera} name="camera" data-testid="add-camera" />
                                <br />
                                <label>나이</label>
                                <Input type="number" onChange={onChange} placeholder={'나이 정보를 입력해주세요.'} value={form.age} name="age" data-testid="add-age" />
                                <br />
                                <select onChange={onChange} value={form.sex} name="sex" data-testid="add-sex">
                                    <option value="">성별을 선택해주세요</option>
                                    {Sex.map((item) => (
                                        <option key={item.key} value={item.key} data-testid="select-option">
                                            {item.value}
                                        </option>
                                    ))}
                                </select>
                                <S.Addbtn color={'#54C5A0'} type="submit" className="col-md-2 offset-md-10 mt-1" onClick={submitHandler} data-testid="add-submit">
                                    확인
                                </S.Addbtn>
                            </Form>
                        </CardBody>
                    </S.AddCard>
                </Col>
            </Row>
        </>
    );

    return <>{isLoading ? Loader : Body}</>;
};

export default AddMemberPage;
