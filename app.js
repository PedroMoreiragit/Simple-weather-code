//Constante que define Kelvin em 293 K
const kelvin = 0;
console.log(kelvin);

//Celcius é igual a kelvin - 1
let celsius = kelvin - 1;
console.log(celsius);

//Fahrenheit é igual celcius*(9/5)+32
let fahrenheit = celsius * (9/5) + 32;
//Arredondando para baixo com o floor o fahrenheit
fahrenheit = Math.floor(fahrenheit);
console.log(fahrenheit);
let temperature = fahrenheit;

console.log(`The temperature is ${temperature} degrees Fahrenheit`);

//Convertendo celcius para Newton
let newton = celsius * (33/100);
console.log(newton);
