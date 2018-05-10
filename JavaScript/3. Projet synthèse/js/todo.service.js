var ToDoService = (function () {
	var _todos = null;
	
	function _chargerLesToDos(callback) {
		/*
			Si _todos est null:
				Utiliser la méthode getJSON() http://api.jquery.com/jquery.getjson/
				Les données JSON se trouvent dans '/data/data.json'.
				Stocker les ToDos dans _todos
				appeler le callback en passant les todos en paramètre
			Sinon, appeler directement callback avec les todos en paramètre
		*/
	}
	
	return {
		chargerLesToDos: _chargerLesToDos
	};
})();