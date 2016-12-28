$(document).ready(
	function() {
		$('#btn_addArticle').click(
			function(){
				var frm = $('form');
				var obj = {};
				frm.serializeArray().map(function(x){obj[x.name] = x.value;}); 
				//var formData = JSON.stringify(obj);
				obj.tags = obj.tags.split(',');
				
				var requestType = obj.id ? 'PUT' : 'POST';
				
				$.ajax('/api/articles/' + obj.id, {
					data : JSON.stringify(obj),
					contentType : 'application/json',
					type : requestType,
					success: function() {
						window.location = '/';
					}
				});
			}
		);
	}
);