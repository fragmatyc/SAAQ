/*
	Implémentation du module pattern.
	Ce "contrôlleur" sert à gérer les événements de l'utilisateur
	de la section "listing" dans la vue "index.html".
*/
var ListingController = (function () {
	var _listeDesToDosAffichesDansTableau = [];
	
	/*
		Cette méthode permet d'initialiser les événements de la vue ainsi que les données
	*/
	function _initialiserLaVue() {
		_chargerLesToDos();
	}
	
	function _chargerLesToDos() {
		/*	
			Appeler ToDoService.chargerLesToDos();
			Appeler _afficherLesTodosDansLeTableau() depuis le callback.
		*/
	}
		
	function _afficherLesTodosDansLeTableau() {
		/*
			Vider le contenu du tbody avec le id todoTableBody (http://api.jquery.com/empty/)
			Trier les ToDos par ordre de priorité, puis par ID (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
			Boucler dans _listeDesToDosAffichesDansTableau (for ... of ...)
			Créer un <tr> pour chaque todo
			Créer un <td> pour :
				* Case à cocher fait/pas fait (ajouter data-todo-id) (checked si fait)
				* ID du ToDo
				* Description du ToDo
				* La priorité du ToDo
				* Bouton supprimer le ToDo <button class="btn btn-danger"><i class="fa fa-trash-o"></i></button> (ajouter data-todo-id)
				* Si un ToDo est "fait" (todo.fait === true), alors ajouter la class 'table-success' au <tr>
			Ajouter le <tr> au tableau
			Initialiser l'événement click sur la case à cocher
			Initialiser l'événement click sur le bouton supprimer
		*/
	}
	
	function _initialiserEvenementCasesACocherFait(todo) {
		/*
			Utiliser la propriété "id" du todo en paramètre pour retrouver la case à cocher
				Indice : Se baser sur data-todo-id (https://api.jquery.com/category/selectors/attribute-selectors/)
			Appeler _gererEvenementClickSurCaseACocherFait()
		*/
	}
	
	function _initialiserEvenementBoutonsSupprimer(todo) {
		/*
			Utiliser la propriété "id" du todo en paramètre pour retrouver le bouton supprimer
				Indice : Se baser sur data-todo-id (https://api.jquery.com/category/selectors/attribute-selectors/)
			Appeler _gererEvenementClickSurCaseACocherFait()
		*/
	}
	
	function _gererEvenementClickSurCaseACocherFait(todo) {
		/*
			Modifier le todo pour inverser la valeur de "fait"
				Astuce : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
			appeler _afficherLesTodosDansLeTableau()
		*/
	}
	
	function _gererEvenementClickSurBoutonSupprimer(todo) {
		/*
			Retirer le ToDo avec le id correspondant de _listeDesToDosAffichesDansTableau
				Astuce : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
						 https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
			appeler _afficherLesTodosDansLeTableau()
		*/
	}
		
		
	/*
		Exporter :
			_chargerLesToDos sous le nom 'rafraichirLaVue' 
			_initialiserLaVue sous le nom 'initialiserLaVue'
	*/
	return { 
	
	};
})();