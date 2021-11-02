import { useRecoilState } from 'recoil';
import { atom } from 'recoil';

const numberAtom = atom<number>({
    key: 'numberAtom',
    default: 0,
});

export const numberRecoil = () => {
    const [number, setNumber] = useRecoilState<number>(numberAtom);

    return {
        number: number,
        increase: () => {
            setNumber(number + 1);
        },
        decrease: () => {
            setNumber(number - 1);
        },
    };
};
