'use strict'
// 1 задание
let Tc = prompt('Введите температуру в градусах Цельсия')
let Tf = (9 / 5) * Tc + 32;
alert(Tf.toFixed(1));

// 2 задание
let name = 'Василий'
let admin = name;
alert(admin);

// 3 задание

/*
1. 10+10=20
2. 20+"10" = 2010, т.к. "10" - строка, конкатенация.
*/

let result1 = 10 + 10 + "10";
console.log(result1);

/*
1. Первое и третье операнды - числа, второе - строка, ассоциативность слева направо, итого будет 101010
*/

let result2 = 10 + "10" + 10;
console.log(result2);

/*
первые два операнда - числа, третий - строка, но перед ним стоит унарный плюс. Строка преобразуется в Number.
*/

let result3 = 10 + 10 + +"10";
console.log(result3);

/*
Строка преобразуется в -0, т.к. стоит унарный минус, делением получается отрицательная бесконечность
*/

let result4 = 10 / -"";
console.log(result4);

/*
Перед строкой "2,5" стоит унарный плюс, но результат будет NaN, т.к. дроби указываются не через запятую, а через точку, поэтому строка останется строкой.
*/

let result5 = 10 / +"2,5";
console.log(result5);