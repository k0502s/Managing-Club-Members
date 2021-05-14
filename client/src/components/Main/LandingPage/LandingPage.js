import React, { useEffect } from 'react';
import { Row, Col, Card, CardHeader, CardBody, CardText } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import Register from '../../Authentication/RegisterModal';
import Map from './Section/Map'
import systemImg from '../../../assets/img/system.png';
import statisticsImg from '../../../assets/img/통계.png';
import { ALL_DATA_REQUEST, CLEAR_ERROR_REQUEST, CLEAR_ERROR_REQUEST_1, MEMBER_WARNLIST_REQUEST } from '../../../redux/types';
import * as S from './LandingPage.style';

const LandingPage = () => {
    const dispatch = useDispatch();
    const { isAuthenticated, user, warnlisttoltal } = useSelector((state) => state.auth);
    const { chatalldata, membertoltal } = useSelector((state) => state.member);
    useEffect(() => {
        let warnLists = [];
        if (user && user.cart)
            if (user.cart.length > 0) {
                user.cart.forEach((item) => {
                    warnLists.push(item.id);
                });
                const body = {
                    warnListsId: warnLists,
                    list: user.cart,
                    page: 1,
                    size: 1,
                };
                dispatch({
                    type: MEMBER_WARNLIST_REQUEST,
                    payload: body,
                });
            }
        dispatch({
            type: ALL_DATA_REQUEST,
        });
        dispatch({
            type: CLEAR_ERROR_REQUEST,
        });
        dispatch({
            type: CLEAR_ERROR_REQUEST_1,
        });
    }, [user]);

    const guestLink = (
        <>
            <Col>
                <Card>
                    <S.Header>
                        <div>
                            <S.BellIcon />
                            안녕하세요. MEMBER ADMIN SYSTEM 프로젝트 입니다.
                        </div>
                    </S.Header>
                    <CardBody>
                        <Row>
                            <Col>
                                <CardText>
                                    <h4>아래 관리자 아이디와 패스워드로 로그인 해주세요!</h4>
                                </CardText>
                                <br />
                                <CardText>ID: k0502s@naver.com</CardText>
                                <br />
                                <CardText>PW: 11</CardText>
                                <br />
                                {/* <Register /> */}
                            </Col>
                            <Col>
                                <S.Img src={systemImg} />
                            </Col>
                        </Row>
                    </CardBody>
                </Card>
            </Col>
        </>
    );

    const authLink = (
        <>
            <S.Title>
                <h1>HOME</h1>
            </S.Title>
            <hr />
            <Row>
                <Col sm={6}>
                    <S.HomeCard margin={'20px'}>
                        <CardHeader>다음 모임 장소 설정</CardHeader>
                        {/* <CardBody><Map /></CardBody> */}
                    </S.HomeCard>
                    <Card>
                        <CardHeader>
                            <div>
                                <S.ChartIcon />
                                회원 정보 현황
                            </div>
                        </CardHeader>
                        <CardBody>
                            <Row>
                                <Col>
                                    <CardText>
                                        <S.DataCircle color={'#8bc34a'}>
                                            <div>
                                                <S.ListIcon />
                                            </div>
                                            <p>회원 수</p>
                                            <span data-testid='member-count'>{membertoltal.length}명</span>
                                        </S.DataCircle>
                                    </CardText>
                                </Col>
                                <Col>
                                    <CardText>
                                        <S.DataCircle color={'#e2b046'}>
                                            <div>
                                                <S.WarnIcon />
                                            </div>
                                            <p>경고 회원 수</p>
                                            <span data-testid='warnmember-count'>{warnlisttoltal}명</span>
                                        </S.DataCircle>
                                    </CardText>
                                </Col>
                                <Col>
                                    <CardText>
                                        <S.DataCircle color={'#F05232'}>
                                            <div>
                                                <S.QIcon />
                                            </div>
                                            <p>문의 사항</p>
                                            <span data-testid='Qmember-count'>{chatalldata.length}건</span>
                                        </S.DataCircle>
                                    </CardText>
                                </Col>
                            </Row>
                            <S.Img2 src={statisticsImg} />
                        </CardBody>
                    </Card>
                </Col>
                <Col>
                    <S.HomeCard height={'660px'}>
                        <CardHeader>
                            <div>
                                <S.MapIcon />
                                SYSYTEM 기능 소개
                            </div>
                        </CardHeader>
                        <CardBody>
                            <br />
                            <CardText>
                                <S.AddIcon />
                                <strong>ADD MEMBER </strong>: 동호의 회원의 정보를 데이터에 추가할 수 있는 페이지 입니다.
                            </CardText>
                            <br />
                            <CardText>
                                <S.ListIcon />
                                <strong>MEMBER LIST</strong>: 추가한 회원 정보 데이터를 리스트를 통해 직관적으로 확인 할 수 있으며 특정 회원 정보 마다 삭제(제명) 및 수정이 가능하고 경고를 할 수 있는
                                기능이 있는 페이지 입니다. 경고는 경고 버튼을 누를 때마다 경고 횟수가 누적되는 시스템으로 되어 있습니다.
                            </CardText>
                            <br />
                            <CardText>
                                <S.WarnIcon />
                                <strong>WARN MEMBER LIST</strong>: MEMBER LIST에서 경고한 특정 회원 정보의 데이터를 담은 리스트를 보여주는 페이지 입니다. 여기서도 특정 회원을 바로 삭제(제명) 가능 할
                                수 있으며 경고를 해제할 수 있는 기능을 담고 있습니다.
                            </CardText>
                            <br />
                            <CardText>
                                <S.QIcon /> <strong>MEMBER INQIRIES</strong>: 실제 동호외 사이트(또 다른 개인 프로젝트)에서 챗봇을 통해 받아온 회원들의 문의 사항 데이터를 받아온 리스트를 보여주는
                                페이지입니다. 문의 사항 확인 후 곧바로 삭제가 가능 하며 문의 사항에 대한 답을 곧바로 보낼 수 있도록 이메일을 보낼 수 있는 기능 또한 페이지에 삽입되어 있습니다.
                            </CardText>
                            <br />
                        </CardBody>
                    </S.HomeCard>
                </Col>
            </Row>
        </>
    );

    return <>{isAuthenticated ? authLink : guestLink}</>;
};

export default LandingPage;
