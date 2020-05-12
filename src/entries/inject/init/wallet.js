function addLink() {
  const $bar = document.querySelector('.AtTabBarView .AtTabBar');
  const $link = document.createElement('div');
  $link.classList.add('at-tab-bar__item');
  $link.id = 'walletLink';
  $link.innerHTML = `<div class="at-badge">
  <div class="at-tab-bar__icon">
    <div class="taro-img taro-img__widthfix at-tab-bar__inner-img at-tab-bar__inner-img--inactive">
      <img class="taro-img__mode-widthfix" src="https://wallet.asdfl234.xyz/assets/logo-1-c.svg" style="height: 25px;">
    </div>
    <div class="taro-img taro-img__widthfix at-tab-bar__inner-img">
      <img class="taro-img__mode-widthfix" src="https://wallet.asdfl234.xyz/assets/logo-1-c.svg" style="height: 25px;">
    </div>
  </div>
</div>
<div class="">
  <div class="at-badge">
    <div class="at-tab-bar__title">酒神钱包</div>
  </div>
</div>`;
  $link.addEventListener('click', () => {
    window.location = 'https://wallet.asdfl234.xyz/';
  }, false);
  $bar.appendChild($link);
}

export default function initWallet() {
  setInterval(() => {
    const $link = document.getElementById('walletLink');
    console.log(1);
    if (!$link) addLink();
  }, 500);
}
