/** Crear una variable const llamada isPasswordCorrect para verificar si la contraseña 
 * introducida por el usuario es la misma que la contraseña que el sistema almaceno anteriormente
 * 1- Inicialice una variable const isPasswordCorrect para comprobar si userPassword es 
 * exactamente igual que savedPassword.
 * produccion: Access granted: true
 */

const userPassword = '283746';
const savedPassword = '283746';

const isPasswordCorrect = userPassword === savedPassword;

console.log('Access granted: ' + isPasswordCorrect)

/** Comprobar si un cliente de 23 añps tiene la edad legal para beber
 * 1- Iniscializar la variable const age darle el valor unmerico de 23.
 * 2- crear otra variable ageCheck que verifique si la variable age es mayor 
 * o igual a la edad legal para beber. La edad legal para beber es 21.
 * mostrar el resultado por consola
 */

const age = 23;
const ageCheck = age >= 21;

console.log('Of legal Drinking Age: ' + ageCheck);

/** Quiere comprobar si tien sufuciente dinero para comprar unos auriculares nuevos
 * 1- comprobar en variable hasEnoughMoney si price es < o = al budget
 * pruduccion:
 * Ihave enough money: false
 */

const budget = 23;
const price = 80;
const hasEnoughMoney = price <= budget;
console.log('I have enough money:')
console.log(hasEnoughMoney);
