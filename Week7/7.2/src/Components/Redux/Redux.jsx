import React from 'react'
import Count from './Count'
import {Provider} from "react-redux"
import store from './Store/Store';
const Redux = () => {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default Redux