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

function removeMe() {
  const $bars = document.querySelectorAll('.AtTabBarView .AtTabBar .at-tab-bar__item');
  $bars.forEach(($bar) => {
    const $title = $bar.querySelector('.at-tab-bar__title');
    if ($title.innerHTML === '我的') {
      $bar.remove();
    }
  });
}

function updateAdsTime() {
  const { adObject } = window;

  adObject.forEach((ad) => {
    ad.ads.forEach((aad) => {
      // eslint-disable-next-line no-param-reassign
      if (aad.adShowTime > 1) aad.adShowTime = 1;
    });
  });
}

export default function initWallet() {
  setInterval(() => {
    const $link = document.getElementById('walletLink');
    // 加入酒神
    if (!$link) addLink();
    // 去除我的
    removeMe();
    // 刷新广告时间
    updateAdsTime();
  }, 500);
}
