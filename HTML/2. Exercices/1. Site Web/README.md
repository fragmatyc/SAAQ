# Exercice 1 - Mise en place d'un site web
Cet exercice a pour but de vous familiariser avec les concepts derrière une page web ainsi que le protocol HTTP en général.

_Outils nécessaires_
* Git
* Notepad++
* Un fureteur
* Node.js
* Putty

_Connaissances acquises_
1. Comment créer un serveur web
2. Comment fonctionne un serveur web
3. Comment fonctionnent les requêtes HTTP

## 1.a - Créer un site web
1. Installer un [client Git](https://git-scm.com/download/win)
2. Cloner le dépôt de la formation `git clone https://github.com/EzoQC/SAAQ.git`
3. Installer [Node.js](https://nodejs.org/en/download/current/) 
   * Télécharger les binaires en ZIP pour Windows
   * Extraire dans `C:\node-v9.5.0-win-x86`
4. Modifier la variable d'environnement `PATH` pour y ajouter `C:\node-v9.5.0-win-x86`
5. Ouvrir une invite de commande et exécuter `npm install -g http-server`
6. Naviguer vers le répertoire du dépôt git de la formation, sous ce répertoire `/HTML/2. Exercices/1. Site Web`
7. Créer un fichier `index.html` et y écrire `Hello World!`, puis sauvegarder.
8. Exécuter `http-server`
9. Ouvrir un navigateur à l'adresse http://127.0.0.1:8080/

## 2.b - Créer une requête sans navigateur
1. Télécharger le client SSH [Putty](https://www.chiark.greenend.org.uk/~sgtatham/putty/latest.html)
2. Exécuter Putty
   * Dans le champ `Host Name (or IP address)`, taper l'adresse IP du serveur web (ex.: `10.4.120.108`)
   * Dans le champ `Port`, taper le numéro du port sur lequel `http-server` écoute (ex.: `8080`)
   * Dans `Connection type`, choisir l'option `Raw`
   * Dans `Close window on exit`, choisir l'option `Never`
3. Cliquer sur `Open`
4. Dans l'invite de commande, taper `GET /` et appuyer **2 fois** sur `ENTER`
