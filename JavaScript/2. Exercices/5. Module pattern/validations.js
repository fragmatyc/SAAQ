function applyValidations() {
	validateModuleIsFound();
	validateModuleExposesCompterMots();
	validateMethodeAlgo();
}

function validateModuleIsFound() {
	try {
		if (StringUtils && typeof(StringUtils) === 'object') {
			DebugTools.setResultItem(
				'moduleIsFound', 
				'Le module <code>StringUtils</code> existe.',
				DebugTools.results.success);
		} else {
			DebugTools.setResultItem(
				'moduleIsFound', 
				'<code>StringUtils</code> n\'est pas un module.');
		}
	} catch (ex) {
		DebugTools.setResultItem(
			'moduleIsFound', 
			'Le module <code>StringUtils</code> n\'existe pas.');
	}
}

function validateModuleExposesCompterMots() {
	try {
		if (StringUtils && typeof(StringUtils.compterMots) === 'function') {
			
			if (StringUtils.compterMots.length === 1) {
				DebugTools.setResultItem(
					'methodIsFound', 
					'La méthode <code>compterMots()</code> existe dans le module <code>StringUtils</code>.',
					DebugTools.results.success);
			} else {
				DebugTools.setResultItem(
					'methodIsFound', 
					'La méthode <code>compterMots()</code> doit accepter un seul paramètre.');
			}
		} else {
			DebugTools.setResultItem(
				'methodIsFound', 
				'La méthode <code>compterMots()</code> n\'existe pas dans le module <code>StringUtils</code>.');
		}
	} catch (ex) {
		DebugTools.setResultItem(
			'methodIsFound', 
			'Le module <code>StringUtils</code> n\'existe pas.');
	}
}

function validateMethodeAlgo() {
	try {
		if (StringUtils.compterMots('Bonjour le monde') === 3) {
			if (StringUtils.compterMots() === 0 && StringUtils.compterMots(null) === 0) {
				DebugTools.setResultItem(
					'algoIsGood', 
					'L\'algorithm est bon.',
					DebugTools.results.success);
			} else {
				DebugTools.setResultItem(
					'algoIsGood', 
					'L\'algorithme ne retourne pas <code>0</code> si le paramètre est manquant ou null.');
			}
		} else {
			DebugTools.setResultItem(
				'algoIsGood', 
				'L\'algorithme ne retourne pas le bon résultat.');
		}
	} catch (ex) {
		DebugTools.setResultItem(
			'algoIsGood', 
			'Une erreur s\'est produite lors de l\'appel de la fonction <code>compterMots()</code>');
		console.error(ex);
	}
}