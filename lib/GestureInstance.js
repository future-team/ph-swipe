/**
 * Created by slashhuang on 16/5/22.
 * Slider为GestureEvent的具体使用实例
 * 用户可以自行根据GestureEvent扩展自己对应手势的回调函数
 */
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _utilsWarningJs = require('./utils/warning.js');

var _utilsWarningJs2 = _interopRequireDefault(_utilsWarningJs);

var _GestureEventJs = require('./GestureEvent.js');

var _GestureEventJs2 = _interopRequireDefault(_GestureEventJs);

var Slider = (function (_GestureEvent) {
    _inherits(Slider, _GestureEvent);

    /**
     * 初始化参数配置
     * @param ele 滑动元素container
     * @param option 组件参数
     */

    function Slider(ele, option) {
        _classCallCheck(this, Slider);

        var targetNode = ele.getElementsByClassName('img-list')[0];
        if (!(targetNode && targetNode.children && targetNode.children.length)) {
            _utilsWarningJs2['default']("please pass containerClassName as a prop to `PhSwipe`");
            return;
        }
        _GestureEvent.call(this, targetNode, option);
        var that = this;
        /**
         * dom节点信息
         */
        this.node = targetNode;
        this.parentNode = ele;
        /**
         * 配置信息
         */
        this.options = option;
        /**
         * 如果用户决定自定义手势事件，则覆盖预先定义好的
         * 这个功能暂时不用扩展了
         */
        this.bindDefinedEvents();

        /**
         * 自动循环播放
         */
        if (option.autoPlay) {
            (function () {
                var swipeType = option.direction == 'horizontal' ? 'swipeLeft' : 'swipeUp';
                setInterval(function () {
                    that.trigger(swipeType);
                }, option.duration || 1000);
            })();
        }
        /**
         * currentIndex:当前数据
         * swipeLastIndex:swipe子元素的最后序数号
         * swipeGap: 每次滑动的距离
         */
        this.animationInfo = {
            currentIndex: 0,
            swipeLastIndex: this.node.children.length - 1, //最后子元素的序数号
            swipeGap: option['swipeGap'] || (this.options.direction == 'horizontal' ? this.node['offsetWidth'] : this.node['offsetHeight']) / this.node.children.length //每次滑动宽度/每次滑动高度
        };
    }

    Slider.prototype.bindDefinedEvents = function bindDefinedEvents() {
        var that = this;
        var SwipeArr = this.options.direction == 'horizontal' ? ['swipeLeft', 'swipeRight'] : ['swipeUp', 'swipeDown'];
        /**
         * 挂载事件
         * 先支持swipe事件，类似longTap之类的之后封装
         */
        SwipeArr.forEach(function (eventName) {
            that.on(eventName, that[eventName]);
        });
    };

    Slider.prototype.renderIndicator = function renderIndicator(currentIndex) {
        var indicatorNode = this.parentNode.children[1];
        var activeClass = this.options.activeClass;

        var children = indicatorNode.children;
        for (var i = 0; i < children.length; i++) {
            children[i]['classList'].remove(activeClass);
        }
        children[currentIndex]['classList'].add(activeClass);
    };

    Slider.prototype.renderStyle = function renderStyle(info) {
        var translateFormat = this.options.direction == 'horizontal' ? 'translate3d(x,0,0)' : 'translate3d(0,y,0)';
        var replaceString = this.options.direction == 'horizontal' ? 'x' : 'y';
        var currentIndex = info.currentIndex;
        var swipeGap = info.swipeGap;
        var indicator = this.options.indicator;

        //在渲染样式的时机，渲染下面的小圆
        if (indicator) {
            this.renderIndicator(currentIndex);
        }
        return translateFormat.replace(replaceString, "-" + currentIndex * swipeGap + 'px');
    };

    /**
     * 按住时间长达1000ms，并且位移小于5,触发触发长按事件
     */

    Slider.prototype.longTap = function longTap() {
        alert('longTapping');
    };

    /**
     * swipe系列手指移动超过预设值
     * 手指移动事件小于1500ms
     * 手指滑动至少5个单位
     */
    /**
     * {"moveName":"Left","moveTime":162,
     * "positionInfo":{"x":"Left","y":"Down"},
     * "direction":"x","moveX":20.96600341796875,"moveY":0,
     * "startX":198.48300170898438,"startY":64.2969970703125,
     * "lastX":177.51699829101562,"lastY":64.2969970703125}
     * @param e
     * @param info
     */

    Slider.prototype.swipeRight = function swipeRight() {
        if (this.animationInfo.currentIndex > 0) {
            this.animationInfo.currentIndex--;
            /**
             * 如果有循环参数，则在头部左移回归尾部
             */
        } else if (this.options.loop) {
                this.animationInfo.currentIndex = this.animationInfo['swipeLastIndex'];
            }
        this.ele.style["-webkit-transform"] = this.renderStyle(this.animationInfo);
    };

    Slider.prototype.swipeLeft = function swipeLeft() {
        if (this.animationInfo.currentIndex < this.animationInfo['swipeLastIndex']) {
            this.animationInfo.currentIndex++;
        } else if (this.options.loop) {
            this.animationInfo.currentIndex = 0;
        }
        this.ele.style["-webkit-transform"] = this.renderStyle(this.animationInfo);
    };

    Slider.prototype.swipeUp = function swipeUp(e, info) {
        this['swipeLeft'](e, info);
    };

    Slider.prototype.swipeDown = function swipeDown(e, info) {
        this['swipeRight'](e, info);
    };

    /**
     * 恢复原状
     */

    Slider.prototype.swipeNotMove = function swipeNotMove() {
        alert('swipeNotMove');
    };

    /**
     * 快速点击事件
     * 按住时间小于150ms，并且位移小于5
     */

    Slider.prototype.fastTap = function fastTap() {
        this.warningForTap();
        alert(1);
    };

    /**
     * 双击事件与fastTap不兼容
     * 两次点击事件间隔小于400ms，触发双击事件
     */

    Slider.prototype.dbTap = function dbTap() {
        this.warningForTap();
    };

    /**
     * 不能同时处理快速点击和双击
     */

    Slider.prototype.warningForTap = function warningForTap() {
        if (this.eventList['dbTap'] && this.eventList['fastTap']) {
            _utilsWarningJs2['default']('you can\'t add event "dbTap" and "fastTap" at the same time,if you really want to,\n                    please use click instead of fastTap');
        }
    };

    return Slider;
})(_GestureEventJs2['default']);

exports['default'] = Slider;
module.exports = exports['default'];