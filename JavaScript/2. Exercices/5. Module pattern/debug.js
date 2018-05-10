var DebugTools = (function () {
	var _success = true;
	
	function _onInit() {
		$(document).ready(function () {
			$('#btnValider').click(function () {
				$('#panelInstruction').fadeOut(function () {
					$('#panelValidation').fadeIn(function () {
						applyValidations();
					});
				});
			});
		});
	}
	
	function _setResultItem(id, message, success) {
		var item = $('#' + id);
		var icon = null;
		var itemClass = null;
		
		if (success === true) {
			icon = $('<i class="fa fa-check">');
			itemClass = 'list-group-item-success';
		} else {
			icon = $('<i class="fa fa-times">');
			itemClass = 'list-group-item-danger';
		}
			
		icon.css('margin-right', '1em');
		item.empty();
		item.addClass(itemClass);
		item.append(icon);
		
		var msgContainer = $('<span>');
		msgContainer.html(message);
		
		item.append(msgContainer);
	}

	_onInit();
	
	return {
		setResultItem: _setResultItem,
		results: {
			success: _success
		}
	};
})();