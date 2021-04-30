import React, { useState } from 'react';
import { Input, Label, Form } from 'reactstrap';

const Contact = () => {
    const [form, setValues] = useState({
        name: '',
        comment: '',
        email: '',
    });
    const onChange = (e) => {
        setValues({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    const sendFeedback = (serviceID, templateId, variables) => {
        window.emailjs
            .send(serviceID, templateId, variables)
            .then((res) => {
                console.log('이메일 보내기 성공');
            })
            .catch((err) => console.error('이메일 보내기에 오류가 있습니다.', err));
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const nameinput = document.myform.name.value;
        const emailinput = document.myform.email.value;
        const commentinput = document.myform.comment.value;

        if (nameinput === '') {
            return alert('이름 정보를 입력해야 합니다.');
        }
        if (emailinput === '') {
            return alert('이메일 주소 정보를 입력해야 합니다.');
        }
        if (commentinput === '') {
            return alert('메일 내용을 입력해야 합니다.');
        }
        const { name, comment, email } = form;
        alert('이메일을 전송하는데 성공하였습니다!');
        const templateId = 'template_r113e7d';
        const serviceID = 'Project_1';
        sendFeedback(serviceID, templateId, { from_name: name, message_html: comment, reply_to: email });
        setValues({ name: '', comment: '', email: '' });
    };

    return (
        <div className="ContactForm">
            <Form onSubmit={onSubmit} name="myform">
                <Label for="name">이름</Label>
                <Input placeholder="회원 이름을 입력해주세요." name="name" type="text" onChange={onChange} value={form.name} />
                <br />
                <br />
                <Label for="email">이메일</Label>
                <Input placeholder="연락 이메일을 입력해주세요." name="email" type="text" onChange={onChange} value={form.email} />
                <br />
                <br />
                <Label for="content">내용</Label>
                <Input type="textarea" placeholder="답글을 입력해주세요." name="comment" onChange={onChange} value={form.comment} />
                <br />
                <br />

                <Input type="submit" />
            </Form>
        </div>
    );
};

export default Contact;
