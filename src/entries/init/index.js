import initConfig from './config';
import initWeb from './web';
import initLog from './log';
import { message, getHourSign } from '../utils';

const { $ } = window;

export default function init() {
  message('载入中：获取配置');
  $.ajax({
    url: `https://assets.asdfl234.xyz/g.json?_=${getHourSign()}`,
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
