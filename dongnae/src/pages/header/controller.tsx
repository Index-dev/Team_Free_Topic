import React from 'react';
import Presenter from './presenter';

import { screenTypeState } from '../../modules/recoil/screenType';
import { useRecoilValue } from 'recoil';

function Container() {
    // const screenType = useRecoilValue(screenTypeState);

    //TODO: pc) 상단 top 10% hover시 헤더 등장, 평상시에는 로고만 보이게
    //          add event listner mousemove, mouse y값과 window.innerheight 비교
    //      태블릿, 모바일) 상단으로 스크롤 시 헤더 등장, 평상시에는 로고만 보이게
    //          add  event listner scroll, 이전값과 이후값 비교 후 위로 적당히 이동했으면 헤더 등장
    //          평상시에는 로고만 보이게
    return <Presenter />;
}

export default Container;
