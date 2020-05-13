import initWallet from './init/wallet';
import './style.scss';

// 去除开屏
sessionStorage.setItem('bulletinBoard', 'true');
// 去除VIP
window.showVipMessage = () => {};
setInterval(() => {
  window.showVipMessage = () => {};
}, 500);
initWallet();
