# T4

- Nom du groupe : Shoody-Battlers
- Membres du groupe : ZOUAOUI-MAHJOUB Saif, LEROUX Aymeric, WILLEM Théo
- Liens vers les évaluations T4 :
  - BRUCKER Priscillia: <https://git.unistra.fr/-/ide/project/shoody_battlers/but-24-t-4-d/edit/master/-/evaluations/evaluation-Priscillia_Brucker.md>
  - HATT Victor : <https://git.unistra.fr/-/ide/project/shoody_battlers/but-24-t-4-d/edit/master/-/evaluations/evaluation-Victor_Hatt.md>
  - OREKHOV Vladimir: <https://git.unistra.fr/-/ide/project/shoody_battlers/but-24-t-4-d/edit/master/-/evaluations/evaluation-Vladimir_Orekhov.md>
  - VALETTE-SCHUH Alexis: <https://git.unistra.fr/-/ide/project/shoody_battlers/but-24-t-4-d/edit/master/-/evaluations/evaluation-Alexis_Valette--Schuh.md>


## Re;Master

Voici votre texte corrigé :

Re;Master est un rogue-lite de combat et de "deckbuilding".

Re;Master est un jeu pédagogique dans lequel on rencontre et valide les différentes instances qui barrent la route à l’élaboration de votre nouvelle formation. Ce jeu permet au joueur d’apprendre quelles sont les différentes instances qui régissent les formations de l’enseignement supérieur et de comprendre quels sont les objectifs de chacune d’entre elles.

### Captures d'écran

### Procédures d'installation et d'exécution
Pour lancer le jeu il vous faut simplement cliquer sur ce lien : [Re-Master](https://re-master-umber.vercel.app/)  
/!\ Ne rechargez pas la page, vous rencontrez une erreur.

Voici la correction de votre texte :

Si vous désirez récupérer le code du jeu, libre à vous de le télécharger depuis ce dépôt. Pour lancer le projet en local :  
Une fois dans le dossier Projet, exécutez dans votre terminal "npm install" puis exécutez la commande "npm run dev" pour lancer le site internet. Il ne vous reste plus qu'à cliquer sur le lien fourni dans votre terminal.

## Cahier des charges

### Objectifs pédagogiques

Les objectifs pédagogiques sont de permettre au joueur d’apprendre :

- Les différentes étapes dans le processus de création de nouvelle formation diplômante dans l’enseignement supérieur.
  - Sur le chemin de la création de la formation choisie, le joueur va rencontrer les différentes instances dont il est nécessaire d'obtenir l’aval pour continuer.
- Quels sont les principaux prérequis à la mise en place de nouvelles formations.
  - Les actions possèdent des types différents qui peuvent être très efficaces ou très peu efficaces en fonction de ce dont l’instance raffole.

#### Objectifs pédagogiques avancés 

- Certains types de diplôme déjà existants
  - Le joueur peut sélectionner plusieurs niveaux de difficulté qui sont représentés par des noms de diplômes et s’informe donc des différentes formations existantes.

- Certaines formations sont plus compliquées à mettre en place que d’autres.
  - Les niveaux de difficulté correspondent au niveau de difficulté de la vie réelle ; le DU est plus facile à créer qu’une licence ou un master.

### Description des fonctionnalités

##### Rappel principe du rogue Lite : 
Le genre de jeu rogue-lite implique l'échec du joueur comme une mécanique presque inévitable dans un jeu. À chaque échec, le joueur a pu apprendre de nouvelles informations qui lui seront bénéfiques au prochain essai et obtient de nouvelles ressources qui rendront la prochaine tentative plus simple.

#### Simulation
Le joueur incarne un jeune professeur désireux de faire adopter sa nouvelle formation auprès des différentes instances. Il possède :

- Une barre de motivation qui est conservée (en l’état) entre chaque rencontre.
- 4 actions différentes, chacune coûte de la motivation, seule une action est utilisable par tour.
- Un bouton pour passer un tour coûtant de la motivation.

Les actions sont composées de :

- Nom : le nom de l'action
- Types : Locaux, enseignant, maquettes pédagogiques, attractivité.
- Montant de validation : Quantité de validation à donner au boss.
- Coût de motivation : Utiliser une action fait perdre de la motivation au joueur d’un montant équivalent au coût de l’action.
- Temps de rechargement : Après avoir été utilisée, une action ne peut plus être utilisée pendant autant de tours que l’indique son temps de rechargement.
- Description : Des informations didactiques sur le type de la action.

Les instances :

- 4 instances différentes : M. Zimmerman, l’IUT, CFVU, CA.
- Une barre de validation que l'on doit descendre à 0 pour valider l'instance
- Faible à un certain type d’action.

Les rencontres :

- Au nombre de 4, une par instance.
- Après une rencontre, si l'instance est validée, le joueur obtient de nouvelles actions (jusqu’à épuisement de nouvelles actions).
- Après chaque rencontre, le joueur peut modifier les 4 actions à sa disposition parmi celles qu’il a débloquées.

#### Interface

L'interface est constituée des éléments suivants :

- Une image de l’instance à valider
- La barre de validation de l’instance
- Les 4 actions du joueur
- Un bouton pour passer un tour
- La barre de motivation du joueur

Après chaque rencontre :

- Un bouton pour lancer la prochaine rencontre
- La liste de toutes les actions découvertes (pour sélectionner celles voulues pour la prochaine rencontre)
- Les actions découvertes à la fin de la rencontre


#### Actions du joueur
Le joueur peut : 
- Pendant une rencontre : 
  - Cliquer sur une action pour la déclencher
  - Cliquer sur passer son tour
- Entre les rencontres :
  - Visualiser les actions obtenues grâce à la validation de la rencontre
  - Visualiser toutes les actions obtenues
  - Sélectionner les actions voulues pour la prochaine rencontre
  - Lancer la prochaine rencontre


### Scénarios

Lorsque la partie est lancée, le joueur tombe nez à nez face à M. Zimmermann qui constitue la première instance à valider. Après l'avoir battu, le joueur obtient de nouvelles actions. S'il les utilise, il a une chance de battre la prochaine instance, sinon il perd et doit recommencer la partie. Le jeu n'a pas de fin en soi, mais un schéma se répète : 
- battre les 4 instances dans cet ordre : 
  - M. Zimmermann -> l'IUT -> le CFVU -> le CA 

Dans l'idéal, ce schéma se répète sur 4 niveaux de difficulté que nous n'avons pas le temps d'implémenter ici.

### Contraintes de développement

Le projet est développé en ReactJs avec Vite.
Pour heberger le site web sur lequel jouer nous utilisons un dépot github couplé avec vercel.

### Fonctionnalités et scénarios avancés

Les actions : 
- Ajout d’effets supplémentaires tels que des effets passifs sur plusieurs tours, l’amélioration temporaire d’autres actions, gain de motivation, etc.
- Un niveau, impactant la puissance des effets, les coûts en motivation, et/ou le temps de recharge
- Certaines actions sont spécifiques à certains types et donc certaines synergies ne sont possibles qu’avec certains types d’actions
- Les actions sélectionnées avant une rencontre sont présélectionnées avant chaque future rencontre

Rencontres : 
- Après les rencontres, les actions sont déterminées de manière aléatoire plutôt que de suivre un ordre spécifique
- Après les rencontres, le joueur a le choix entre améliorer le niveau d'une action ou obtenir une nouvelle action

Niveaux de difficulté : 
- Le jeu propose plusieurs niveaux de difficulté impactant la valeur de la barre de validation de l’ennemi
- Les différentes améliorations sont conservées entre les niveaux de difficulté (et donc entre les parties)


