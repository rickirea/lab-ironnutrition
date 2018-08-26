import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import 'bulma/css/bulma.css';
import foods from './foods.js'
//import foods from './foods.js'

foods.forEach((element, index) => {
  element.show = true;
});

console.log(foods);

ReactDOM.render(
  <App foods={foods} />, 
  document.getElementById('root')
);

registerServiceWorker();
