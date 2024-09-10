import React from 'react'
import Count from './count'
import { RecoilRoot } from 'recoil';

const Recoil = () => {
  return (
    <div>
      <RecoilRoot>
        Count Component Start
        <br />
        <br />
        <br />
        <br />
        <Count />
        <br />
        <br />
        <br />
        <br />
        Count Component Start
      </RecoilRoot>
    </div>
  );
}

export default Recoil