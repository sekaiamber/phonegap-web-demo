import init from './init';

import './style.scss';

// if (__DEV__) {
//   init();
// } else {
//   document.addEventListener('deviceready', () => {
//     init();
//   }, false);
// }


document.addEventListener('DOMContentLoaded', () => {
  document.addEventListener('deviceready', init, false);
}, false);
