import { message } from '../utils';

const { $ } = window;

export default function init(url, inject) {
  if (!(url && url.length > 0)) return;
  message('载入中，获取配置2');
  $.ajax({
    url: inject,
  }).done((data) => {
    message('解析配置2数据');
    const { js, css } = data;
    const { cordova } = window;
    if (cordova.InAppBrowser) {
      const ref = cordova.InAppBrowser.open(url, '_self', 'location=no');
      ref.addEventListener('loadstop', () => {
        ref.insertCSS({ code: css });
        ref.executeScript({ code: js });
      });
    } else {
      $('#root').text('No InAppBrowser');
    }
  });
}
