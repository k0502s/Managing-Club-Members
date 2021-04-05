import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Col, Row } from 'reactstrap';
import Dropzone from 'react-dropzone';
import Axios from 'axios';

function FileUpload(props) {
    const dropHandler = (files) => {
        let formData = new FormData();

        const config = {
            header: { 'content-type': 'multipart/form-data' },
        };
        formData.append('file', files[0]);

        Axios.post('/api/member/image', formData, config).then((response) => {
            if (response.data.success) {
                console.log(response.data);

                props.refreshFunction([response.data.filePath]);
            } else {
                alert('이미지 저장 실패.');
            }
        });
    };

    return (
        <Dropzone onDrop={dropHandler} multiple>
            {({ getRootProps, getInputProps }) => (
                <section>
                    <Button className="mr-2" {...getRootProps()}>
                        <input {...getInputProps()} />
                        프로필 업로드
                    </Button>
                    <Button className="btn-danger" onClick={() => props.removefile()}>
                       프로필 제거
                    </Button>
                </section>
            )}
        </Dropzone>
    );
}

export default FileUpload;
