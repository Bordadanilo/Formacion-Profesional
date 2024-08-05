function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  let suma = 0;
  let contador = 0;
  for (let i = 0; i < resultadosTest.length; i++) {
    suma += resultadosTest[i];
    contador++;
  }
  return suma / contador;
}

module.exports = promedioResultadosTest;
