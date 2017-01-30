'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Articles = function (_React$Component) {
	_inherits(Articles, _React$Component);

	function Articles() {
		_classCallCheck(this, Articles);

		return _possibleConstructorReturn(this, (Articles.__proto__ || Object.getPrototypeOf(Articles)).apply(this, arguments));
	}

	_createClass(Articles, [{
		key: 'deleteItem',
		value: function deleteItem(id) {
			var _this = this;
			$.ajax('/api/articles/' + id, {
				type: 'DELETE',
				success: function success() {
					var state = _this.props.data;
					for (var i = 0; i < state.length; i++) {
						if (state[i]._id == id) {
							state.splice(i, 1);
							break;
						}
					}
					_this.setState(state);
				}
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this = this;
			var articles = this.props.data.map(function (item, i) {
				return React.createElement(Article, { key: item._id, data: item, onRemove: _this.deleteItem.bind(_this) });
			});
			return React.createElement(
				'div',
				null,
				articles
			);
		}
	}]);

	return Articles;
}(React.Component);

var Article = function (_React$Component2) {
	_inherits(Article, _React$Component2);

	function Article() {
		_classCallCheck(this, Article);

		return _possibleConstructorReturn(this, (Article.__proto__ || Object.getPrototypeOf(Article)).apply(this, arguments));
	}

	_createClass(Article, [{
		key: 'removeItem',
		value: function removeItem() {
			this.props.onRemove(this.props.data._id);
		}
	}, {
		key: 'render',
		value: function render() {
			var article = this.props.data;
			return React.createElement(
				'div',
				{ className: 'panel panel-default' },
				React.createElement(
					'div',
					{ className: 'panel-heading' },
					React.createElement(
						'span',
						null,
						React.createElement(
							'a',
							{ href: '/articles/{article._id}' },
							article.title
						),
						React.createElement(
							'div',
							{ className: 'pull-right' },
							React.createElement(
								'a',
								{ className: 'label label-success', href: '/articles/edit/{article._id}' },
								'Edit'
							),
							React.createElement(
								'a',
								{ className: 'label label-warning btn_delete', onClick: this.removeItem.bind(this), 'data-id': '{article._id}' },
								'Delete'
							)
						)
					)
				),
				React.createElement(
					'div',
					{ className: 'panel-body' },
					article.text,
					React.createElement('hr', null),
					article.tags.map(function (item, i) {
						return React.createElement(Tag, { key: i, data: item });
					})
				)
			);
		}
	}]);

	return Article;
}(React.Component);

var Tag = function (_React$Component3) {
	_inherits(Tag, _React$Component3);

	function Tag() {
		_classCallCheck(this, Tag);

		return _possibleConstructorReturn(this, (Tag.__proto__ || Object.getPrototypeOf(Tag)).apply(this, arguments));
	}

	_createClass(Tag, [{
		key: 'render',
		value: function render() {
			return React.createElement(
				'a',
				{ className: 'label label-default', href: '' },
				this.props.data
			);
		}
	}]);

	return Tag;
}(React.Component);

$(document).ready(function () {

	$.ajax('/api/articles/', {
		type: 'GET',
		success: function success(response) {
			var json = JSON.stringify(response);
			ReactDOM.render(React.createElement(Articles, { data: response }), document.getElementById('container'));
		}
	});
});
