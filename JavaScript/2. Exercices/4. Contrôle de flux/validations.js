function applyValidations() {
	validateFunctionExists();
	validateFunctionAcceptsOnly1Param();
	validateAlgo();
}

function validateFunctionExists() {
	try {
		if (logique && typeof(logique) === 'function') {
			DebugTools.setResultItem(
				'fnExists',
				'La fonction <code>logique()</code> existe.',
				DebugTools.results.success);
		} else {
			DebugTools.setResultItem(
				'fnExists',
				'Une référence nommée <code>logique</code> existe, mais n\'est pas une fonction.');
		}
	} catch (ex) {
		DebugTools.setResultItem(
			'fnExists',
			'La fonction <code>logique()</code> n\'existe pas.');
	}
}

function validateFunctionAcceptsOnly1Param() {
	try {
		if (logique.length === 1) {
			DebugTools.setResultItem(
				'validateFunctionAcceptsOnly1Param',
				'La fonction <code>logique()</code> n\'accepte qu\'un seul paramètre.',
				DebugTools.results.success);
		} else {
			DebugTools.setResultItem(
				'validateFunctionAcceptsOnly1Param',
				'La fonction <code>logique()</code> doit accepter un seul paramètre.');
		}
	} catch (ex) {
		DebugTools.setResultItem(
			'validateFunctionAcceptsOnly1Param',
			'La fonction <code>logique()</code> a levée une exception inattendue.');
		console.error(ex);
	}
}

function validateAlgo() {
	try {
		// Cas 1 : Valide
		var caseToTest = [1, 'A', 1, 'Q', 'A', 1, 1, 'B', null, -10, 1, 'A', 'A', 1];
		var expectedResult = ['A', 1, 'A', '*', 1, 'A', 'A', '*', '*', '*', 'A', 1, 1, 'A'];
		var result = logique(caseToTest);
		
		if (!expectedResult.isEqualTo(result)) {
			DebugTools.setResultItem(
				'validateAlgo',
				'La fonction <code>logique()</code> ne retourne pas le résultat attendu.');
		} else {
			// Cas 2 : Paramètre null
			caseToTest = null;
			expectedResult = null;
			
			result = logique(caseToTest);
			
			if (result !== expectedResult) {
				DebugTools.setResultItem(
					'validateAlgo',
					'La fonction <code>logique()</code> ne retourne pas <code>null</code> lorsque le paramètre est invalide.');
			} else {
				// Cas 3 : Paramètre manquant
				result = logique();
				if (result !== expectedResult) {
					DebugTools.setResultItem(
						'validateAlgo',
						'La fonction <code>logique()</code> ne retourne pas <code>null</code> lorsque le paramètre est manquant.');
				} else {
					// Cas 4 : Paramètre String
					caseToTest = '1A1QA11B';
					result = logique(caseToTest);
					
					if (result !== expectedResult) {
						DebugTools.setResultItem(
							'validateAlgo',
							'La fonction <code>logique()</code> ne retourne pas <code>null</code> lorsque le paramètre est une chaîne de char.');
					} else {
						DebugTools.setResultItem(
							'validateAlgo',
							'La fonction <code>logique()</code> a le bon algorithme,',
							DebugTools.results.success);
					}
				}
			}
		}
		

		
		
		
	} catch (ex) {
		DebugTools.setResultItem(
			'validateAlgo',
			'La fonction <code>logique()</code> a levée une exception inattendue.');
		console.error(ex);
	}
}

Array.prototype.isEqualTo = function (array2) {
	var equal = false;
	var i = 0;
	
	try {
		equal = this.length === array2.length;
		
		while (i < this.length && equal) {
			equal = this[i] === array2[i];
			i++;
		}
	} catch (ex) {
		equal = false;
		console.error(ex);
	}
	
	return equal;
}
