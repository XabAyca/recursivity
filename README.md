![recursivity](img_recursive.png)
# Exercises: Introduction to Recursivity
1. Introduction
Dans cette journée, tu vas apprendre à utiliser le principe de récursivité. Ce dernier te sera très utile pour réaliser les prochains objectifs de la semaine.

Pas de super projet à réaliser aujourd'hui, juste une petite liste d'exercices allant crescendo en difficulté, ton objectif sera d'aller le plus loin possible.

2. Les exercices
Réalise tous les exercices à la racine de ton dossier. Fais attention à bien respecter le prototype des fonctions. Sauf le contraire est spécifié, chaque exercice devra utiliser la notion de récursivité. En cas d'erreur, tes fonctions doivent retourner 0.

* Valeur factorielle - script_01.js
En mathématiques, la factorielle d'un entier naturel n est le produit des nombres entiers strictement positifs inférieurs ou égaux à n. Exemple : 5! = 5 * 4 * 3 * 2 * 1 = 120.   
   
⚠️ Attention aux cas particuliers (n < 0, n = 0) lorsque tu écris tes fonctions.
- Méthode itérative
Écris une fonction itérative (qui fonctionne par itération et non par récursivité) qui retourne la valeur factorielle d'un nombre donné en paramètre.
- Méthode récursive
Maintenant, même exercice, mais en utilisant la récursivité !
* Puissance d'un nombre - script_02.js
- Méthode itérative
Écris une fonction itérative qui retourne son premier argument à la puissance p, où p est le second argument. En cas d'erreur, la fonction doit retourner 0.
- Méthode récursive
Même exercice (et oui, encore...) en utilisant la récursivité !
* Racine carrée - script_03.js
Comme tu peux le constater, on réalise pas mal de maths en algorithmie. Mais, à ton grand bonheur (ou pas), ce sont des maths simples. Pas de quoi mettre la tête au carré à ton ancien prof de maths ! Pour cet exercice, tu vas devoir écrire une fonction qui retourne la racine carrée d'un nombre.
* Nombre premier - script_04.js
Un nombre premier est un entier naturel qui admet exactement deux diviseurs distincts entiers et positifs. Ces deux diviseurs sont 1 et le nombre considéré, puisque tout nombre a pour diviseurs 1 et lui-même (comme le montre l’égalité n = 1 × n), les nombres premiers étant ceux qui n’en possèdent aucun autre. Par exemple, le nombre entier 7 est premier, car 1 et 7 sont les seuls diviseurs entiers de 7.   
   
Tu as peut-être trouvé les précédents exercices trop faciles ? Et bien à partir de maintenant ça va se corser un peu ! Bon chance.   
   
Dans cet exercice, tu vas devoir écrire une fonction qui retourne true si n est un nombre premier et false s'il ne l'est pas.

- Trouver un nombre premier
Tu es toujours là ? Félicitations, on va voir comment tu t'en sors sur celui-là. Maintenant que tu sais détecter si un nombre est premier ou non, tu vas devoir écrire une fonction qui va retourner le plus petit nombre premier supérieur ou égal à n.   
   
C'est tout (et déjà pas mal) pour aujourd'hui ! Maintenant que tu sais utiliser la récursivité, on va pouvoir s'amuser un peu les prochains jours avec des algorithmes de tri. À demain !

* Exercice bonus pour les big boss - script_04.js
Si tu as fini la journée, qu'il te reste du temps et que tu te sens en forme, alors voici un dernier exercice. Écris une fonction qui retourne le nombre de possibilités de placer n reines sur un échiquier de taille nxn sans qu'elles soient capables de se manger entre elles en un seul mouvement.