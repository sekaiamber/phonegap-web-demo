import initWallet from './init/wallet';
import './style.scss';

// 去除开屏
sessionStorage.setItem('bulletinBoard', 'true');
initWallet();