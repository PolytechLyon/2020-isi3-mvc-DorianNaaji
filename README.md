# ISI3 - MVP design pattern - "Game of Life"

Nom/Prénom: NAAJI Dorian

Lien du codesandbox: https://codesandbox.io/s/2020-isi3-mvc-doriannaaji

## Avant-propos

1. Expliquer le design pattern MVC à l'aide d'un schéma à insérer directement ici.
   Utiliser un outils commde Dia pour le représenter. Je veux **votre** schéma, pas un de ceux qu'on peut trouver sur le net.

![mvc-diagram](img/sources/MVC-Diagram-NAAJI-Dorian.png)
_Figure : Mon diagramme du pattern MVC_

2. Expliquer ce pattern à l'aide en complétant ce texte.

Le pattern MVP, vise à découper le `.......`, de la `.......` et du `.......` afin de rendre le code plus `.......`.
Les responsabilités ne sont alors plus `.......`.
On peut ainsi changer l'aspect visuel de sont application sans pour autant impacter le `.......`.

3. Expliquer dans quels cas on doit privilégier le pattern MVC.

## A faire (obligatoire)

- Render le jeu fonctionel tout en respectant le design pattern MVC.
- Le bouton `start` doit lancer le jeu.
- Le bouton `stop` doit arrêter le jeu en l'état, le `start` relance le jeu.
- le bouton `reset` arrête le jeu et vide remet à la grille à l'état initiale.

### Observer Observable

Afin de mettre à jour la vue à chaque nouvelle génération du jeu, la fonction `updated` doit notifier la view afin qu'elle se mette à jour.
En quoi cela relève du design pattern ObserverObservable.

1. Expliquer votre implémentation:

L'usage d'une callback permet ici de `.......` afin dire à la _View_ de se redessiner.
L'objet _Model_ n'a pas de lien avec `.......` pourtant grâce à la `.......` il peut notifier la `.......`.

2. Insérer ici un UML montrant le pattern Observer-Observable liés aux objects de ce TP.

## Optionel

> Si vous voulez apprendre d'autres choses

- Faire sorte de pouvoir changer les dimensions de la grille par in `<input/>` HTML.
- Faire en sorte de pouvoir modifier l'état d'une cellule en cliquant dessus.

## :warning: À rendre

- Une URL de codesandox pointant sur votre projet github afin que je puisse voir et tester le code.
- Le rapport complet.
