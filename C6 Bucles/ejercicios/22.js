function doWhile(num) {
  // Aumenta el valor de "num" recibido en 5 hasta un límite de 8 veces.
  // Retorna el valor final.
  // PISTA: Utiliza el bucle do-while.
  // Tu código:
  let i=1;
  do {
    num=num+5;
    
  } while (i<=8);
  i++;
  return num;
}

module.exports = doWhile;