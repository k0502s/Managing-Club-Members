import React from 'react';
import Dropzone from 'react-dropzone';
import Axios from 'axios';
import * as S from '../components/Main/AddMemberPage/AddMemberPage.style';

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
                    <S.Addbtn color={'#333'} {...getRootProps()}>
                        <input {...getInputProps()} />
                        <S.UploadIcon />
                        프로필 업로드
                    </S.Addbtn>
                    <S.Addbtn color={'#F05232'} onClick={() => props.removefile()}>
                        <S.DeleteIcon />
                        프로필 제거
                    </S.Addbtn>
                </section>
            )}
        </Dropzone>
    );
}

export default FileUpload;
