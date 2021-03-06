'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash.get');

var _lodash2 = _interopRequireDefault(_lodash);

var _pure = require('recompose/pure');

var _pure2 = _interopRequireDefault(_pure);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EmailField = function EmailField(_ref) {
    var source = _ref.source,
        _ref$record = _ref.record,
        record = _ref$record === undefined ? {} : _ref$record,
        elStyle = _ref.elStyle;
    return _react2.default.createElement(
        'a',
        { style: elStyle, href: 'mailto:' + (0, _lodash2.default)(record, source) },
        (0, _lodash2.default)(record, source)
    );
};

EmailField.propTypes = {
    addLabel: _react.PropTypes.bool,
    elStyle: _react.PropTypes.object,
    label: _react.PropTypes.string,
    record: _react.PropTypes.object,
    source: _react.PropTypes.string.isRequired
};

var PureEmailField = (0, _pure2.default)(EmailField);

PureEmailField.defaultProps = {
    addLabel: true
};

exports.default = PureEmailField;
module.exports = exports['default'];