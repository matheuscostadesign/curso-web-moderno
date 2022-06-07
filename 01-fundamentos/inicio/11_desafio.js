let a = 7;
let b = 94;

let temp = a; // Varivel temporária
a = b;
b = temp;

// depois da troca... a = 94 e b = 7
console.log("Valor de A: " + a);
console.log("Valor de B: " + b);
