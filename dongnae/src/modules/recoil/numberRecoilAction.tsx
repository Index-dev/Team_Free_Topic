import { useRecoilState } from 'recoil';
import { numberAtom } from './numberRecoil';

export const numberRecoilAction = () => {
    const [number, setNumber] = useRecoilState<number>(numberAtom);

    return {
        number: number,
        increase: () => {
            setNumber(number+1);
        },
        decrease: () => {
            setNumber(number-1);
        }
    }
}