import React from 'react';
import { Link } from 'react-router-dom';
import WarnButton from './WarnButton';
import * as S from '../MemberListPage.style';
import profileImg from '../../../../assets/img/Profile.png';
import { Col, Row, CardHeader, CardBody, CardTitle, CardImg, Label } from 'reactstrap';

const sex = {
    1: '남',
    2: '여',
};

const MemberCard = ({ currentMemberData, deleteMemberData }) => {
    const renderImage = (images) => {
        if (images.length > 0) {
            let image = images[0];
            return `${image}`;
        }
    };
    return (
        <>
            {currentMemberData ? (
                <>
                    <S.card margin={'30px'}>
                        <CardHeader>회원 정보</CardHeader>
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
                                        <S.button color={'#8bc34a'} margin={'16px 0 15px 0'} width={'150px'}>
                                            수정하기
                                        </S.button>
                                    </Link>
                                    <WarnButton detail={currentMemberData} />
                                    <S.button color={'#F05232'} margin={'0 0 15px 0'} width={'150px'} onClick={deleteMemberData}>
                                        제명하기
                                    </S.button>
                                </Col>
                            </Row>
                        </CardBody>
                    </S.card>
                </>
            ) : (
                <>
                    <S.card margin={'30px'}>
                        <CardHeader> 옆에 있는 회원 리스트를 클릭해주세요!</CardHeader>
                        <S.cardImg top src={profileImg} alt="Card image cap" />
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
                                    <S.button color={'#8bc34a'} margin={'16px 0 15px 0'} width={'150px'}>
                                        수정하기
                                    </S.button>
                                    <S.button color={'#e2b046'} margin={'0 0 15px 0'} width={'150px'}>
                                        경고하기
                                    </S.button>
                                    <S.button color={'#F05232'} margin={'0 0 15px 0'} width={'150px'}>
                                        제명하기
                                    </S.button>
                                </Col>
                            </Row>
                        </CardBody>
                    </S.card>
                </>
            )}
        </>
    );
};

export default MemberCard;
