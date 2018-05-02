var _latestLog = false;
	
$(document).ready(function () {
	var backupLogger = console.log;
	console.log = function (textToLog) { 
		_latestLog = textToLog; 
		backupLogger(textToLog); 
	}
	
	$('#btnValider').click(function () {
		$('#panelInstruction').fadeOut(function () {
			$('#panelValidation').fadeIn(function () {
				validateFunctionExists();
				callFunction();
				validateLog();
			});
		});
	});
});

function setResultItem(id, message, success) {
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


function validateFunctionExists() {
	try {
		if (typeof(direBonjour) === 'function') {
			setResultItem('goodNameValidation', 'La fonction <code>direBonjour</code> existe!', true);
		} else {
			setResultItem('goodNameValidation', 'La fonction <code>direBonjour</code> n\'existe pas...');
		}
	} catch (ex) {
		// typeof(direBonjour) si la fonction n'existe pas lancera une exception
		setResultItem('goodNameValidation', 'La fonction <code>direBonjour</code> n\'existe pas...');
	}
}

function callFunction() {
	try {
		direBonjour();
	} catch(ex) {
		// muted :)
	}
}

function validateLog() {
	if (_latestLog !== 'Bonjour!') {
		setResultItem('loggedProperMessage', 'La fonction <code>direBonjour</code> doit dire <code>Bonjour!</code> dans la console.');
	} else {
		setResultItem('loggedProperMessage', 'La fonction <code>direBonjour</code> journalise correctement!', true);
	}
}