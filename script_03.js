//Comme tu peux le constater, on réalise pas mal de maths en algorithmie. Mais, à ton grand bonheur (ou pas), ce sont des maths simples. Pas de quoi mettre la tête au carré à ton ancien prof de maths ! Pour cet exercice, tu vas devoir écrire une fonction qui retourne la racine carrée d'un nombre.
const computeSquareRoot = (n, x=n) => {
  let guess = (x + (n / x)) / 2; //The Babylonian method
  if (x === 0) {
    return 0;
  }else if (x === guess){
    return guess;
  }else{
    return computeSquareRoot(n, guess)
  } 
}
console.log(computeSquareRoot(20))