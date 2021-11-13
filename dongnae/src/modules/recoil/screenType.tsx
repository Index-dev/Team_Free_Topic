import { atom, useRecoilState } from 'recoil';

const screenTypeAtom = atom({
    key: '_screenTypSe',
    default: 'isPC',
});

export const screenTypeRecoil = () => {
    const [screenType, setScreenType] = useRecoilState(screenTypeAtom);

    return {
        type: screenType,
        setType: (type: string) => {
            setScreenType(type);
        },
    };
};
