// Ejercicio 1
/** debajo del asegundo console.log(), escribe otro console.log
 * que imprima el resultado de verificar si los caracteres son 
 * mayores o iguales a 250
 */

const characters = 134;
console.log('Character limit reached:');
console.log(characters >= 250);

/** Crear una variable const inProgress verifique si dowloaded 
 * son inferiores a 100 y guarde la compracion dentro de inProgress
 */

const downloaded = 67;
const inProgress = downloaded < 100;

/** Comproeba si emails son mayores o iguales a capacity y almacena el resultado
 * de la comparacion en una variable llamada full
 */

const capacity = 1000;
const emails = 150;

const full = emails >= capacity;

/** Verificar si age es mayor o igual a minAge y mostrar el resultado en consola */

const age = 19;
const minAge = 16;
console.log('Old enough to drive:');
console.log(age >= minAge);

/** Verificar si temperature es inferior a 32 grados y almacenar el resultado 
 * de la comparacion en una variable const llamada isFreezing
 */

const temperature = 30;
const isFreezing = temperature < 32;

// Ejercicio 2
/** Comparar position con la expected con el operador de desigualdad estricta 
 * y muestre el resultado en consola
 */

const position = 'last';
const expected = 'first';

console.log(position !== expected);

/** Comparar onlineStatus con lastSeen con el operador de igualdad y muestre el resultado 
 * en consola
 */

const onlineStatus = 'offline';
const lastSeen = 'yesterday';

console.log(onlineStatus === lastSeen);

/** Compare offBrand con onBrand con el operador de igualdad y muestre el resultado 
 * en consola
 */

const offBrand = 'Orange';
const onBrand = 'Apple';

console.log(offBrand === onBrand);

/** Compare studentName con 'Tina' con el operador de desigualdad y muestrer el resultado
 * en la consola
 */

const studentName = 'Anna';

console.log(studentName !== 'Tina');

// Ejercicio 3
/** Asignar un valor de tipo numero a la variable age. luego une la string "Age: " a esta 
 * variable y muestra el resultado en la consola
 */

const años = 35;

console.log("Age: " + años);

/** Crear una variable const llamada Joke y asignarle un string con el mejor chiste que conozcas */

const joke = 'Habia una vez trus que cada dos por tres seis'


/** Unir la variable const messages con la string " new messages" y mostrarla por consola */

const messages = 8;

console.log(messages + " new messages");

/** Codifique una declaracion de visualizacion y , dentro de ella, una variable text y shuffle para 
 * para mostrar Shuffle playlist: true
 */

const shuffle = true;
const text = 'Shuffle playlist: ';

console.log(text + shuffle);

/** Creear una variable const winner que una la string 'Lucky number: ' con la variable number. 
 * Muestre el valor de la variable winner en consola 
 */

const number = 7;
const winner = 'Lucky number: ' + number;

console.log(winner);

/** Crear la variable const sugar que almacena un numero de tu eleccion. luego una la variable 
 * con la string ' grams of sugar' zy mostrar el resultado en consola
 */

const sugar = 25;
console.log(sugar + ' grams of sugar');

/** Una la variable movie con ' audience score: ' y luego la variable score
 * para mostrar Joker audience score: 90
 */

const movie = 'Joker';
const score = 90;
console.log(movie + ' audience score: ' + score);

/** Unase a la variable user con la string ' is online: ' y luego la variable isOnline.
 * Asigne la expresion a la variable message. Mostrar la variable message en consola
 */

const user = 'Joe';
const isOnline = true;
const message = user + ' is online: ' + isOnline;
console.log(message);

/** Crear una variable const llamada isWeekend que contenga el valor booleano de su 
 * eleccion y mostrarlo en consola
 */

const isWeekend = false;

console.log(isWeekend);

// Ejercicio 4
/** crear una constante llamada result que almacene una exprecion logica . Esta
 * exprecion debe verificar si la velocidad de internet es superior a 30 y que 
 * la camara esta conectada
 */

let internetSpeed = 32;
let isCamConnected = true;

const result = (internetSpeed > 30) && (isCamConnected);

console.log('Online class: ' + result);

/** Almacenar una exprecion logica wn result1 que  verifi que si el articulo comprado 
 * es igual a perfume el stock es > que 0 y la factura es <= el pago del cliente. Utilice 
 * && para encadenar las tres condiciones
 */

let purchasedItem = 'perfume';
let stock = 4;
let bill = 20;
let customerPayament = 25;
const result1 = (purchasedItem === 'perfume') && (stock > 0) && (bill <= customerPayament);

console.log('Transaction approved?: ' + result1);

/** Crear una const resul2 que almacene una expdecion logica. La exprecion debe comprobar si el wifi 
 * esta conectado o si los datos moviles estan activados
 */

let isWifiConnected = true;
let isMobileDataOn = false;
const resul2 = (isWifiConnected === true) || (isMobileDataOn === true);

console.log('Is the internet working fine?: ' + resul2)

/** Almacenar una exprexion logica en result3 que verifique si el pago en efectivo o el saldo 
 * de credito o el saldo de la tarjeta son mayores que la factura
 */

let bill1 = 20;
let cashPayment = 25;
let creditBalance = 5;
let cardBalance = 15;
const result3 = (cashPayment > bill1) || (creditBalance > bill1) || (cardBalance > bill1);

console.log('Payment Successful?: ' + result3);

/** crear una variable const llamada result4 que almacene el valor negado de la variable laptopBatteryEmpty */

let laptopBatteryEmpty = false;
const result4 = !laptopBatteryEmpty;

console.log('Laptop charged?: ' + result4);

/** En la variable result5 niegue una exprecion logica que verifique si el deslizamiento esta desactivado y 
 * el pago en esta desactivado
 */

let isSwipeDown = false;
let isOnlinePayDown = true;
const result5 = !(isSwipeDown && isOnlinePayDown);

console.log('Is any mode of payment accepted? : ' + result5);

/** Crear una variable const llamada result6 que almacene una exprecion logica
 * la exprecion debe verificar si el deslizamiento esta funcionando o si el pago 
 * en efectivo es mayor o igual a la factura
 */

let bill2 = 20;
let cashPayment1 = 25;
let isSwipeWorking = false;
const result6 = isSwipeWorking || (cashPayment1 >= bill2);

console.log('Payment Successful? : ' + result6);


/** Crear una variable const llamada rgbCheck que almacene una exprecion logica.
 * La exprecion logica debe verificar si las variables r,g,b son menores o iguales 
 * a 255 para furmar un color RGB valido
 */

let r = 200;
let g = 300;
let b = 10;

const rgbCheck = (r <= 255) && (g <= 255) && (b <= 255); 

console.log('Valid RGB?: ' + rgbCheck);
