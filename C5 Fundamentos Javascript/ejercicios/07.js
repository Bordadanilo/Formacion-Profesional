function esTipoDato(valor) {
  // La función recibe un argumento llamado valor.
  // Retorna el tipo de dato de este valor.
  // Por ejemplo: "string", "number", "boolean", "object", etc.
  // Tu código:
  if (valor==String) return "String";
  if (valor==null) return "Null";
  if (valor==Number) return "Number";
  if (valor==Boolean) return "Boolean";
  if (valor==undefined) return "Undefined";
  return typeof valor;
}

module.exports = esTipoDato;