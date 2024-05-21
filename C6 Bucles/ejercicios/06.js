function tieneTresDigitos(num) {
  // Si el número recibido tiene tres dígitos, retorna true.
  // Caso contrario, retorna false.
  // Tu código:
  if (num>99 && num<1000) return true;
   else return false;
}
console.log(tieneTresDigitos(340))
console.log(tieneTresDigitos(99))
console.log(tieneTresDigitos(999))
module.exports = tieneTresDigitos;
