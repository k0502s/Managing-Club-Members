import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Label, Card, CardTitle, CardText, Row, Col, CardHeader, CardBody } from 'reactstrap';
import FileUpload from '../utils/FileUpload';
import { useDispatch, useSelector } from 'react-redux';
import { MEMBER_SINGLELIST_REQUEST, MEMBER_UPDATELIST_REQUEST } from '../../redux/types';

const Sex = [
    { key: 1, value: '남' },
    { key: 2, value: '여' },
];

const EditMember = (props) => {
    const [form, setValues] = useState({
        name: '',
        camera: '',
        age: '',
        sex: '',
    });
    const [Images, setImages] = useState([]);
    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.auth);
    const { singlememberlist, singlememberimage } = useSelector((state) => state.member);

    const getMemberList = (id) => {
        dispatch({
            type: MEMBER_SINGLELIST_REQUEST,
            payload: id,
        });
    };

    useEffect(() => {
        getMemberList(props.match.params.id);
    }, [props.match.params.id]);

    useEffect(() => {
        setValues({
            name: singlememberlist.name,
            camera: singlememberlist.camera,
            age: singlememberlist.age,
        });
        setImages([...singlememberimage]);
    }, [singlememberlist.name, singlememberlist.camera, singlememberlist.age]);

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
        if (!Images) {
            return alert('프로필 사진을 입력해야 합니다.');
        }

        const { name, camera, age, sex } = form;

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
    const updateImages = (newImages) => {
        setImages([...Images, newImages]);
    };

    const removefile = () => {
        setImages([]);
    };

    return (
        <div style={{ maxWidth: '700px', margin: '2rem auto' }}>
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <h2>회원 정보 수정</h2>
            </div>
            <FileUpload refreshFunction={updateImages} removefile={removefile} />
            <Col md={{ offset: 4 }} style={{ display: 'flex', width: '300px', height: '240px', borderRadius:'55%', border: '1px solid lightgray'}}>
                {Images.map((image, index) => (
                    <img key={index} style={{ minWidth: '300px', width: '300px', height: '240px',borderRadius:'55%', border: '1px solid lightgray'}} src={`${image}`} />
                ))}
            </Col>
            <Form onSubmit={submitHandler} name="myform">
                <label>이름</label>
                <Input onChange={onChange} placeholder={'빈 칸에 정보를 입력해주세요.'} name="name" defaultValue={singlememberlist.name} />
                <br />
                <label>카메라 기종</label>
                <Input onChange={onChange} placeholder={'빈 칸에 정보를 입력해주세요.'} name="camera" defaultValue={singlememberlist.camera} />
                <br />
                <label>나이</label>
                <Input type="number" onChange={onChange} placeholder={'빈 칸에 정보를 입력해주세요.'} name="age" defaultValue={singlememberlist.age} />
                <br />
                <select onChange={onChange} value={form.sex} name="sex">
                    <option value="">성별을 선택해주세요</option>
                    {Sex.map((item) => (
                        <option key={item.key} value={item.key}>
                            {item.value}
                        </option>
                    ))}
                </select>
                <Button className="col-md-2 offset-md-10" onClick={submitHandler}>
                    확인
                </Button>
            </Form>
        </div>
    );
};

export default EditMember;
