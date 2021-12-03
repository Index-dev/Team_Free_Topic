import { atom, useRecoilState } from 'recoil';

const defaultScreenType = { isPC: false, isTablet: false, isMobile: false };

const screenTypeAtom = atom({
    key: '_ScreenType',
    default: defaultScreenType,
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
        setIsPC: () => {
            setScreenType({ ...defaultScreenType, isPC: true });
        },
        setIsTablet: () => {
            setScreenType({ ...defaultScreenType, isTablet: true });
        },
        setIsMobile: () => {
            setScreenType({ ...defaultScreenType, isMobile: true });
        },
    };
};
