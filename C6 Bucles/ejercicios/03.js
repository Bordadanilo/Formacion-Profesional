function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:
  if (x>y) return x;
   else return y;
}
console.log(obtenerMayor(7, 3))
console.log(obtenerMayor(7, 9))
console.log(obtenerMayor(2, 2))
module.exports = obtenerMayor;
