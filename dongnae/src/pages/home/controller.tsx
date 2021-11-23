import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Idongnae } from '../../interface/home';
import Presenter from './presenter';
import kakaofriends from '../../assets/images/kakaofriends.png';

function Container() {
    // useState
    const [cubeHeight, setCubeHeight] = useState(0);
    const [dongnaeIndex, setDongnaeIndex] = useState<number>(0); // 동내배열 현재 인덱스
    const [dongnaeIndexOdd, setDongnaeIndexOdd] = useState<boolean>(false); // 인덱스 홀수 반응형을 위한 상태값
    const [dongnaeIndexEven, setDongnaeIndexEven] = useState<boolean>(false); // 인덱스 홀수 반응형을 위한 상태값

    // useRef
    const wrapperRef = useRef<HTMLDivElement>(null);

    const cubeContRef = useRef<HTMLDivElement>(null);
    const cubeStartClientXRef = useRef<number>(0); // 큐브 클릭(터치) 처음 위치
    const cubeEndClientXRef = useRef<number>(0); // 큐브 클릭(터치) 마지막 위치
    const cubeCheckRef = useRef<boolean>(false); // 큐브 클릭(터치) 여부
    const cubeRotateLockRef = useRef<boolean>(false); // 큐브 회전 중 변경 금지
    const rotateDegree = useRef<number>(0);

    const dongnaeIndexRef = useRef<number>(dongnaeIndex); // 동내배열 현재 인덱스

    const contentsBodyRef = useRef<HTMLDivElement>(null);

    // variable
    const dongnaeArray: Idongnae[] = [
        {
            title: '안양',
            description: '안양은 성찬이가 사는 동네입니다.',
            LatLngX: 37.3901,
            LatLngY: 126.9507,
            imageUrl: kakaofriends,
        },
        {
            title: '부천',
            description: '부천은 영현이가 사는 동네입니다.',
            LatLngX: 37.4842,
            LatLngY: 126.7827,
            imageUrl: kakaofriends,
        },
        {
            title: '역삼',
            description: '한 때 직장이었던 동네입니다.',
            LatLngX: 37.5008,
            LatLngY: 127.0365,
            imageUrl: kakaofriends,
        },
        {
            title: '명동',
            description: '놀러갔던 동네입니다.',
            LatLngX: 37.5609,
            LatLngY: 126.9864,
            imageUrl: kakaofriends,
        },
    ];

    // useEffect
    useEffect(() => {
        handleResize();
        window.addEventListener('resize', handleResize);
        window.addEventListener('keydown', cubeKeyboardMove);

        // cube 회전 이벤트
        if (cubeContRef.current && wrapperRef.current) {
            // web에서 마우스 클릭 시
            cubeContRef.current.addEventListener('mousedown', (event) => {
                cubeClickStart(event.clientX, event.clientX);
            });

            cubeContRef.current.addEventListener('mousemove', (event) => {
                cudeClickMove(event.clientX);
            });

            // 큐브 밖에서 클릭 해제할 경우도 적용
            wrapperRef.current.addEventListener('mouseup', () => {
                cudeClickEnd();
            });

            // mobile에서 터치 시
            cubeContRef.current.addEventListener('touchstart', (event) => {
                cubeClickStart(event.targetTouches[0].clientX, event.targetTouches[0].clientX);
            });

            cubeContRef.current.addEventListener('touchmove', (event) => {
                cudeClickMove(event.targetTouches[0].clientX);
            });

            // 큐브 밖에서 클릭 해제할 경우도 적용
            wrapperRef.current.addEventListener('touchend', () => {
                cudeClickEnd();
            });

            // 큐브 회전 중 추가회전 방지
            cubeContRef.current.addEventListener('transitionend', () => {
                cubeRotateLockRef.current = false;
            });
        }

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('keydown', cubeKeyboardMove);
        };
    }, []);

    // 키보드 큐브 이동 콜백함수
    const cubeKeyboardMove = useCallback((event) => {
        if (cubeContRef.current && cubeRotateLockRef.current === false) {
            cubeRotateLockRef.current = true;

            if (event.key === 'ArrowLeft') {
                rotateDegree.current -= 180;
                translateCube();
            }
            if (event.key === 'ArrowRight') {
                rotateDegree.current += 180;
                translateCube();
            }
        }
    }, []);

    // 큐브 처음 클릭(터치)한 경우
    function cubeClickStart(startClintX: number, endClientX: number) {
        cubeStartClientXRef.current = startClintX;
        cubeEndClientXRef.current = endClientX;
        cubeCheckRef.current = true;
    }

    // 큐브 클릭(터치) 후 이동하는 경우
    function cudeClickMove(endClientX: number) {
        if (cubeCheckRef.current === true) {
            cubeEndClientXRef.current = endClientX;
        }
    }

    // 큐브 이동이 끝난 경우
    function cudeClickEnd() {
        if (cubeContRef.current && cubeCheckRef.current === true && cubeRotateLockRef.current === false) {
            cubeCheckRef.current = false;

            if (cubeEndClientXRef.current - cubeStartClientXRef.current > 20) {
                if (dongnaeIndexRef.current > 0) {
                    // 배열 범위 내에서만 회전
                    rotateDegree.current -= 180;

                    dongnaeIndexRef.current--;
                    setDongnaeIndex(dongnaeIndexRef.current);

                    cubeRotateLockRef.current = true;
                }
            } else if (cubeEndClientXRef.current - cubeStartClientXRef.current < -20) {
                if (dongnaeIndexRef.current < dongnaeArray.length - 1) {
                    // 배열 범위 내에서만 회전
                    rotateDegree.current += 180;

                    dongnaeIndexRef.current++;
                    setDongnaeIndex(dongnaeIndexRef.current);

                    cubeRotateLockRef.current = true;
                }
            }

            if (dongnaeIndexRef.current % 2 === 0) {
                setDongnaeIndexEven((dongnaeIndexEven) => !dongnaeIndexEven);
            } else {
                setDongnaeIndexOdd((dongnaeIndexOdd) => !dongnaeIndexOdd);
            }

            translateCube();
        }
    }

    // 회전 함수 분할
    function translateCube() {
        if (cubeContRef.current) {
            cubeContRef.current.style.transition = `0.8s ease-out`;
            cubeContRef.current.style.transform = `rotateX(70deg) 
                                                   rotateZ(${45 + rotateDegree.current}deg)
                                                   translateZ(${-cubeContRef.current.offsetHeight / 2}px)`;
        }
    }

    function handleResize() {
        if (cubeContRef.current) setCubeHeight(cubeContRef.current.offsetHeight);
        if (wrapperRef.current) wrapperRef.current.style.height = `${window.innerHeight}px`;
    }

    return (
        <Presenter
            cubeHeight={cubeHeight}
            wrapperRef={wrapperRef}
            cubeContRef={cubeContRef}
            dongnaeIndex={dongnaeIndex}
            dongnaeIndexOdd={dongnaeIndexOdd}
            dongnaeIndexEven={dongnaeIndexEven}
            dongnaeArray={dongnaeArray}
            contentsBodyRef={contentsBodyRef}
        />
    );
}

export default Container;
