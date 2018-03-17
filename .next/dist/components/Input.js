'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = 'C:\\Workspace\\wordCheck\\components\\Input.js';


var Input = function (_React$Component) {
    (0, _inherits3.default)(Input, _React$Component);

    function Input() {
        (0, _classCallCheck3.default)(this, Input);

        var _this = (0, _possibleConstructorReturn3.default)(this, (Input.__proto__ || (0, _getPrototypeOf2.default)(Input)).call(this));

        _this.state = {
            word: '',
            definition: ''
        };
        _this.handleChange = _this.handleChange.bind(_this);
        _this.fetchData = _this.fetchData.bind(_this);
        return _this;
    }

    (0, _createClass3.default)(Input, [{
        key: 'handleChange',
        value: function handleChange(event) {
            this.setState({ word: event.target.value });

            setTimeout(this.fetchData, 300);
        }
    }, {
        key: 'fetchData',
        value: function fetchData() {
            var _this2 = this;

            if (this.state.word.length != 0) {
                _axios2.default.get("http://api.wordnik.com:80/v4/word.json/" + this.state.word + "/definitions?limit=200&includeRelated=true&useCanonical=false&includeTags=false&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5").then(function (response) {
                    if (_this2.state.word.length == 0) {
                        _this2.setState({ definition: '' });
                    } else {
                        if (response.data[0] && response.data[0].text) {
                            _this2.setState({ definition: response.data[0].text });
                        } else {
                            _this2.setState({ definition: "There is no matching." });
                        }
                    }
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { className: 'row', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 40
                }
            }, _react2.default.createElement('div', { className: 'col-md-6', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 41
                }
            }, _react2.default.createElement('div', { className: 'card text-white bg-dark mb-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                }
            }, _react2.default.createElement('div', { className: 'card-header', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 43
                }
            }, 'Type your word'), _react2.default.createElement('div', { className: 'card-body', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 44
                }
            }, _react2.default.createElement('div', { className: 'form-group', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 45
                }
            }, _react2.default.createElement('input', { className: 'form-control form-control-lg',
                type: 'text', placeholder: 'Word...', id: 'inputLarge',
                value: this.state.word,
                onChange: this.handleChange,
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 46
                }
            }))))), _react2.default.createElement('div', { className: 'col-md-6', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 55
                }
            }, _react2.default.createElement('div', { className: 'card text-white bg-dark mb-3', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 56
                }
            }, _react2.default.createElement('div', { className: 'card-header', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 57
                }
            }, 'Word definition'), _react2.default.createElement('div', { className: 'card-body', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 58
                }
            }, _react2.default.createElement('h4', { className: 'card-title', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                }
            }, ' ', this.state.word, ' '), _react2.default.createElement('p', { className: 'card-text', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                }
            }, ' ', this.state.definition, ' ')))));
        }
    }]);

    return Input;
}(_react2.default.Component);

