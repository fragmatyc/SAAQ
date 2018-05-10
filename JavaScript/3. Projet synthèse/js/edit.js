/*
	Implémentation du module pattern.
	Ce "contrôleur" sert à gérer les événements de la partie
	de création d'un nouveau ToDo, dans la vue index.html
*/
var EditTodoController = (function () {
	
	function _initialiserLaVue() {
		_initialiserEvenementBoutonAjouter();
	}
	
	function _initialiserEvenementBoutonAjouter() {
		/*
			Initialiser l'événement click sur le bouton avec le ID btnAjouter
			Appeler _gererClickBoutonAjouter()
		*/
	}
	
	function _gererClickBoutonAjouter() {
		/*
			Créer un objet litéral avec les valeurs des champs
			
			Propriétés:
				id est le résultat de genererNouvelId() du module IdService
				description est la valeur du champ avec ID editDescription
				priorite est la valeur du champs avec ID editPriorite
				fait est à false
				
			Appeler sauvegarder() de ToDoService pour sauvegarder le todo
			Appeler rafraichirLaVue() de ListingController pour afficher les todos à l'écran
			
			Vider le champs editDescription.
			Remettre editPriorite à 1			
		*/
	}
	
	/* 
		Exporter _initialiserLaVue sous le nom 'initialiserLaVue' 
	*/
	return {
		
	};
})();