function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  let repetido = false;
  let i = 0;
  while (i < numeros.length) {
    let j = 0;
    while (j < numeros.length) {
      if (i !== j && numeros[i] === numeros[j]) {
        repetido = true;
        return numeros[i];
      }
      j++;
    }
    i++;
  }

}

module.exports = encontrarElementoRepetido;