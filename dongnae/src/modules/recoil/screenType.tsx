import { atom, useRecoilState } from 'recoil';

const checkScreenTypeAtom = atom({
    key: '_ScreenType',
    default: { isPC: false, isTablet: false, isMobile: false },
});

interface screenTypeIState {
    isPC: boolean;
    isTablet: boolean;
    isMobile: boolean;
}
export const checkScreenTypeRecoil = () => {
    const [screenType, setScreenType] = useRecoilState<screenTypeIState>(checkScreenTypeAtom);

    return {
        screenType: screenType,
        setType: (screenType: screenTypeIState) => {
            setScreenType(screenType);
        },
    };
};
