import { atom } from 'recoil';

export const numberAtom = atom<number>({
    key: 'numberAtom',
    default: 0,
})