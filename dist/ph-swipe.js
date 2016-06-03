(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"), require("react/lib/ReactDOM"));
	else if(typeof define === 'function' && define.amd)
		define(["react", "react/lib/ReactDOM"], factory);
	else {
		var a = typeof exports === 'object' ? factory(require("react"), require("react/lib/ReactDOM")) : factory(root["React"], root["ReactDom"]);
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_5__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by slashhuang on 16/5/22.
	 * 主程序入口
	 */

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _PhSwipeJs = __webpack_require__(2);

	var _PhSwipeJs2 = _interopRequireDefault(_PhSwipeJs);

	__webpack_require__(11);
	if (window['phoenix-ui']) {
	    window['phoenix-ui']['PhSwipe'];
	} else {
	    window['PhSwipe'] = _PhSwipeJs2['default'];
	};
	module.exports = _PhSwipeJs2['default'];

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by slashhuang on 16/5/25.
	 */

	'use strict';

	exports.__esModule = true;

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _react = __webpack_require__(3);

	var _react2 = _interopRequireDefault(_react);

	var _reactDom = __webpack_require__(4);

	var _GestureInstanceJs = __webpack_require__(6);

	var _GestureInstanceJs2 = _interopRequireDefault(_GestureInstanceJs);

	var PhSwipe = (function (_Component) {
	    _inherits(PhSwipe, _Component);

	    _createClass(PhSwipe, null, [{
	        key: 'PropTypes',
	        value: {
	            imgArr: _react.PropTypes.Array, //图片数组
	            direction: _react.PropTypes.string, //默认横向滚动
	            autoPlay: _react.PropTypes.boolean, //默认不自滚动
	            loop: _react.PropTypes.boolean, //默认不循环
	            indicator: _react.PropTypes.boolean, //显示小圆
	            activeClass: _react.PropTypes.string //小圆active的样式
	        },
	        enumerable: true
	    }, {
	        key: 'styleClsName',
	        value: {
	            vertical: ['img-vertical-indicator'],
	            horizontal: ['img-indicator']
	        },
	        enumerable: true
	    }, {
	        key: 'defaultProps',
	        value: {
	            imgArr: [], //图片数组
	            direction: 'horizontal', //默认横向滚动
	            autoPlay: false, //默认不自滚动
	            loop: false, //默认不循环
	            containerClassName: 'img-list', //滑动容器的className值
	            indicator: true, //显示小圆
	            activeClass: 'indicator-active'
	        },
	        enumerable: true
	    }]);

	    function PhSwipe() {
	        _classCallCheck(this, PhSwipe);

	        _Component.call(this);
	    }

	    PhSwipe.prototype.componentDidMount = function componentDidMount() {
	        var _props = this.props;
	        var imgArr = _props.imgArr;

	        var other = _objectWithoutProperties(_props, ['imgArr']);

	        this.node = _reactDom.findDOMNode(this.refs['ph-swipe']);
	        new _GestureInstanceJs2['default'](this.node, other);
	    };

	    PhSwipe.prototype.renderImg = function renderImg(direction) {
	        var styles = this.calculatePercent();
	        var imgArr = this.props.imgArr;
	        if (imgArr) return _react2['default'].createElement(
	            'div',
	            { className: 'img-list  ' + direction, style: styles.container },
	            imgArr.map(function (ele) {
	                return _react2['default'].createElement('img', { src: ele, key: ele, style: styles.child });
	            })
	        );
	    };

	    PhSwipe.prototype.renderIndicator = function renderIndicator() {
	        var indicatorStyle = this.getIndicator();
	        var _props2 = this.props;
	        var activeClass = _props2.activeClass;
	        var imgArr = _props2.imgArr;

	        return _react2['default'].createElement(
	            'div',
	            { className: '' + indicatorStyle[0] },
	            _react2['default'].createElement('i', { className: activeClass }),
	            imgArr.slice(1).map(function (ele, index) {
	                return _react2['default'].createElement('i', { key: index });
	            })
	        );
	    };

	    PhSwipe.prototype.getIndicator = function getIndicator() {
	        var direction = this.props.direction;

	        if (direction == 'horizontal') {
	            return PhSwipe.styleClsName['horizontal'];
	        } else {
	            return PhSwipe.styleClsName['vertical'];
	        }
	    };

	    PhSwipe.prototype.calculatePercent = function calculatePercent() {
	        var _props3 = this.props;
	        var imgArr = _props3.imgArr;
	        var direction = _props3.direction;

	        var length = imgArr.length;
	        switch (direction) {
	            case 'vertical':
	                return {
	                    container: { height: 100 * length + '%' },
	                    child: { height: 100 / length + '%' }
	                };
	            default:
	                return {
	                    container: { width: 100 * length + '%' },
	                    child: { width: 100 / length + '%' }
	                };
	        }
	    };

	    PhSwipe.prototype.render = function render() {
	        var _props4 = this.props;
	        var direction = _props4.direction;
	        var indicator = _props4.indicator;

	        return _react2['default'].createElement(
	            'div',
	            _extends({ className: 'ph-container ' + this.props.className
	            }, this.props, {
	                ref: 'ph-swipe' }),
	            this.renderImg(direction),
	            indicator ? this.renderIndicator() : null
	        );
	    };

	    return PhSwipe;
	})(_react.Component);

	exports['default'] = PhSwipe;
	module.exports = exports['default'];

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(5);


/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

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

	var _utilsWarningJs = __webpack_require__(7);

	var _utilsWarningJs2 = _interopRequireDefault(_utilsWarningJs);

	var _GestureEventJs = __webpack_require__(8);

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

/***/ },
/* 7 */
/***/ function(module, exports) {

	/**
	 * Created by slashhuang on 16/5/22.
	 * 警告报错处理
	 */
	'use strict';

	exports.__esModule = true;

	exports['default'] = function (message) {
	    if (typeof console !== 'undefined') {
	        console.error(message);
	    }
	    try {
	        throw new Error(message);
	    } catch (x) {}
	};

	module.exports = exports['default'];

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by slashhuang on 16/5/22.
	 * 移动端手势系统入口
	 */
	/**
	 * 引入父类
	 */
	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var _EventProtoJs = __webpack_require__(9);

	var _EventProtoJs2 = _interopRequireDefault(_EventProtoJs);

	/**
	 * 引入工具类
	 */

	var _utilsUtilsJs = __webpack_require__(10);

	var _utilsUtilsJs2 = _interopRequireDefault(_utilsUtilsJs);

	var _utilsWarningJs = __webpack_require__(7);

	var _utilsWarningJs2 = _interopRequireDefault(_utilsWarningJs);

	var GestureEvent = (function (_EventProto) {
	    _inherits(GestureEvent, _EventProto);

	    function GestureEvent(ele, options) {
	        _classCallCheck(this, GestureEvent);

	        _EventProto.call(this, ele, options); //获取父类实例的eventList
	        /**
	         * 绑定实例dom节点和配置信息
	         */
	        this.ele = ele;
	        /**p
	         * 自定义配置属性
	         * @type {number}
	         */
	        this.defaultOptions = {
	            triggerDistance: 10 //至少手指移动10px
	        };
	        /**
	         * 绑定事件【目前支持如下事件列表】
	         *'swipeLeft',
	         *'swipeRight',
	         *'swipeUp',
	         *'swipeDown',
	         *'swipeNotMove',
	         *'fastTap',
	         *'dbTap',
	         *'longTap'
	         */
	        this.bindEvents();
	        document.addEventListener('touchmove', function () {});
	    }

	    GestureEvent.prototype.bind = function bind(type, func) {
	        this.ele.addEventListener(type, func, false);
	    };

	    GestureEvent.prototype.unbind = function unbind(type, func) {
	        this.ele.removeEventListener(type, func);
	    };

	    /**
	     * 设置滑动最后的信息
	     * @param e
	     */

	    GestureEvent.prototype.setSliderLastInfo = function setSliderLastInfo(e) {
	        this.lastX = _utilsUtilsJs2['default'].isMobile() ? e.touches[0].pageX : e.clientX;
	        this.lastY = _utilsUtilsJs2['default'].isMobile() ? e.touches[0].pageY : e.clientY;
	    };

	    /**
	     * 设置滑动初始化的信息
	     * @param e
	     */

	    GestureEvent.prototype.setStartInfo = function setStartInfo(e) {
	        this.startX = _utilsUtilsJs2['default'].isMobile() ? e.touches[0].pageX : e.clientX;
	        this.startY = _utilsUtilsJs2['default'].isMobile() ? e.touches[0].pageY : e.clientY;
	        this.startTime = Date.now();
	    };

	    GestureEvent.prototype.getSliderInfo = function getSliderInfo() {
	        var absX = Math.abs(this.lastX - this.startX);
	        var absY = Math.abs(this.lastY - this.startY);
	        var moveTime = Date.now() - this.startTime;
	        var direction = absX > absY ? "x" : "y";
	        var positionInfo = {
	            x: this.lastX - this.startX >= 0 ? 'Right' : 'Left',
	            y: this.lastY - this.startY >= 0 ? 'Down' : 'Up'
	        };
	        return {
	            moveName: positionInfo[direction],
	            moveTime: moveTime,
	            positionInfo: positionInfo,
	            direction: direction,
	            moveX: absX,
	            moveY: absY,
	            startX: this.startX,
	            startY: this.startY,
	            lastX: this.lastX,
	            lastY: this.lastY
	        };
	    };

	    GestureEvent.prototype._touchStart = function _touchStart(e) {
	        //阻止默认滚动行为
	        e.preventDefault();
	        //这里只允许单指操作，不会影响鼠标操作
	        if (e.touches && e.touches.length > 1) {
	            return false;
	        }
	        this.setStartInfo(e);
	        this.setSliderLastInfo(e);
	    };

	    GestureEvent.prototype._touchMove = function _touchMove(e) {
	        //阻止默认滚动行为
	        e.preventDefault();
	        this.setSliderLastInfo(e);
	        var getSliderInfo = this.getSliderInfo();
	        //@TODO 是否触发swipeMove有待商榷
	        this.trigger('swipeMove', [e.target, getSliderInfo]);
	    };

	    GestureEvent.prototype._touchEnd = function _touchEnd(e) {
	        //阻止默认滚动行为
	        e.preventDefault();
	        //debugger;
	        //移除dom滚动事件
	        //this.stopDocMove(false);
	        /**
	         * 手指信息
	         * @type {{moveTime, positionInfo, direction, moveX, moveY, startX, startY, lastX, lastY}|*}
	         */
	        var SliderInfo = this.getSliderInfo();
	        var distance = this.defaultOptions.triggerDistance;
	        var triggerCondition = {
	            /**
	             * 触发快速点击事件
	             */
	            'fastTap': SliderInfo.moveTime < 100 && SliderInfo.moveX < 5 && SliderInfo.moveY < 5,
	            /**
	             * x轴和y轴有一个方向滑动距离够===>>>>触发swipe事件
	             */
	            'swipe': SliderInfo.moveTime > 100 && SliderInfo.moveTime < 1500 && (SliderInfo['moveX'] > distance || SliderInfo['moveY'] > distance),
	            /**
	             * 长按和手指不移动，触发longTap事件
	             */
	            "longTap": SliderInfo.moveTime > 1500 && SliderInfo.moveX < 5 && SliderInfo.moveY < 5
	        };
	        /**
	         * 事件信息
	         */
	        if (triggerCondition['fastTap']) {
	            this.trigger('fastTap', [SliderInfo, e.target]);
	        } else if (triggerCondition['longTap']) {
	            this.trigger('longTap');
	        } else if (triggerCondition['swipe']) {
	            var eventTypeName = SliderInfo['moveName'];
	            //触发swipeLeft,swipeRight,swipeUp,swipeDown
	            this.trigger('swipe' + eventTypeName, [e.target, SliderInfo]);
	        } else {
	            /**
	             * 什么条件都不满足,触发复原事件
	             */
	            this.trigger('swipeNotMove', [e.target, SliderInfo]);
	        }
	        //回滚实例数据
	        this.startX = this.startY = this.lastX = this.lastY = 0;
	    };

	    /**
	     * 挂载事件
	     */

	    GestureEvent.prototype.bindEvents = function bindEvents() {
	        var that = this;
	        var touchEvents = {
	            'touchstart': {
	                callback: that._touchStart.bind(that)
	            },
	            'touchmove': {
	                callback: that._touchMove.bind(that)
	            },
	            'touchend': {
	                callback: that._touchEnd.bind(that)
	            }
	        };
	        /**
	         * 在mouse事件中取消mousemove单独事件，放在mousedown和mouseup里面
	         * @type {{mousedown: {callback: Function}, mouseup: {callback: Function}}}
	         */
	        var mouseEvents = {
	            'mousedown': {
	                callback: function callback(e) {
	                    that._touchStart(e);
	                    that.bind('mousemove', that._touchMove.bind(that));
	                }
	            },
	            'mouseup': {
	                callback: function callback(e) {
	                    that._touchEnd(e);
	                    that.unbind('mousemove', that._touchMove.bind(that));
	                }
	            }
	        };
	        var finalEvents = _utilsUtilsJs2['default'].isMobile() ? touchEvents : mouseEvents;
	        for (var key in finalEvents) {
	            this.bind(key, finalEvents[key].callback);
	        }
	    };

	    return GestureEvent;
	})(_EventProtoJs2['default']);

	exports['default'] = GestureEvent;
	module.exports = exports['default'];

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Created by slashhuang on 16/5/22.
	 * 手势管理系统基类
	 * 请查看单元测试EventProto.js
	 */
	'use strict';

	exports.__esModule = true;

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

	var _utilsWarningJs = __webpack_require__(7);

	var _utilsWarningJs2 = _interopRequireDefault(_utilsWarningJs);

	var EventProto = (function () {
	    function EventProto() {
	        _classCallCheck(this, EventProto);

	        /**
	         * 实例事件存储字典
	         * @type {{}}
	         */
	        this.eventList = {};
	    }

	    /**
	     * 注册事件类型单例
	     * @param type 事件类型
	     * @param func 回调函数
	     */

	    EventProto.prototype.on = function on(type, func) {
	        if (typeof func != 'function') {
	            _utilsWarningJs2['default']('you should pass a function as "on" parameter ');
	        } else {
	            if (!!this.eventList[type]) {
	                this.eventList[type].push(func);
	            } else {
	                this.eventList[type] = [func];
	            }
	        }
	    };

	    EventProto.prototype.off = function off(type, func) {
	        var typeList = this.eventList[type];
	        if (!!typeList) {
	            var targetIndex = typeList.indexOf(func);
	            typeList.splice(targetIndex, 1);
	        } else {
	            _utilsWarningJs2['default']('you haven\'t initialized event : ' + type + ',please use "on" to initialize your event ');
	        }
	    };

	    /**
	     * 触发事件
	     * @param type 事件类型
	     * @param args 回调函数参数数组
	     */

	    EventProto.prototype.trigger = function trigger(type, args) {
	        var typeList = this.eventList[type];
	        /**
	         * trigger没有对应的回调函数，则默认不做任何事
	         */
	        if (!!typeList) {
	            for (var i = 0; i < typeList.length; i++) {
	                typeList[i].apply(this, args);
	            }
	        }
	    };

	    return EventProto;
	})();

	exports['default'] = EventProto;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Created by slashhuang on 16/5/22.
	 */

	"use strict";

	exports.__esModule = true;
	var utils = {
	  isMobile: function isMobile() {
	    /**
	     * 使用TouchEvent来实验是否为移动端
	     */
	    try {
	      document.createEvent("TouchEvent");
	      return true;
	    } catch (e) {
	      return false;
	    }
	  }
	};
	exports["default"] = utils;
	module.exports = exports["default"];

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(12);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(14)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./index.less", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/less-loader/index.js!./index.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(13)();
	// imports


	// module
	exports.push([module.id, ".ph-container {\n  position: relative;\n  width: 100%;\n  height: 100px;\n  font-size: 0;\n  overflow: hidden;\n  /*横向滚动、自动播放、没有indicator的横向滚动*/\n}\n.ph-container .horizontal {\n  height: inherit;\n  transition: all ease .4s;\n}\n.ph-container .horizontal img {\n  height: inherit;\n  display: inline-block;\n}\n.ph-container .vertical {\n  width: 100%;\n  transition: all ease .4s;\n}\n.ph-container .vertical img {\n  width: 100%;\n  display: inline-block;\n}\n.ph-container .img-indicator {\n  position: absolute;\n  width: 200px;\n  bottom: 15px;\n  left: 50%;\n  margin-left: -100px;\n  text-align: center;\n}\n.ph-container .img-indicator i {\n  display: inline-block;\n  margin: 0 5px;\n  border-radius: 20px;\n  width: 10px;\n  height: 10px;\n  background-color: white;\n}\n.ph-container .img-indicator i.indicator-active {\n  background-color: #009998;\n}\n.ph-container .img-vertical-indicator {\n  position: absolute;\n  height: 100px;\n  width: 10px;\n  right: 20px;\n  top: 50%;\n  margin-top: -50px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.ph-container .img-vertical-indicator i {\n  display: block;\n  margin: 3px;\n  border-radius: 20px;\n  width: 10px;\n  height: 10px;\n  background-color: white;\n}\n.ph-container .img-vertical-indicator i.indicator-active {\n  background-color: #009998;\n}\n", ""]);

	// exports


/***/ },
/* 13 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0;

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function createStyleElement() {
		var styleElement = document.createElement("style");
		var head = getHeadElement();
		styleElement.type = "text/css";
		head.appendChild(styleElement);
		return styleElement;
	}

	function createLinkElement() {
		var linkElement = document.createElement("link");
		var head = getHeadElement();
		linkElement.rel = "stylesheet";
		head.appendChild(linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement());
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement();
			update = updateLink.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement();
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				styleElement.parentNode.removeChild(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ])
});
;