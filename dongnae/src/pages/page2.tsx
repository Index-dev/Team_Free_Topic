import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseAction, increaseAction } from '../modules/actions';
import { IindexState } from '../modules/redux/indexReducer';

const Page2 = (): JSX.Element => {
    const dispatch = useDispatch();

    const number = useSelector((state: IindexState) => state.numberReducer.number);

    const onClickIncrease = () => {
        dispatch(increaseAction(1));
    }

    const onClickDecrease = () => {
        dispatch(decreaseAction(1));
    }


    return (
        <div>
            <h3>{number}</h3>
            <button onClick={onClickIncrease}>증가</button>
            <button onClick={onClickDecrease}>감소</button>
        </div>
    )
}

export default Page2;