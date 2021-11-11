import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const KaKaoMap = (props: propsIState): JSX.Element => {
    const { reverse } = props;

    // useRef
    const mapRef = useRef<HTMLDivElement>(null); // 지도 Div
    const mapSettingRef = useRef<any>(null); // 지도 설정

    // variable
    const kakao = (window as any).kakao;

    useEffect(() => {
        // 지도 초기화
        const options = {
            center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표.
            level: 3, // 지도의 레벨(확대, 축소 정도)
        };

        mapSettingRef.current = new kakao.maps.Map(mapRef.current, options);

        if (mapRef.current) {
            // 지도 클릭 시 회전 방지
            mapRef.current.addEventListener('mousedown', (event) => {
                event.stopPropagation();
            });

            mapRef.current.addEventListener('click', (event) => {
                mapSettingRef.current.panTo(new kakao.maps.LatLng(33.45058, 126.574942));
            });
        }
    }, []);

    return <Map ref={mapRef} reverse={reverse} />;
};

export default KaKaoMap;

interface propsIState {
    reverse: boolean;
}

const Map = styled.div<{ reverse: boolean }>`
    width: 100%;
    height: 100%;
    transform: ${(props) => (props.reverse ? 'rotateZ(180deg)' : '')};
`;
