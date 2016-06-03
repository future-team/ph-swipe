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

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _GestureInstanceJs = require('./GestureInstance.js');

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