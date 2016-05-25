/**
 * Created by slashhuang on 16/5/25.
 */

'use strict';

exports.__esModule = true;

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
            direction: _react.PropTypes.string, //默认横向滚动
            autoPlay: _react.PropTypes.boolean, //默认不自滚动
            loop: _react.PropTypes.boolean, //默认不循环
            containerClassName: _react.PropTypes.string, //滑动容器的className值
            /**
             * 以下为可选值
             */
            indicatorClassName: _react.PropTypes.string, //滑动容器下方小圆点容器className值
            activeClass: _react.PropTypes.string //滑动容器下方小圆点激活的className值
        },
        enumerable: true
    }, {
        key: 'defaultProps',
        value: {
            direction: 'horizontal', //默认横向滚动
            autoPlay: false, //默认不自滚动
            loop: false, //默认不循环
            containerClassName: 'img-list' //滑动容器的className值
        },
        enumerable: true
    }]);

    function PhSwipe() {
        _classCallCheck(this, PhSwipe);

        _Component.call(this);
    }

    PhSwipe.prototype.componentDidMount = function componentDidMount() {
        var _props = this.props;
        var children = _props.children;

        var other = _objectWithoutProperties(_props, ['children']);

        this.node = _reactDom.findDOMNode(this.refs['ph-swipe']);
        new _GestureInstanceJs2['default'](this.node, other);
    };

    PhSwipe.prototype.render = function render() {
        return _react2['default'].createElement(
            'div',
            { ref: 'ph-swipe' },
            this.props.children
        );
    };

    return PhSwipe;
})(_react.Component);

exports['default'] = PhSwipe;
module.exports = exports['default'];