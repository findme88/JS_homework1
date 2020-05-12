// "use strict";

// 4.1;

// let $title4_1 = document.createElement("h1");
// $title4_1.innerHTML =
//   "Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.";
// document.body.append($title4_1);

// let $task4_1 = document.createElement("div");
// $task4_1.classList.add("task4_1");
// $task4_1.innerHTML =
//   '<input class="input4_1" placeholder="first number" type="number"><input class="input4_12" placeholder="second number" type="number"></input><button>calculate</button>';
// document.body.append($task4_1);
// let $btn4_1 = $task4_1.querySelector("button");
// let $result4_1 = document.createElement("div");
// $result4_1 = document.createElement("h1");
// $result4_1.style = "font-size: 40px";
// document.body.append($result4_1);

// let getResult4_1 = () => {
//   let num1 = Number($task4_1.querySelector(".input4_1").value);
//   let num2 = Number($task4_1.querySelector(".input4_12").value);

//   if (num1 < num2) {
//     $result4_1.innerHTML = `-1`;
//   } else if (num1 > num2) {
//     $result4_1.innerHTML = `1`;
//   } else $result4_1.innerHTML = `0`;
// };

// $btn4_1.onclick = getResult4_1;

// 4.2;

// let $title4_2 = document.createElement("h1");
// $title4_2.innerHTML =
//   "Написать функцию, которая вычисляет факториал переданного ей числа.";
// document.body.append($title4_2);

// let $task4_2 = document.createElement("div");
// $task4_2.classList.add("task4_2");
// $task4_2.innerHTML =
//   '<input class="input4_2" placeholder="Enter number" type="number"></input><button>calculate</button>';
// document.body.append($task4_2);
// let $btn4_2 = $task4_2.querySelector("button");
// let $result4_2 = document.createElement("div");
// $result4_2 = document.createElement("h1");
// $result4_2.style = "font-size: 40px";
// document.body.append($result4_2);

// let fact = (num1) => {
//   return num1 != 1 ? num1 * fact(num1 - 1) : 1;
// };
// let getResult4_2 = () => {
//   let num = Number($task4_2.querySelector(".input4_2").value);
//   $result4_2.innerHTML = fact(num);
// };

// $btn4_2.onclick = getResult4_2;

// 4.3;

// let $title4_3 = document.createElement("h1");
// $title4_3.innerHTML =
//   "Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.";
// document.body.append($title4_3);

// let $task4_3 = document.createElement("div");
// $task4_3.classList.add("task4_3");
// $task4_3.innerHTML =
//   '<input class="input4_41" placeholder="Enter number" type="number"><input class="input4_42" placeholder="Enter number" type="number"><input class="input4_43" placeholder="Enter number" type="number"></input><button>calculate</button>';
// document.body.append($task4_3);
// let $btn4_3 = $task4_3.querySelector("button");
// let $result4_3 = document.createElement("div");
// $result4_3 = document.createElement("h1");
// $result4_3.style = "font-size: 40px";
// document.body.append($result4_3);

// let getResult4_3 = () => {
//   let num1 = $task4_3.querySelector(".input4_41").value;
//   let num2 = $task4_3.querySelector(".input4_42").value;
//   let num3 = $task4_3.querySelector(".input4_43").value;

//   $result4_3.innerHTML = String(num1) + String(num2) + String(num3);
// };

// $btn4_3.onclick = getResult4_3;

// 4.4;

// let $title4_4 = document.createElement("h1");
// $title4_4.innerHTML =
//   "Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.";
// document.body.append($title4_4);

// let $task4_4 = document.createElement("div");
// $task4_4.classList.add("task4_4");
// $task4_4.innerHTML =
//   '<input class="input4_41" placeholder="first number" type="number"><input class="input4_42" placeholder="second number" type="number"></input><button>calculate</button>';
// document.body.append($task4_4);
// let $btn4_4 = $task4_4.querySelector("button");
// let $result4_4 = document.createElement("div");
// $result4_4 = document.createElement("h1");
// $result4_4.style = "font-size: 40px";
// document.body.append($result4_4);

// let getResult4_4 = () => {
//   let num1 = Number($task4_4.querySelector(".input4_41").value);
//   let num2 = Number($task4_4.querySelector(".input4_42").value);

//   if (num1 == "") num1 = num2;
//   else if (num2 == "") num2 = num1;
//   $result4_4.innerHTML = `The area of the rectangle is ${
//     num1 * num2
//   }. Have a good day, keep calm and learn JS`;
// };