exports.default = Input;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHNcXElucHV0LmpzIl0sIm5hbWVzIjpbImF4aW9zIiwiSW5wdXQiLCJzdGF0ZSIsIndvcmQiLCJkZWZpbml0aW9uIiwiaGFuZGxlQ2hhbmdlIiwiYmluZCIsImZldGNoRGF0YSIsImV2ZW50Iiwic2V0U3RhdGUiLCJ0YXJnZXQiLCJ2YWx1ZSIsInNldFRpbWVvdXQiLCJsZW5ndGgiLCJnZXQiLCJ0aGVuIiwicmVzcG9uc2UiLCJkYXRhIiwidGV4dCIsIlJlYWN0IiwiQ29tcG9uZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7Ozs7Ozs7SSxBQUVEO21DQUNGOztxQkFBYzs0Q0FBQTs7a0lBRVY7O2NBQUEsQUFBSztrQkFBUSxBQUNILEFBQ047d0JBRkosQUFBYSxBQUVHLEFBRWhCO0FBSmEsQUFDVDtjQUdKLEFBQUssZUFBZSxNQUFBLEFBQUssYUFBTCxBQUFrQixLQUF0QyxBQUNBO2NBQUEsQUFBSyxZQUFZLE1BQUEsQUFBSyxVQUFMLEFBQWUsS0FQdEIsQUFPVjtlQUNIOzs7OztxQyxBQUVZLE9BQU8sQUFDaEI7aUJBQUEsQUFBSyxTQUFTLEVBQUMsTUFBTSxNQUFBLEFBQU0sT0FBM0IsQUFBYyxBQUFvQixBQUVsQzs7dUJBQVcsS0FBWCxBQUFnQixXQUFoQixBQUEyQixBQUM5Qjs7OztvQ0FFVzt5QkFDUjs7Z0JBQUksS0FBQSxBQUFLLE1BQUwsQUFBVyxLQUFYLEFBQWdCLFVBQXBCLEFBQThCLEdBQUcsQUFDN0I7Z0NBQUEsQUFBTSxJQUFJLDRDQUE0QyxLQUFBLEFBQUssTUFBakQsQUFBdUQsT0FBakUsQUFBd0UsNklBQXhFLEFBQ0MsS0FBSyxVQUFBLEFBQUMsVUFBYSxBQUNoQjt3QkFBSSxPQUFBLEFBQUssTUFBTCxBQUFXLEtBQVgsQUFBZ0IsVUFBcEIsQUFBOEIsR0FBRyxBQUM3QjsrQkFBQSxBQUFLLFNBQVMsRUFBRSxZQUFoQixBQUFjLEFBQWMsQUFDL0I7QUFGRCwyQkFHSyxBQUNEOzRCQUFJLFNBQUEsQUFBUyxLQUFULEFBQWMsTUFBTSxTQUFBLEFBQVMsS0FBVCxBQUFjLEdBQXRDLEFBQXlDLE1BQU0sQUFDM0M7bUNBQUEsQUFBSyxTQUFTLEVBQUUsWUFBWSxTQUFBLEFBQVMsS0FBVCxBQUFjLEdBQTFDLEFBQWMsQUFBK0IsQUFDaEQ7QUFGRCwrQkFFTyxBQUNIO21DQUFBLEFBQUssU0FBUyxFQUFFLFlBQWhCLEFBQWMsQUFBYyxBQUMvQjtBQUNKO0FBQ0o7QUFaRCxBQWFIO0FBQ0o7Ozs7aUNBRVEsQUFDTDttQ0FDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjthQUFBLGtCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUEsQUFDSTtBQURKOytCQUNJLGNBQUEsU0FBSyxXQUFMLEFBQWU7OEJBQWY7Z0NBQUE7QUFBQTtlQURKLEFBQ0ksQUFDQSxtQ0FBQSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjt3REFDVyxXQUFQLEFBQWlCLEFBQ2pCO3NCQURBLEFBQ0ssUUFBTyxhQURaLEFBQ3dCLFdBQVUsSUFEbEMsQUFDcUMsQUFDckM7dUJBQU8sS0FBQSxBQUFLLE1BRlosQUFFa0IsQUFDbEI7MEJBQVUsS0FIVixBQUdlOzs4QkFIZjtnQ0FOcEIsQUFDSSxBQUNJLEFBRUksQUFDSSxBQUNJLEFBU2hCO0FBVGdCO29DQVNoQixjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBLEFBQ0k7QUFESjsrQkFDSSxjQUFBLFNBQUssV0FBTCxBQUFlOzhCQUFmO2dDQUFBO0FBQUE7ZUFESixBQUNJLEFBQ0Esb0NBQUEsY0FBQSxTQUFLLFdBQUwsQUFBZTs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQSxRQUFJLFdBQUosQUFBYzs4QkFBZDtnQ0FBQTtBQUFBO2VBQTZCLFVBQUEsQUFBSyxNQUFsQyxBQUF3QyxNQUQ1QyxBQUNJLEFBQ0Esc0JBQUEsY0FBQSxPQUFHLFdBQUgsQUFBYTs4QkFBYjtnQ0FBQTtBQUFBO2VBQTJCLFVBQUEsQUFBSyxNQUFoQyxBQUFzQyxZQXJCMUQsQUFDSSxBQWVJLEFBQ0ksQUFFSSxBQUVJLEFBTXZCOzs7OztFQS9EZSxnQkFBTSxBLEFBa0UxQjs7a0JBQUEsQUFBZSIsImZpbGUiOiJJbnB1dC5qcyIsInNvdXJjZVJvb3QiOiJDOi9Xb3Jrc3BhY2Uvd29yZENoZWNrIn0=