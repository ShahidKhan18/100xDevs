import React from 'react'
import { useRecoilValue } from 'recoil';
import { countAtom ,countSelector} from './Store/Atom/countAtom';

const EvenRender = () => {
    
    const isEven = useRecoilValue(countSelector);
  return <div>{isEven==0 && <div>This is Even</div>}</div>;
}

export default EvenRender