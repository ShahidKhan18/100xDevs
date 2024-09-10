import React from 'react'
import Count from './Count.jsx'
import CountProvider from './countContext.jsx';

const ContextAPI = () => {
  return (
    <div>
      <CountProvider>
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
      </CountProvider>
    </div>
  );
}

export default ContextAPI