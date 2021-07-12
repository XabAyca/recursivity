// Un nombre premier est un entier naturel qui admet exactement deux diviseurs distincts entiers et positifs. Ces deux diviseurs sont 1 et le nombre considéré, puisque tout nombre a pour diviseurs 1 et lui-même (comme le montre l’égalité n = 1 × n), les nombres premiers étant ceux qui n’en possèdent aucun autre. Par exemple, le nombre entier 7 est premier, car 1 et 7 sont les seuls diviseurs entiers de 7.

//Dans cet exercice, tu vas devoir écrire une fonction qui retourne true si n est un nombre premier et false s'il ne l'est pas.

const isPrimeNumber = (n,x=n-1) => {
  if (n<=0) return "Not a positive number, bro...";
  if(x===1){
    return true
  }else if(n%x === 0){
    return false
  }else{
    return isPrimeNumber(n,x-1)
  }
}
console.log(isPrimeNumber(11))

// Tu es toujours là ? Félicitations, on va voir comment tu t'en sors sur celui-là. Maintenant que tu sais détecter si un nombre est premier ou non, tu vas devoir écrire une fonction qui va retourner le plus petit nombre premier supérieur ou égal à n.
const findSupPrime = (n) => {
  if (n<=0) return"Not a positive number, bro...";
  if(isPrimeNumber(n)){
    return n
  }else{
    return findSupPrime(n+1)
  }
}
console.log(findSupPrime(117))