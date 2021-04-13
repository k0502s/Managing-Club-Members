import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Label, Card, CardTitle, CardText, Row, Col, CardHeader, CardBody } from 'reactstrap';
import FileUpload from '../../../utils/FileUpload';
import { useDispatch, useSelector } from 'react-redux';
import { MEMBER_UPLOADING_REQUEST } from '../../../redux/types';
import * as S from './AddMemberPage.style';
import img from '../../../assets/img/imgbin_photography-logo-photographer-png.png';

const Sex = [
    { key: 1, value: '남' },
    { key: 2, value: '여' },
];

const AddMemberPage = (props) => {
    const dispatch = useDispatch();
    const [form, setValues] = useState({
        name: '',
        camera: '',
        age: '',
        sex: '',
    });

    const [Images, setImages] = useState([]);
    const { user } = useSelector((state) => state.auth);

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

    return (
        <>
            {/* <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <h2>회원 추가</h2>
            </div> */}
            <Row>
                <Col>
                    <Card>
                        <CardHeader>참고 사항</CardHeader>
                        <S.card>
                            <CardTitle tag="h5">※ 회원 추가 안내</CardTitle>
                            <br />
                            <br />
                            <CardText>1. 앞으로 동호회에서 활동 예정인 동호회 회원분들의 정보를 추가해주세요.</CardText>
                            <br />
                            <CardText>2. 추가하실 때 회원 분의 이름, 성별, 나이, 보유 카메라, 프로필 사진을 꼭 추가해주세요.</CardText>
                            <br />
                            <CardText>3. 회원분이 동호회에서 탈퇴하거나 경고 누적으로 제명이 되면 회원 리스트 페이지에서 회원 정보를 삭제할 수 있습니다.</CardText>
                            <S.pngImg src={img} />
                        </S.card>
                    </Card>
                </Col>
                <Col>
                    <Card>
                        <CardHeader>회원 정보 추가</CardHeader>
                        <S.card>
                            <S.Profile>
                                {Images.map((image, index) => (
                                    <S.Img key={index} src={`${image}`} />
                                ))}
                                {Images.length === 0 ? <S.PersonIcon/> : ''}
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
                                <S.button color={'#54C5A0'} type="submit" className="col-md-2 offset-md-10 mt-1" onClick={submitHandler} data-testid="add-submit">
                                    확인
                                </S.button>
                            </Form>
                        </S.card>
                    </Card>
                </Col>
            </Row>
        </>
    );
};

export default AddMemberPage;
