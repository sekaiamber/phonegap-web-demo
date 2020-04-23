import init from './init';

import './style.scss';

if (__DEV__) {
  init();
}

document.addEventListener('deviceready', () => {
  init();
}, false);
