// Écris une fonction itérative (qui fonctionne par itération et non par récursivité) qui retourne la valeur factorielle d'un nombre donné en paramètre. 
const computeFactorialIt = (n) => {
  (n <0)? n=0 : null;
  let result = 1
  for(i=1;i<=n;i++){
    result*= i
  }
  return result
}
console.log(computeFactorialIt(5))

// Maintenant, même exercice, mais en utilisant la récursivité !
const computeFactorialRec = (n) => {
  if(n <= 0){
    return 1
  }else{
    return n * computeFactorialRec(n-1)
  }
  
}
console.log(computeFactorialRec(5))