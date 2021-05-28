import React from 'react';
import { Link } from 'react-router-dom';
import WarnButton from './WarnButton';
import profileImg from '../../../../assets/img/Profile.png';
import { Col, Row, CardHeader, CardBody, CardTitle, CardImg, Label } from 'reactstrap';
import * as S from '../MemberListPage.style';

type Sextype = {
    1: string;
    2: string;
    [key: number]: string;
}

type MemberCardtype = {
    currentMemberData: {
        name: string;
        _id: string;
        sex: number;
        age: number;
        camera: string;
        images: string;
    } | null;
    deleteMemberData: () => void;
};

const sex: Sextype = {
    1: '남',
    2: '여',
};

const MemberCard: React.FC<MemberCardtype> = ({ currentMemberData, deleteMemberData }) => {
    const renderImage = (images: string) => {
        if (images.length > 0) {
            let image = images[0];
            return `${image}`;
        }
    };
    return (
        <>
            {currentMemberData ? (
                <>
                    <S.MemberCard margin={'30px'}>
                        <CardHeader>
                            <strong>회원 정보</strong>
                        </CardHeader>
                        <CardImg top width="100%" src={renderImage(currentMemberData.images)} alt="Card image cap" data-testid="member-image" />
                        <CardBody>
                            <Row>
                                <Col md={7}>
                                    <CardTitle tag="h5" data-testid="member-name">
                                        {' '}
                                        <Label>
                                            <strong>이름:</strong>
                                        </Label>{' '}
                                        {currentMemberData.name}
                                    </CardTitle>
                                    <CardTitle tag="h5" data-testid="member-camera">
                                        {' '}
                                        <Label>
                                            <strong>카메라 기종:</strong>
                                        </Label>{' '}
                                        {currentMemberData.camera}
                                    </CardTitle>
                                    <CardTitle tag="h5" data-testid="member-age">
                                        {' '}
                                        <Label>
                                            <strong>나이 :</strong>
                                        </Label>{' '}
                                        {currentMemberData.age}
                                    </CardTitle>
                                    <CardTitle tag="h5" data-testid="member-sex">
                                        {' '}
                                        <Label>
                                            <strong>성별 :</strong>
                                        </Label>{' '}
                                        {sex[currentMemberData.sex]}
                                    </CardTitle>
                                </Col>
                                <Col md={5}>
                                    <Link to={'/edit/' + currentMemberData._id} data-testid="member-edit">
                                        <S.Memberbtn color={'#8bc34a'} margin={'16px 0 15px 0'} width={'150px'}>
                                            수정하기
                                        </S.Memberbtn>
                                    </Link>
                                    <WarnButton detail={currentMemberData} />
                                    <S.Memberbtn color={'#F05232'} margin={'0 0 15px 0'} width={'150px'} onClick={deleteMemberData}>
                                        제명하기
                                    </S.Memberbtn>
                                </Col>
                            </Row>
                        </CardBody>
                    </S.MemberCard>
                </>
            ) : (
                <>
                    <S.MemberCard margin={'30px'}>
                        <CardHeader>
                            {' '}
                            <strong>옆에 있는 회원 리스트를 클릭해주세요!</strong>
                        </CardHeader>
                        <S.MemberCardImg top src={profileImg} alt="Card image cap" />
                        <CardBody>
                            <Row>
                                <Col md={7}>
                                    <CardTitle tag="h5">
                                        {' '}
                                        <Label>
                                            <strong>이름:</strong>
                                        </Label>{' '}
                                    </CardTitle>
                                    <CardTitle tag="h5">
                                        {' '}
                                        <Label>
                                            <strong>카메라 기종:</strong>
                                        </Label>{' '}
                                    </CardTitle>
                                    <CardTitle tag="h5">
                                        {' '}
                                        <Label>
                                            <strong>나이 :</strong>
                                        </Label>{' '}
                                    </CardTitle>
                                    <CardTitle tag="h5">
                                        {' '}
                                        <Label>
                                            <strong>성별 :</strong>
                                        </Label>{' '}
                                    </CardTitle>
                                </Col>
                                <Col md={5}>
                                    <S.Memberbtn color={'#8bc34a'} margin={'16px 0 15px 0'} width={'150px'}>
                                        수정하기
                                    </S.Memberbtn>
                                    <S.Memberbtn color={'#e2b046'} margin={'0 0 15px 0'} width={'150px'}>
                                        경고하기
                                    </S.Memberbtn>
                                    <S.Memberbtn color={'#F05232'} margin={'0 0 15px 0'} width={'150px'}>
                                        제명하기
                                    </S.Memberbtn>
                                </Col>
                            </Row>
                        </CardBody>
                    </S.MemberCard>
                </>
            )}
        </>
    );
};

export default MemberCard;
