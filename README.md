# T4

- Nom du groupe : Shoody-Battler
- Membres du groupe : ZOUAOUI-MAHJOUB Saif, LEROUX Aymeric, WILLEM Théo
- Liens vers les évaluations T4 :
  - BUI Michel : <https://git.unistra.fr/-/ide/project/shoody_battlers/but-24-t-4-d/edit/master/-/evaluations/evaluation-Michel_Bui.md>
  - HIEBER Gaétan : <https://git.unistra.fr/-/ide/project/shoody_battlers/but-24-t-4-d/edit/master/-/evaluations/evaluation-Gaétan_Hieber.md>
  - OULED DIAF Amine : <https://git.unistra.fr/-/ide/project/shoody_battlers/but-24-t-4-d/edit/master/-/evaluations/evaluation-Amine_Ouled Diaf.md >
  - VALLEE Yang : <https://git.unistra.fr/-/ide/project/shoody_battlers/but-24-t-4-d/edit/master/-/evaluations/evaluation-Yang_Vallée.md>


## Re;Master

Re;Master est un rogueLite de combat et “deckbuilding”

Re;Master est un jeu pédagogique dans lequel on rencontre et valide les différentes instances qui barre la route à l’élaboration de votre nouvelle formation. Ce jeu permet au joueur d’apprendre quelles sont les différentes instances qui régissent les formations de l’enseignement supérieur et de comprendre quels sont les objectifs de chacune d’entre elles.

### Captures d'écran

### Procédures d'installation et d'exécution
Pour lancer le jeu il vous faut simplement cliquer sur ce lien

Si vous désirez récuperer le code du jeu libre à vous de le télécharger sur depuis ce dépôt

## Cahier des charges

### Objectifs pédagogiques

Les objectifs pédagogiques sont de permettre au joueur d’apprendre :
- Les différentes étapes dans le processus de création de nouvelle formation diplômante dans l’enseignement supérieur.
  - Sur le chemin de la création de la formation choisi le joueur va rencontrer les différentes instances dont il est nécessaire d'obtenir l’aval pour continuer
- Quels sont les principaux prérequis à la mise en place de nouvelles formations
  - Les actions possèdent des types différents qui peuvent être très efficace ou très peu efficace en fonction de ce dont l’instance raffole

#### Objectifs pédagogiques avancés 

- Certains types de diplôme déjà existant
  - Le joueur peut sélectionner plusieur niveau de difficulté qui sont représenté par des noms de diplômes et s’informe donc des différentes formation existantes

- Certaines formations sont plus compliqué à mettre en place que d’autre
  - Les niveaux de difficultés correspondent au niveau de difficulté de la vrai vie, le DU est plus facile à créer qu’une licence ou un master

#### Références


### Description des fonctionnalités

##### Rappel principe du rogue Lite : 
Le genre de jeu rogue Lite implique l'échec du joueur comme mécanique presque inévitable dans un jeu. A chaque échec le joueur à pu apprendre de nouvelles informations qui lui seront bénéfiques au prochain essai et obtient de nouvelles ressources qui rendra la prochaine tentative plus simple.

#### Simulation
Le joueur incarne un jeune professeur désireux de faire adopter sa nouvelle formation auprès des différentes instances. Il possède :
- Une barre de motivation qui est conservé (en l’état)  entre chaque rencontres
- 4 différentes actions, chaqu’une coûte de la motivation, seul une action est utilisable par tour
- Un bouton pour passer un tour coûtant de la motivation

Les actions sont composés de : 
- Types : Locaux, enseignant, maquettes pédagogique, attractivité
- Montant de validation : Quantité de validation à donner au boss
- Coût de motivation : Utiliser une action fait perdre de la motivation au joueur d’un montant équivalent au coût de l’action
- Temps de rechargement : Après avoir été utilisé une action ne peut plus être utilisé pendant autant de tour que l’indique son temps de rechargement
- Description : Des informations didactiques sur le type de la carte

Les instances :
- 4 instances différentes  : M.Zimmerman, l’IUT, CFVU, CA
- Faible à un certain type d’action
- Résiste à un certain type d’action

Les rencontres : 
- Au nombre de 4, une par instance chaqu’une existant
- Après une rencontre, si l'instance est validée, le joueur obtient de nouvelles actions (jusqu’à épuisement de nouvelles actions)
- Après chaque rencontre le joueur peut modifier les 4 actions à sa disposition parmis celles qu’il à débloqué

#### Interface

L'interface est constituée des éléments suivants :
- Une image de l’instance à valider
- La barre de validation de l’instance
- Les 4 actions du joueur
- Un bouton pour passer un tour
- La barre de motivation du joueur

Après chaque rencontre : 
- Un bouton pour lancer la prochaine rencontre
- La liste de toutes les actions découverte (pour sélectionner celles voulu pour le prochain combat)
- Les actions découvertes à la fin du combat 


#### Actions du joueur

Le joueur peut : 
- Pendant une rencontre : 
  - Cliquer sur une action pour la déclancher
  - Cliquer sur passer son tour
- Entre les rencontres :
  - Visualiser les actions obtenus grâce à la validation de la rencontre
  - Visualiser toutes les actions obtenus
  - Sélectionner les actions voulu pour la prochaine rencontre
  - Lancer la prochaine rencontre

### Scénarios

Lorsque la partie est lancé le joueur tombe nez à nez face à M.Zimmermann qui constitu la première instance à valider. Après l'avoir battu, le joueur obtient de nouvelles actions. Si il les utilisent il à une chance de battre la prochaine instance, sinon il perd et dois recommencer la partie. Le jeu n'a pas de fin en soit mais un shéma se répète : 
- battre les 4 instances dans cette ordre : 
  - M.Zimmermann -> l'IUT -> le CFVU -> le CA 

Dans l'idéal ce shéma se répète sur 4 niveaux de difficulté que nous n'avons pas le temps d'implémenter ici.

### Contraintes de développement

Tout ce qui doit encadrer le développement.

### Fonctionnalités et scénarios avancés

Les actions : 
- Ajout d’effets supplémentaires tels que des effets passifs sur plusieurs tours, l’amélioration temporaire d’autres cartes, gain de motivation, etc…
- Un niveau, impactant le puissances des effets, coûts en motivation, et/ou temps de recharge
- Certaines actions sont spécifiques à certains types et donc certaines synergies ne sont possible qu’avec certains types d’actions
- Les actions sélectionné avant une rencontre sont présélectionné avant chaque future rencontre

Rencontres : 
- Après les rencontres, les actions sont déterminées de manière aléatoire plutôt que de suivre un ordre spécifique
- Après les rencontres le joueur a le choix entre améliorer de niveau une action ou obtenir une nouvelle action

Niveaux de difficulté : 
- Le jeu propose plusieurs niveaux de difficultés impactant la valeur de la barre de validation de l’ennemi
- Les différentes améliorations sont conservé entre les niveaux de difficulté (et donc entre les parties)


