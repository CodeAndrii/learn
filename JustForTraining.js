// var admin, name;
// name = 'vasili';
// admin = name;
// console.log(name);
// alert (admin);


// var planet, user;
// planet = 'earth';
// user = 'nick';
// [planet, 1 + 5 + 's  dfs', user].forEach (alert)


// var x = 1;
// x = -x + 5; // применили унарный минус (-х) // answer 4
// console.log(x);
// alert (x);


// var x = 3, y = 1;
// alert (x - y); // 2, бинарный минус


// var x = 'my   ' + 'string';
// alert (x);                                                // сложение строк


// alert ("1ggg" + '2', '1gdgdfggg' + 2); // после "," второе оповещение не будет работать, поэтому используй .forEach
// ["1ggg" + '2', '1gdgdfggg' + 2].forEach (alert) // это особенность исключительно бинарного оператора "+"


// alert ("5" / 10); // Остальные арифметические операторы работают только с (операндами = аргументами)числами и всегда приводят аргументы к числу.
// алерт работает как ни странно но что тут происходит с кавычками???????????(возможно просто оссобенность редактора)

// var x = '2', y = '3';
// alert (+x + +y);// унарный плюс преобразовывает стринг в число


// var a;
// a = (5, 6);
// alert(a); // 6
// a = 5, 6;
// alert(a); // 5
// это особенность оператора запятой


// var a = 3 > 4; // приведение к логике true false
// var b = true;
// console.log (b, a, a != b, a == a, a < b);


// var years = prompt('how old are you?', '100'); // можно 100 с кавычками и без
// alert('Вам ' + 100 + years + ' лет!')


// var isAdmin = confirm("Вы - администратор?"); // вот как работает confirm, он возвращает булеан (true/false) 
// alert( isAdmin );


// var name = prompt ('Enter the name:', 'bla bla bla');
// alert('Your name is ' + name + ', Congrats!');


// var year = prompt('В каком году появилась спецификация ECMA-262 5.1?', '');
// if (year < 2011) {
//   alert( 'Это слишком рано..' );
// } else if (year > 2011) {
//   alert( 'Это поздновато..' );
// } else {
//   alert( 'Да, точно в этом году!' );
// }


// var access;
// var age = prompt('Сколько вам лет?', '');
// // if (age > 14) {
// //   access = true;
// // } else {
// //   access = false;
// // }                                                 
// // access = (age > 14) ? true : false; // or you can writw the operator in another way like "?"                                                  
// access = age > 14; // or lighter version cause true/false are already using in the operator                                                 
// alert(access);


// var name = prompt ("What's official company name of JavaScript?", '');
// if (name == 'EcmaScript') {
//   alert ("That's right!");
// } else {
//   alert ("NO! It's EcmaScript!");
// }


// var log = prompt ("Enter login", '');
// if (log == 'admin') {
//   var pass = prompt ('Enter password', '');
//   if (pass == "black_power") {
//     alert ("Wellcome home Sir");
//   }
//   else if (pass == null) {                // срабатывает когда отменяется пароль нажатием на эскейп или на отмену
//     alert ("Pass canceled");
//   }
//   else {
//     alert ("Access denied");
//   }
// }
// else if (log == null) {
//   alert ("Login canceled");               // та же вышеупомянутая отмена
// }
// else {
//   alert ("I don't know you");
// }


// var login = prompt ("enter login", '');
// var message = (login == 'vasia') ? "hey" : //а это аналог оператора иф элс
// (login == 'director') ? "Hello" :
// (login == null) ? "login canceled" :
// "There's no such login";
// alert (message);


// || (or) запинается на «правде»,
// && (and) запинается на «лжи». Приоритет высше.

// var age = prompt("enter the age");
// if (age != 25 && age > 25 ) {
//   alert ("age is " + age + ". You're not young enymore. =(");
// } else {
//   alert ("age is " + age + ". You're young Man! =)");
// }


// var age = prompt("enter the age");
// if (!(age >= 15 && age <= 65)) {             // оператор логического НЕ можно и так использовать
//   alert ("age " + age + " is quite dificult period for relatives");
// }


// var i = 3;
// while (i) {    // эта запись условия приравнивается к (i != 0) и при котором цыкл завершается
//   alert (i);
//   i--;        // алерт 1 будет последним
// }


// var i = 0;
// while (i < 3) {
//   alert( i );
//   i++;                  // 0, 1, 2
// }


// var i = 0;
// do {
//   alert( i );
//   i++;
// } while (i < 3);           //answers are the same as previous


// var i;
// for (i = 0; i < 3; i++) {
//   alert( i );                 //answers are the same as previous
// }


