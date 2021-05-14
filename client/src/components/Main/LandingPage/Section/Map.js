// import React, { useEffect, useState } from 'react';
// import Axios from 'axios';
// import { Form, Input, Label, Button, Col, Row } from 'reactstrap';
// import * as S from './Map.style';

// /*global kakao */

// const Map = () => {
//     const [Map, setMap] = useState('');
//     const [SearchAdress, setSearchAdress] = useState('');
//     const [Coords, setCoords] = useState('');

//     useEffect(() => {
//         Maps(Map);
//     }, [Map]);

//     const onChangeSearchAdress = (e) => {
//         e.preventDefault();
//         setSearchAdress(e.target.value);
//     };

//     const search = (e) => {
//         e.preventDefault();
//         Maps(SearchAdress);
//     };
//     const saveAdress = (e) => {
//         e.preventDefault();
//         if (Coords.length === 0) {
//             return alert('모임 장소 주소 검색이 필요합니다.');
//         }
//         const body = {
//             La: Coords.La,
//             Ma: Coords.Ma,
//         };
//         Axios.post('/api/map/address', body).then((response) => {
//             if (response.data.success) {
//                 console.log(response.data);
//                 alert('주소 저장 성공.');
//                 setSearchAdress('');
//                 setCoords('');
//             } else {
//                 alert('주소 저장 실패.');
//             }
//         });
//     };

//     const Maps = (address) => {
//         const mapContainer = document.getElementById('map'), // 지도를 표시할 div
//             mapOption = {
//                 center: new kakao.maps.LatLng(37.5658680501733, 126.97701686683232), // 지도의 중심좌표
//                 level: 5, // 지도의 확대 레벨
//             };

//         // 지도를 생성합니다
//         const map = new kakao.maps.Map(mapContainer, mapOption);

//         // 주소-좌표 변환 객체를 생성합니다
//         const geocoder = new kakao.maps.services.Geocoder();

//         // 주소로 좌표를 검색합니다
//         geocoder.addressSearch(address, function (result, status) {
//             // 정상적으로 검색이 완료됐으면
//             if (status === kakao.maps.services.Status.OK) {
//                 const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

//                 // 결과값으로 받은 위치를 마커로 표시합니다
//                 const marker = new kakao.maps.Marker({
//                     map: map,
//                     position: coords,
//                 });

//                 // 인포윈도우로 장소에 대한 설명을 표시합니다
//                 const infowindow = new kakao.maps.InfoWindow({
//                     content: '<div style="width:150px;text-align:center;padding:6px 0;">모임 장소</div>',
//                 });
//                 infowindow.open(map, marker);

//                 // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
//                 map.setCenter(coords);
//                 console.log(coords);
//                 setCoords(coords);
//             }
//         });
//     };
//     return (
//         <>
//             <S.MapWrap>
//                 <div id="map"></div>
//             </S.MapWrap>
//             <S.SearchWrap>
//                 <Form>
//                     <Label>
//                         모임 장소 검색 <small>(예: 서울특별시 서대문구 증가로 170, 송파구, 연희동, 증가로 200-8... )</small>
//                     </Label>
//                     <Input type="text" onChange={onChangeSearchAdress} placeholder={'모임 장소 주소를 입력해주세요...'} value={SearchAdress} name="address" />
//                 </Form>
//             </S.SearchWrap>
//             <S.BtnhWrap>
//                 <S.Mapbtn color={'#333'} onClick={search}>
//                     검색
//                 </S.Mapbtn>
//                 <S.Mapbtn color={'#333'} onClick={saveAdress}>
//                     설정
//                 </S.Mapbtn>
//             </S.BtnhWrap>
//         </>
//     );
// };

// export default Map;
