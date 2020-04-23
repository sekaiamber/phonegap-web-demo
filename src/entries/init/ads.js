const { $ } = window;

export default function init(ads) {
  if (!(ads && ads.length > 0)) return;
  $('#root').addClass('has-ads');
  const $ads = $('<div id="ads"></div>');
  ads.forEach((ad) => {
    const $ad = $(`<div class="ad" style="background-image: url(${ad.img})"></div>`);
    $ad.click(() => {
      window.open(ad.link);
    });
    $ads.append($ad);
  });
  $('#root').prepend($ads);
}
