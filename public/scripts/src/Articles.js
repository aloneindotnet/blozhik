class Articles extends React.Component {
	
	deleteItem(id) {
		var _this = this;
		$.ajax('/api/articles/' + id, {
			type : 'DELETE',
			success: function() {
				var state = _this.props.data;
				for(var i = 0; i < state.length; i++) {
					if(state[i]._id == id) {
						state.splice(i, 1);
						break;
					}
				}
				_this.setState(state);
			}
		});

	};
	
	render() {
		var _this = this;
		var articles = this.props.data.map(function (item, i){
				return <Article key={item._id} data={item} onRemove={_this.deleteItem.bind(_this)}/>
			});
		return <div>{articles}</div>
	}
}

class Article extends React.Component {
	
	removeItem() {
		this.props.onRemove(this.props.data._id);
	};
	
	render() {
		var article = this.props.data;
		return 	<div className="panel panel-default">
					<div className="panel-heading">
						<span>
							<a href="/articles/{article._id}">{article.title}</a>
							<div className="pull-right">
								<a className="label label-success" href="/articles/edit/{article._id}">Edit</a> 
								<a className="label label-warning btn_delete" onClick={this.removeItem.bind(this)} data-id="{article._id}">Delete</a>
							</div>
						</span>
					</div>
					<div className="panel-body">
						{article.text}
						<hr/>
						{article.tags.map(function (item, i){
							return <Tag key={i} data={item}/>
						})}
					</div>
				</div>
	}
}

class Tag extends React.Component {
	render() {
		return <a className="label label-default" href="">{this.props.data}</a> 
	}
}

$(document).ready(
	function() {
		
		$.ajax('/api/articles/', 
		{
			type : 'GET',
			success: function(response) {
				var json = JSON.stringify(response);
				ReactDOM.render(
				  <Articles data={response}/>,
				  document.getElementById('container')
				);
			}
		});
	}
);
