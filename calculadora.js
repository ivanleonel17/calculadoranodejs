const readline = require('readline');
const suma = require('./suma');
const resta = require('./resta');
const multiplicacion = require('./multiplicacion');
const division = require('./division');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese el primer número: ', (num1) => {
  rl.question('Ingrese el segundo número: ', (num2) => {
    rl.question('Ingrese la operación (+, -, *, /): ', (operacion) => {
      num1 = parseFloat(num1);
      num2 = parseFloat(num2);
      let resultado;

      switch (operacion) {
        case '+':
          resultado = suma(num1, num2);
          break;
        case '-':
          resultado = resta(num1, num2);
          break;
        case '*':
          resultado = multiplicacion(num1, num2);
          break;
        case '/':
          resultado = division(num1, num2);
          break;
        default:
          console.log('Operación no válida.');
          rl.close();
          return;
      }

      console.log(`Resultado: ${resultado}`);
      rl.close();
    });
  });
});
