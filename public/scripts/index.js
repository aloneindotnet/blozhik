$(document).ready(
	function() {
		$('.btn_delete').click(
			function(){
				var id = $(this).data('id');
				var self = this;
				
				$.ajax('/api/articles/' + id, {
					type : 'DELETE',
					success: function() {
						$(self).parents('.panel').remove();
					}
				});
			}
		);
	}
);