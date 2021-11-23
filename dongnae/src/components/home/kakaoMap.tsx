import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const KaKaoMap = (props: propsIState): JSX.Element => {
    const { reverse, LatLngX, LatLngY } = props;

    // useRef
    const mapRef = useRef<HTMLDivElement>(null); // 지도 Div
    const mapSettingRef = useRef<any>(null); // 지도 설정

    // variable
    const kakao = (window as any).kakao;

    useEffect(() => {
        // 지도 초기화
        const options = {
            center: new kakao.maps.LatLng(LatLngX, LatLngY), // 지도의 중심좌표
            level: 5, // 지도의 레벨(확대, 축소 정도)
        };

        if (mapRef.current) {
            // 기존에 있던 지도 지우기
            mapRef.current.innerHTML = '';

            // 지도 등록
            mapSettingRef.current = new kakao.maps.Map(mapRef.current, options);

            // 지도 클릭 시 회전 방지
            mapRef.current.addEventListener('mousedown', (event) => {
                event.stopPropagation();
            });

            // mapRef.current.addEventListener('click', (event) => {
            //     mapSettingRef.current.panTo(new kakao.maps.LatLng(33.45058, 126.574942));
            // });
        }
    }, [LatLngX, LatLngY]);

    return <Map ref={mapRef} reverse={reverse} />;
};

export default KaKaoMap;

interface propsIState {
    reverse: boolean;
    LatLngX: number;
    LatLngY: number;
}

const Map = styled.div<{ reverse: boolean }>`
    width: 100%;
    height: 100%;
    transform: ${(props) => props.reverse && 'rotateZ(180deg)'};
`;
