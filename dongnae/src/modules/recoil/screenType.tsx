import { atom, useRecoilState } from 'recoil';

const screenTypeAtom = atom({
    key: '_ScreenType',
    default: { isPC: false, isTablet: false, isMobile: false },
});

interface screenTypeIState {
    isPC: boolean;
    isTablet: boolean;
    isMobile: boolean;
}
export const screenTypeRecoil = () => {
    const [screenType, setScreenType] = useRecoilState<screenTypeIState>(screenTypeAtom);

    return {
        type: screenType,
        setType: (screenType: screenTypeIState) => {
            setScreenType(screenType);
        },
    };
};
