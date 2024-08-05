function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el array es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length < 2) {
    return null;
  }
  var min = Math.min(...numeros);
  var max = Math.max(...numeros);
  var sumaEsperada = (max * (max + 1) - min * (min - 1)) / 2;
  var sumaReal = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
  var numeroFaltante = sumaEsperada - sumaReal;
  return numeroFaltante > 0 && !numeros.includes(numeroFaltante) ? numeroFaltante : null;
}

module.exports = encontrarNumeroFaltante;