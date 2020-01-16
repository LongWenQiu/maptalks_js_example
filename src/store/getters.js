/*
 * @Description: Getter
 * @version: 0.1.0
 * @Author: wsw
 * @Date: 2018-12-25 22:12:22
 * @LastEditors: qiulongwen
 * @LastEditTime: 2019-07-23 08:38:40
 */

export default {
  config: state => state.config,
  configLoaded: state => state.configLoaded,
  mapLoaded: state => state.mapLoaded,
  map: state => state.map,
  gisFactory: state => state.gisFactory
}