// $btn4_4.onclick = getResult4_4;

// 4.5;

// let $title4_5 = document.createElement("h1");
// $title4_5.innerHTML =
//   "Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.";
// document.body.append($title4_5);

// let $task4_5 = document.createElement("div");
// $task4_5.classList.add("task4_5");
// $task4_5.innerHTML =
//   '<input class="input4_5" placeholder="Enter number" type="number"></input><button>calculate</button>';
// document.body.append($task4_5);
// let $btn4_5 = $task4_5.querySelector("button");
// let $result4_5 = document.createElement("div");
// $result4_5 = document.createElement("h1");
// $result4_5.style = "font-size: 40px";
// document.body.append($result4_5);

// let getResult4_5 = () => {
//   let num = Number($task4_5.querySelector(".input4_5").value);

//   let divisors = 0;
//   for (let i = 1; i <= Math.round(num / 2); i++) if (!(num % i)) divisors += i;
//   if (num == divisors) {
//     $result4_5.innerHTML = `This number is perfect`;
//   } else {
//     $result4_5.innerHTML = `This number is not perfect`;
//   }
// };

// $btn4_5.onclick = getResult4_5;

// 4.6;

// let $title4_6 = document.createElement("h1");
// $title4_6.innerHTML =
//   "Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет. ";
// document.body.append($title4_6);

// let $task4_6 = document.createElement("div");
// $task4_6.classList.add("task4_6");
// $task4_6.innerHTML =
//   '<input class="input4_61" placeholder="first number" type="number"><input class="input4_62" placeholder="second number" type="number"></input><button>calculate</button>';
// document.body.append($task4_6);
// let $btn4_6 = $task4_6.querySelector("button");
// let $result4_6 = document.createElement("div");
// $result4_6 = document.createElement("h1");
// $result4_6.style = "font-size: 40px";
// document.body.append($result4_6);

// function perfectNumber(num) {
//   let x = 0;
//   for (let i = 1; i <= Math.round(num / 2); i++) if (!(num % i)) x += i;
//   if (num == x) return "+";
//   return "-";
// }

// let getResult4_6 = () => {
//   let num1 = Number($task4_6.querySelector(".input4_61").value);
//   let num2 = Number($task4_6.querySelector(".input4_62").value);

//   let num3 = " ";
//   for (let i = num1; i <= num2; i++)
//     if (perfectNumber(i) == "+") num3 += i + ", ";
//   if (num3 === " ")
//     $result4_6.innerHTML = `There are no perfect numbers in this range`;
//   else $result4_6.innerHTML = `Perfect numbers ${num3}`;
// };

// $btn4_6.onclick = getResult4_6;

// 4.7;

// let $title4_7 = document.createElement("h1");
// $title4_7.innerHTML =
//   "Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.";
// document.body.append($title4_7);

// let $task4_7 = document.createElement("div");
// $task4_7.classList.add("task4_7");
// $task4_7.innerHTML =
//   '<input class="input4_71" placeholder="hours" type="number"><input class="input4_72" placeholder="minutes" type="number"><input class="input4_73" placeholder="seconds" type="number"></input><button>calculate</button>';
// document.body.append($task4_7);
// let $btn4_7 = $task4_7.querySelector("button");
// let $result4_7 = document.createElement("div");
// $result4_7 = document.createElement("h1");
// $result4_7.style = "font-size: 40px";
// document.body.append($result4_7);

// // let setTime = h => {
// //   return (m = 0) => {
// //     return (s = 0) => {
// //       return `${h}:${m}:${s}`
// //     }
// //   }
// // }

// let getResult4_7 = () => {
//   let h = Number($task4_7.querySelector(".input4_71").value)
//   let m = Number($task4_7.querySelector(".input4_72").value)
//   let s = Number($task4_7.querySelector(".input4_73").value)

//   if (h < 10) h = "0" + h
//     if (m < 10) m = "0" + m
//     if (s < 10) s = "0" + s
//     $result4_7.innerHTML = `Time ${h}:${m}:${s}`
//   // let x = setTime(h1)(m1)(s1);
//   // $result4_7.innerHTML = `Time ${x}`;
// };

// $btn4_7.onclick = getResult4_7;

// 4.8

// let $title4_8 = document.createElement("h1");
// $title4_8.innerHTML =
//   "Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.";
// document.body.append($title4_8);

