/*
	Implémentation du module pattern.
	Ce "service" sert à générer un identifiant unique.
*/
var IdService = (function () {
	// Liste des charactères possible pour le ID (hexadécimal)
	var _possible = 'abcdef0123456789';

	function _genererNouvelId() {
		/*
			Générer un ID de 4 caractères aléatoires parmis les valeurs dans _possible
			https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
			https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
			https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charAt
		*/
	}
	
	/*
		Exporter _genererNouvelId sous le nom 'genererNouvelId'
	*/
	return {
		
	};
})();