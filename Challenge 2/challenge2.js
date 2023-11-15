function encriptar(cadena) {
  let res = "";
  let cuenta = 0;

  for (caracter of cadena) {
    switch (caracter) {
      case "#":
        cuenta++;
        break;

      case "@":
        cuenta--;
        break;

      case "*":
        cuenta *= cuenta;
        break;

      case "&":
        res += cuenta;
        break;
    }
  }

  return res;
}

console.log(encriptar("&###@&*&###@@##@##&######@@#####@#@#@#@##@@@@@@@@@@@@@@@*&&@@@@@@@@@####@@@@@@@@@#########&#&##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@##@@&"));

/* 
"#" Incrementa el valor numérico en 1.
"@" Decrementa el valor numérico en 1.
"*" Multiplica el valor numérico por sí mismo.
"&" Imprime el valor numérico actual.

*/
