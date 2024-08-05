function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  var inicio = 0;
  var fin = array.length - 1;
  while (inicio < fin) {
    var temp = array[inicio];
    array[inicio] = array[fin];
    array[fin] = temp;
    inicio++;
    fin--;
  }
  return array;
}

module.exports = invertirArray;
