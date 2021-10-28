import * as React from 'react';
import { numberRecoilAction } from '../modules/recoil/numberRecoilAction';
import kakaofriends from '../../public/images/kakaofriends.png';
import { Outer } from '../styled/styleds';

const Page1 = (): JSX.Element => {
    const numberRecoil = numberRecoilAction();

    return (
        <div>
            <h3>{numberRecoil.number}</h3>
            <button onClick={numberRecoil.increase}>증가</button>
            <button onClick={numberRecoil.decrease}>감소</button>

            <br />
            
            <Outer>
                <img src={kakaofriends} />
            </Outer>
        </div>
    )
}

export default Page1;