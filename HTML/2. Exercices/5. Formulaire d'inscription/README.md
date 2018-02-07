# Excercice 5 - Formulaire d'inscription
Cet exercice a pour but de vous familiariser avec les différents type de champs d'un formulaire et de démontrer la méthode pour appliquer des validations sur les champs.

_Outils nécessaires_
* Git
* Notepad++
* Un fureteur
* Node.js

_Connaissances acquises_
1. Les champs de type nombre, courriel, boutons radio, fichier et les zone de texte multiligne.
2. Les boutons de réinitialisation de formulaire.
3. Les validations HTML5 pour les champs requis et les valeurs minimales et maximales

## 5.a - Création du formulaire d'inscription
1. Créer un squelette de document HTML5
2. Créer une section globale pour envelopper le formulaire
3. Créer un titre de niveau 1 dans la section intitulé _Inscription_
4. Créer un formulaire et y ajouter :
   * Un champ de type texte avec son libellé **Prénom**
      * Obligatoire
      * 20 caractères et moins.
   * Un champ de type texte avec son libellé **Nom de famille**
      * Obligatoire
      * 20 caractères et moins.
   * Un champ de type date avec son libellé **Date de naissance**
      * Obligatoire
      * Empêcher la sélection d'une date ultérieur à 2000-01-01
   * Deux champs radio, un libellé **Homme**, l'autre **Femme**
   * Un champ de type fichier à téléverser avec son libellé **Curriculum vitae**
   * Un champ de type nombre avec son libellé **Numéro d'assurance sociale**
   * Un champ de type courriel avec son libellé **Adresse courriel**
   * Une zone de texte multiligne avec son libellé **Description**
   * Deux boutons côtes-à-côtes : 
      * Un de type envoie du formulaire avec le libellé **S'inscrire**
      * Un de type réinitialisation du formulaire avec le libellé **Annuler**
      
Note : 
* Les libellés et les champs doivent être liés avec les propriétés `for` et `id`
* Les champs doivent apparaitre un sous l'autre, **sauf les boutons radio** (astuce : utiliser un `div`)
