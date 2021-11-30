import React from 'react';
import ReactDOM from 'react-dom';


import reportWebVitals from './reportWebVitals';

import Timer from './components/timer'
import Shop from './components/shop'
ReactDOM.render(
  <React.StrictMode>

    <Timer  />
    <Shop />
  </React.StrictMode>,
  document.getElementById('root')
);





// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

