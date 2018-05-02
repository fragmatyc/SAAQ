$(document).ready(function () {
	$('#btnValider').click(function () {
		$('#panelInstruction').fadeOut(function () {
			$('#panelValidation').fadeIn(function () {
				var1ExistsAndIs10();
				var2IsArrayContains3ItemsWithProperValues();
				fnExistsAndIsAFunction();
				var3ExistsAndProperlyInit();
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

function var1ExistsAndIs10() {
	try {
		if (var1 === 10) {
			setResultItem('var1ExistsAndIs10', 'La variable <code>var1</code> existe et est égale à <code>10</code>.', true);
		} else {
			setResultItem('var1ExistsAndIs10', 'La variable <code>var1</code> existe, mais n\'est pas égale à <code>10</code>.');
		}
	} catch (ex) {
		setResultItem('var1ExistsAndIs10', 'La variable <code>var1</code> n\'existe pas.');
	}
}

function var2IsArrayContains3ItemsWithProperValues() {
	try {
		if (var2 && Array.isArray(var2)) {
			if (var2[0] === 1 && var2[1] === 2 && var2[2] === 3) {
				setResultItem('var2IsArrayContains3ItemsWithProperValues', 'La variable <code>var2</code> existe et est égale à <code>[1, 2, 3]</code>.', true);
			} else {
				setResultItem('var2IsArrayContains3ItemsWithProperValues', 'La variable <code>var2</code> existe et est un tableau, mais ne contient pas les bonnes valeurs.');
			}
		} else {
			setResultItem('var2IsArrayContains3ItemsWithProperValues', 'La variable <code>var2</code> existe, mais n\'est pas un tableau.');
		}
	} catch (ex) {
		setResultItem('var2IsArrayContains3ItemsWithProperValues', 'La variable <code>var2</code> n\'existe pas.');
	}
}

function fnExistsAndIsAFunction() {
	try {
		if (fn && typeof(fn) === 'function') {
			if (getDeclaredFnName(fn) !== 'fn') {
				setResultItem('fnExistsAndIsAFunction', 'La variable <code>fn</code> existe et est une fonction anonyme.', true);
			} else {
				setResultItem('fnExistsAndIsAFunction', 'La variable <code>fn</code> n\'existe pas. C\'est une fonction nommée.');
			}
		} else {
			setResultItem('fnExistsAndIsAFunction', 'La variable <code>fn</code> existe, mais n\'est pas une fonction.');
		}
	} catch (ex) {
		setResultItem('fnExistsAndIsAFunction', 'La variable <code>fn</code> n\'existe pas.');
	}
}

function var3ExistsAndProperlyInit() {
	try {
		if (var3 && typeof(var3) === 'object') {
			if (var3.prop !== undefined) {
				if (var3.prop === 'Bonjour') {
					setResultItem('var3ExistsAndProperlyInit', 'La variable <code>var3</code> est un objet et est bien initialisée.', true);
				} else {
					setResultItem('var3ExistsAndProperlyInit', 'La propriété <code>prop</code> de <code>var3</code> n\'est pas égale à <code>\'Bonjour\'</code>.');
				}
			} else {
				setResultItem('var3ExistsAndProperlyInit', 'La variable <code>var3</code> n\'a pas de propriété <code>prop</code>.');
			}
		} else {
			setResultItem('var3ExistsAndProperlyInit', 'La variable <code>var3</code> n\'est pas un objet.');
		}
	} catch (ex) {
		setResultItem('var3ExistsAndProperlyInit', 'La variable <code>var3</code> n\'existe pas.');
	}
}

if (!Array.isArray) {
  Array.isArray = function(arg) {
    return Object.prototype.toString.call(arg) === '[object Array]';
  };
}

function getDeclaredFnName(fnHandle) {
	try {
	var match = fnHandle.toString().match(/^function ([^\s]+)\(\)/);
	return match ? match[1] : null; } catch (ex) {console.log(ex);}
}