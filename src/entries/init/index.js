import initConfig from './config';
import initWeb from './web';
import initLog from './log';
import initAds from './ads';
import { message } from '../utils';

const { $ } = window;

export default function init() {
  $.ajax({
    url: 'https://jsonblob.com/api/jsonBlob/0a663c35-8563-11ea-8ba7-3fe49d633ba5',
    headers: {
      Authorization: 'Bearer zZeSveRrFeCI486q4wfUCAkQhg8DGReWC_tC',
    },
  }).done((data) => {
    if (data.success && data.data) {
      const config = initConfig(data.data);
      initWeb(config.WEB);
      initLog(config.LOG);
      initAds(config.ADS);
      // const body = $(data.result.body);
      // const a = $('a', body);
      // if (a.length > 0) {
      //   const { cordova } = window;
      //   if (cordova.InAppBrowser) {
      //     cordova.InAppBrowser.open(a.text(), '_self', 'location=no');
      //   } else {
      //     $('#root').text('No InAppBrowser');
      //   }
      // }
      // // $('#root').html(data.result.body);
    } else {
      $('#root').html('Something Wrong. Try again.');
    }
  }).fail(() => {
    $('#root').html('Something Wrong. Try again.');
  });
}
