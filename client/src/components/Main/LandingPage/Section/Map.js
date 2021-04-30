import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import * as S from './Map.style';

/*global kakao */

const Map = () => {
    const [Map, setMap] = useState('');
    const [SearchAdress, setSearchAdress] = useState('');
    const [Coords, setCoords] = useState('');

    useEffect(() => {
        Maps(Map);
    }, [Map]);

    const onChangeSearchAdress = (e) => {
        setSearchAdress(e.target.value);
    };

    const search = (e) => {
        e.preventDefault();
        Maps(SearchAdress);
    };

    const saveAdress = (e) => {
        e.preventDefault();
        console.log(Coords);
        const body = {
            La: Coords.La,
            Ma: Coords.Ma,
        };
        Axios.post('/api/map/address', body).then((response) => {
            if (response.data.success) {
                console.log(response.data);
                alert('주소 저장 성공.');
                setSearchAdress('');
            } else {
                alert('주소 저장 실패.');
            }
        });
    };

    const Maps = (address) => {
        const mapContainer = document.getElementById('map'), // 지도를 표시할 div
            mapOption = {
                center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
                level: 3, // 지도의 확대 레벨
            };

        // 지도를 생성합니다
        const map = new kakao.maps.Map(mapContainer, mapOption);

        // 주소-좌표 변환 객체를 생성합니다
        const geocoder = new kakao.maps.services.Geocoder();

        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(address, function (result, status) {
            // 정상적으로 검색이 완료됐으면
            if (status === kakao.maps.services.Status.OK) {
                const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

                // 결과값으로 받은 위치를 마커로 표시합니다
                const marker = new kakao.maps.Marker({
                    map: map,
                    position: coords,
                });

                // 인포윈도우로 장소에 대한 설명을 표시합니다
                const infowindow = new kakao.maps.InfoWindow({
                    content: '<div style="width:150px;text-align:center;padding:6px 0;">모임 장소</div>',
                });
                infowindow.open(map, marker);

                // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
                map.setCenter(coords);
                console.log(coords);
                setCoords(coords);
            }
        });
    };
    return (
        <>
            <S.MapWrap>
                <div id="map"></div>
            </S.MapWrap>
            <form name="myform">
                <label>모임 장소</label>
                <input type="text" onChange={onChangeSearchAdress} placeholder={'모임 장소 주소를 입력해주세요...'} value={SearchAdress} name="address" />
                <button onClick={search}>검색</button>
                <button onClick={saveAdress}>저장</button>
            </form>
        </>
    );
};

export default Map;