import initConfig from './config';
import initWeb from './web';
import initLog from './log';
import { message } from '../utils';

const { $ } = window;

export default function init() {
  message('载入中：获取配置');
  $.ajax({
    url: `https://jsonblob.com/api/jsonBlob/0a663c35-8563-11ea-8ba7-3fe49d633ba5?_=${new Date().getTime()}`,
    headers: {
      Authorization: 'Bearer zZeSveRrFeCI486q4wfUCAkQhg8DGReWC_tC',
    },
  }).done((data) => {
    message('载入中：解析配置');
    if (data.success && data.data) {
      const config = initConfig(data.data);
      message('载入中，初始化APP');
      initWeb(config.WEB, config.INJECT);
      // message('LD: init log');
      // initLog(config.LOG);
      // message('LD: init ads');
      // initAds(config.ADS);
      // $('#loading').remove();
    } else {
      $('#root').html('Something Wrong. Try again.');
    }
  }).fail(() => {
    $('#root').html('Something Wrong. Try again.');
  });
}
