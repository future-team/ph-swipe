/**
 * Created by slashhuang on 16/5/22.
 * 主程序入口
 */

'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _PhSwipeJs = require('./PhSwipe.js');

var _PhSwipeJs2 = _interopRequireDefault(_PhSwipeJs);

require("../css/index.less");
if (window['phoenix-ui']) {
    window['phoenix-ui']['PhSwipe'];
} else {
    window['PhSwipe'] = _PhSwipeJs2['default'];
};
module.exports = _PhSwipeJs2['default'];