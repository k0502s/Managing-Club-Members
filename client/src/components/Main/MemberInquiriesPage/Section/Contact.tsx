import React, { useState } from 'react';
import { Input, Label, Form } from 'reactstrap';

declare global {
    interface Window {
        emailjs: any;
    }
}

const Contact = () => {
    const [form, setValues] = useState({
        name: '',
        comment: '',
        email: '',
    });
    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValues({
            ...form,
            [e.target.name]: e.target.value,
        });
    };
    const sendFeedback = (serviceID: string, templateId: string, variables: any) => {
        window.emailjs
            .send(serviceID, templateId, variables)
            .then(() => {
                console.log('이메일 보내기 성공');
            })
            .catch((err: Error) => console.error('이메일 보내기에 오류가 있습니다.', err));
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (form.name === '') {
            return alert('이름 정보를 입력해야 합니다.');
        }
        if (form.email === '') {
            return alert('이메일 주소 정보를 입력해야 합니다.');
        }
        if (form.comment === '') {
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