// let $task4_8 = document.createElement("div");
// $task4_8.classList.add("task4_8");
// $task4_8.innerHTML =
//   '<input class="input4_81" placeholder="hours" type="number"><input class="input4_82" placeholder="minutes" type="number"><input class="input4_83" placeholder="seconds" type="number"></input><button>calculate</button>';
// document.body.append($task4_8);
// let $btn4_8 = $task4_8.querySelector("button");
// let $result4_8 = document.createElement("div");
// $result4_8 = document.createElement("h1");
// $result4_8.style = "font-size: 40px";
// document.body.append($result4_8);

// let getResult4_8 = () => {
//   let h = Number($task4_8.querySelector(".input4_81").value)
//   let m = Number($task4_8.querySelector(".input4_82").value)
//   let s = Number($task4_8.querySelector(".input4_83").value)
//   $result4_8.innerHTML = `time in seconds ${h * 3600 + m * 60 + s * 1}`
// };

// $btn4_8.onclick = getResult4_8;

// 4.9

// let $title4_9 = document.createElement("h1");
// $title4_9.innerHTML =
//   "Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.";
// document.body.append($title4_9);

// let $task4_9 = document.createElement("div");
// $task4_9.classList.add("task4_9");
// $task4_9.innerHTML =
//   '<input class="input4_9" placeholder="30 seconds to Mars" type="number"></input><button>calculate</button>';
// document.body.append($task4_9);
// let $btn4_9 = $task4_9.querySelector("button");
// let $result4_9 = document.createElement("div");
// $result4_9 = document.createElement("h1");
// $result4_9.style = "font-size: 40px";
// document.body.append($result4_9);

// let getResult4_9 = () => {
//   let s= Number($task4_9.querySelector(".input4_9").value);
//   let h = (s - s % 3600) / 3600,
//         m = s - h * 3600
//     m = (m - m % 60) / 60
//     s = s - h * 3600 - m * 60

    
//   if (h < 10) h = "0" + h
//   if (m < 10) m = "0" + m
//   if (s < 10) s = "0" + s

//     $result4_9.innerHTML = `Time ${h}:${m}:${s}` 
// }

// $btn4_9.onclick = getResult4_9

// 4.10


// let $title4_10 = document.createElement("h1");
// $title4_10.innerHTML =
//   "Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.";
// document.body.append($title4_10);

// let $task4_10 = document.createElement("div");
// $task4_10.classList.add("task4_10");
// $task4_10.innerHTML =
//   '<input class="input4_101" placeholder="hours" type="number"><input class="input4_102" placeholder="minutes" type="number"><input class="input4_103" placeholder="seconds" type="number"></input><button>calculate</button>';
// document.body.append($task4_10);

// let $task4_11 = document.createElement("div");
// $task4_11.classList.add("task4_10");
// $task4_11.innerHTML =
//   '<input class="input4_111" placeholder="hours" type="number"><input class="input4_112" placeholder="minutes" type="number"><input class="input4_113" placeholder="seconds" type="number"></input>';
// document.body.append($task4_11);
// let $btn4_10 = $task4_10.querySelector("button");
// let $result4_10 = document.createElement("div");
// $result4_10 = document.createElement("h1");
// $result4_10.style = "font-size: 40px";
// document.body.append($result4_10);

// let getResult4_10 = () => {
//   let h = Number($task4_10.querySelector(".input4_101").value)
//   let m = Number($task4_10.querySelector(".input4_102").value)
//   let s = Number($task4_10.querySelector(".input4_103").value)
//   let h1 = Number($task4_11.querySelector(".input4_111").value)
//   let m1 = Number($task4_11.querySelector(".input4_112").value)
//   let s1 = Number($task4_11.querySelector(".input4_113").value)

//   let s2 = h1 * 3600 + m1 * 60 + s1 * 1 - h * 3600 + m * 60 + s * 1
// let h2 = (s2 - s2 % 3600) / 3600,
//         m2 = s2 - h2 * 3600
//     m2 = (m2 - m2 % 60) / 60
//     s2 = s2 - h2 * 3600 - m * 60

    
//   if (h2 < 10) h = "0" + h
//   if (m2 < 10) m = "0" + m
//   if (s2 < 10) s = "0" + s

//     $result4_10.innerHTML = `Difference ${h}:${m}:${s}` 
// };

// $btn4_10.onclick = getResult4_10;