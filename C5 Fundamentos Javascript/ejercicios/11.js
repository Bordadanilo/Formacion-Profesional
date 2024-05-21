function sonIguales(x, y) {
  // La función recibe dos argumentos llamados "x" e "y".
  // Retorna true si "x" e "y" son iguales.
  // De lo contrario, retorna false.
  // Por ejemplo: 
  // 5, 5 ---> true 
  // 5, 8 ---> false 
  // Tu código:
  if (x===y) return true;
    else return false;
}
console.log(sonIguales(3, 3))
console.log(sonIguales(3, 5))
console.log(sonIguales(8, 3))
console.log(sonIguales(7, 7))
module.exports = sonIguales;