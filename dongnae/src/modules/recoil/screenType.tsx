import { atom, useRecoilState } from 'recoil';

const checkScreenTypeAtom = atom({
    key: '_ScreenType',
    default: { isPC: false, isTablet: false, isMobile: false },
});

interface screenType {
    isPC: boolean;
    isTablet: boolean;
    isMobile: boolean;
}
export const checkScreenTypeRecoil = () => {
    const [screenType, setScreenType] = useRecoilState<screenType>(checkScreenTypeAtom);

    return {
        type: screenType,
        setType: (type: screenType) => {
            setScreenType(type);
        },
    };
};