// var sum = 0;
// while (true) {
//   var value = +prompt("Введите число", ''); // + перед промптом складывает все введенные в промпт числа в единую сумму
//   if (!value) break;        // если не число то цыкл прекращается с помощью break
//   sum += value;
// }
// alert( 'Сумма: ' + sum );


// for (var i = 0; i <= 10; i++) {
//   if (i % 2 == 0) continue;          // если условие true то continue пропускает ход цикла и переходя на след шаг
//   alert(i);
// }


// for (var i = 0; i < 10; i++) {
//   if (i % 2) {              //условие if (i % 2) тоже что и if (i % 2 != 0)
//     alert( i );             //выводит нечетные числа
//   }
// }


// var i = 0;
// while (i < 3) {
//   alert( "number " + i);
//   i++;
// }


// var num;
// do {
//   num = prompt("enter the number more than 100", "");
// } while (num <= 100);
// alert (num);    // цикл будет работать бесконечно пока не введется число больше 100


// nextPrime:
//   for (var o = 2; o <= 20; o++) {
//     for (var j = 2; j < o; j++) {
//       if (o % j == 0) continue nextPrime;   // прерываение и переход на nextPrime т.е. на первый цикл for
//     }
//     alert( o ); // вывод простых чисел
//   } // почему на шаге когда o = 9 и j = 2 не выводится число???

// ДЛЯ ПОШАГОВОГО ПРОСЛЕЖИВАНИЯ ПРОГРАММЫ ИСПОЛЬЗУЕТСЯ ДЕБАГЕР КОТ НАХОД В КОНСОЛЕ ВО ВКЛАДКЕ СОРС


// var arg = prompt("Введите arg?")
// switch (arg) {
//   case '0':
//   case '1':
//     alert( 'Один или ноль' );
//   case '2':
//     alert( 'Два' );
//     break;
//   case 3:
//     alert( 'Никогда не выполнится' );
//   default:
//     alert('Неизвестное значение: ' + arg)
// }


// var a = +prompt('a?', '');
// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }
// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }


// var a = +prompt('a?', ''); // обычно prompt возвращает строку, а не число, для числа нужно поставить +
// switch (a) {
//   case 0:
//   alert (0);
//   break;
//   case 1:
//   alert (1);
//   break;
//   case 2:
//   case 3:
//   alert( '2,3' );
//   break;
// }


// function collor (col) {
//   var col;
//   if (col == "red"){
//     console.log ("Eto krasnii");
//   } else if (col == "blue") {
//     console.log (col);
//   } else {
//     console.log ("This is " + col);
//   }
// }


// function sum (a, b) {
//   var a, b, sum = a + b;
//   return sum;
// }


// function showMessage(from, text) {
//   var text, from;
//   if (from === undefined) {
//       from = "no name";
//   } if (text === undefined) {
//     text = "no text";
//   } alert( "**" + from + "** : " + text );
// }
// showMessage();


// function calcD(a, b, c) {
//   return b*b - 4*a*c;
// } var test = calcD(-4, 2, 1);
// alert(test); // 20


// function checkAge(age) {
//   if (age > 18) {
//     return true;
//   } else {
//     return confirm('Родители разрешили?');
//   }
// } var age = prompt('Ваш возраст?');
// if (checkAge(age)) {                   //if (checkAge(age) === true)
//   alert( 'Доступ разрешен' );
// } else {
//   alert( 'В доступе отказано' );
// }


// function add(a, b){
//   var addition = a + b;
//   return addition;
// }
// function sub(a, b){
//   var subtraction = a - b;
//   return subtraction;
// }
// function mul(a, b){
//   var multiplication = a * b;
//   return multiplication;
// }
// function div(a, b){
//   var division = a / b;
//   return division;
// }


// function add(a, b){
//   return a + b;
// }
// function sub(a, b){
//   return a - b;
// }
// function mul(a, b){
//   return a * b;
// }
// function div(a, b){
//   return a / b;
// }


// function checkAge(age) {
//   return (age > 18) ? true : confirm('Родители разрешили?');
// }


// function checkAge(age) {
//   return (age > 18) || confirm('Родители разрешили?');
// }


// function min(a, b) {
// if (a > b) {
//   return b;
// } return a; 
// }

// function min(a, b) {
//     return (a < b) ? a : b;
// }


//Напишите функцию pow(x,n), которая возвращает x в степени n. pow is power(степень)
// function pow(x, n) {
//   var result = x;
//   for (var i = 1; i < n; i++) {
//     result *= x;             // result = result * x
//   }
//   return result;
// }
// var x = prompt("x?", '');
// var n = prompt("n?", '');
// if (n <= 1) {
//   alert('Степень ' + n +
//     'не поддерживается, введите целую степень, большую 1'
//   );
// } else {
//   alert( pow(x, n) );
// }

