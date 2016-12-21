$(document).ready(
	function() {
		$('#btn_addArticle').click(
			function(){
				var frm = $('form');
				var obj = {};
				frm.serializeArray().map(function(x){obj[x.name] = x.value;}); 
				//var formData = JSON.stringify(obj);
				obj.tags = obj.tags.split(',');
				
				$.ajax('api/articles', {
					data : JSON.stringify(obj),
					contentType : 'application/json',
					type : 'POST'
				});

			}
		);
	}
);