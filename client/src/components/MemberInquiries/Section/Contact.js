import React from 'react';
import { useForm } from 'react-hook-form';
import { Card, CardTitle, CardText, CardImg, CardImgOverlay, Row, Col, Button, InputGroup, InputGroupAddon, Input, Label, Form } from 'reactstrap';

const Contact = () => {
    const { register, handleSubmit, errors } = useForm();

    const sendFeedback = (serviceID, templateId, variables) => {
        window.emailjs
            .send(serviceID, templateId, variables)
            .then((res) => {
                console.log('이메일 보내기 성공');
            })
            .catch((err) => console.error('이메일 보내기에 오류가 있습니다.', err));
    };

    const onSubmit = (data, r) => {
        alert('이메일을 전송하는데 성공하였습니다!');
        const templateId = 'template_r113e7d';
        const serviceID = 'Project_1';
        sendFeedback(serviceID, templateId, { from_name: data.name, message_html: data.comment, reply_to: data.email });
        r.target.reset();
    };

    return (
        <div className="ContactForm">
            <Form onSubmit={handleSubmit(onSubmit)}>
            <Label for="name">이름</Label>
                <Input
                    placeholder="회원 이름을 입력해주세요."
                    name="name"
                    ref={register({
                        required: '이메일을 받을 회원 이름을 입력해주세요.',
                        maxLength: {
                            value: 20,
                            message: '이름은 20글자 미만으로 입력해주세요.',
                        },
                    })}
                />
                <br />
                {errors.name && errors.name.message}
                <br />
                <Label for="email">이메일</Label>
                <Input
                    placeholder="연락 이메일을 입력해주세요."
                    name="email"
                    ref={register({
                        required: '이메일을 확인해주세요.',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: '이메일이 유효하지 않습니다.',
                        },
                    })}
                />
                <br />
                {errors.email && errors.email.message}
                <br />
                <Label for="content">내용</Label>
                <Input
                    type="textarea"
                    placeholder="답글을 입력해주세요."
                    name="comment"
                    ref={register({
                        required: true,
                    })}
                />
                <br />
                {errors.comment && '이메일에 적을 메세지를 입력해주세요.'}
                <br />

                <Input type="submit"/>
            </Form>
        </div>
    );
};

export default Contact;
