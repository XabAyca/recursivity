// Si tu as fini la journée, qu'il te reste du temps et que tu te sens en forme, alors voici un dernier exercice. Écris une fonction qui retourne le nombre de possibilités de placer n reines sur un échiquier de taille nxn sans qu'elles soient capables de se manger entre elles en un seul mouvement.
// const countValidQueens = (n) => {
const countValidQueens = function(n) {
  let solutions = 0;

  let magicScreen = (1 << n) - 1;
  var recurQueens = function(columns, leftDiagonals, rightDiagonals) {
    var threatened = columns | leftDiagonals | rightDiagonals;
    var open = ~(threatened) & magicScreen;
    while(open > 0) {
      var theOne = -open & open;
      open = open ^ theOne;
      var openColumns = columns | theOne;
      var openLeftDiagonals = (leftDiagonals | theOne) << 1;
      var openRightDiagonals = (rightDiagonals | theOne) >> 1;
      recurQueens(openColumns, openLeftDiagonals, openRightDiagonals);
    }
    if(columns === magicScreen) {
      solutions++;
    }
  }
  recurQueens(0,0,0);
  return solutions;
}

console.log(countValidQueens(16))