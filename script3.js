// "use strict";

// 3.1;

// let $title1 = document.createElement("h1");
// $title1.innerHTML =
//   "Подсчитать сумму всех чисел в заданном пользователем диапазоне.";
// document.body.append($title1);

// let $task1 = document.createElement("div");
// $task1.classList.add("task1");
// $task1.innerHTML =
//   '<input class="input_first" placeholder="initial number" type="number"><input class="input_last" placeholder="finite number" type="number"></input><button>calculate</button>';
// document.body.append($task1);
// let $btn1 = $task1.querySelector("button");
// let $result1 = document.createElement("div");
// $result1 = document.createElement ('h1')
// $result1.style = "font-size: 40px";
// document.body.append($result1);

// let getResult1 = () => {
//   let num1 = $task1.querySelector(".input_first").value;
//   let num2 = $task1.querySelector(".input_last").value;
//   let sum = 0;
//   while (num1 <= num2) {
//     sum += +num1;
//     num1++;
//   }
//   $result1.innerHTML = `The sum of the numbers in the range is ${sum}`;
// };

// $btn1.onclick = getResult1;

// 3.2;

// let $title2 = document.createElement("h1");
// $title2.innerHTML =
//   "Запросить 2 числа и найти только наибольший общий делитель.";
// document.body.append($title2);

// let $task2 = document.createElement("div");
// $task2.classList.add("task2");
// $task2.innerHTML =
//   '<input class="input_1" placeholder="first number" type="number"><input class="input_2" placeholder="second number" type="number"></input><button>calculate</button>';
// document.body.append($task2);
// let $btn2 = $task2.querySelector("button");
// let $result2 = document.createElement("div");
// $result2.innerHTML = "<h1></h1>";
// $result2.style = "font-size: 40px";
// document.body.append($result2);

// let getResult2 = () => {
//   let num1 = Number($task2.querySelector(".input_1").value);
//   let num2 = Number($task2.querySelector(".input_2").value);

//   while (num2 !== 0) num2 = num1 % (num1 = num2);

//   $result2.innerHTML = `greatest common factor ${num1}`;
// };

// $btn2.onclick = getResult2;

// 3.3;

// let $title3 = document.createElement("h1");
// $title3.innerHTML =
//   "Запросить у пользователя число и вывести все делители этого числа.";
// document.body.append($title3);

// let $task3 = document.createElement("div");
// $task3.classList.add("task3");
// $task3.innerHTML =
//   '<input class="input_3" placeholder="your number" type="number"></input><button>calculate</button>';
// document.body.append($task3);
// let $btn3 = $task3.querySelector("button");
// let $result3 = document.createElement("div");
// $result3.innerHTML = "<h1></h1>";
// $result3.style = "font-size: 40px";
// document.body.append($result3);

// let getResult3 = () => {
//   let num = Number($task3.querySelector(".input_3").value);
//   let divisors = "is";

//   for (let i = 1; i <= Math.round(num / 2); i++)
//     if (!(num % i)) divisors += i + ", ";

//   $result3.innerHTML = `divisors of this number ${divisors}`;
// };

// $btn3.onclick = getResult3;

// 3.4;

// let $title4 = document.createElement("h1");
// $title4.innerHTML = "Определить количество цифр в введенном числе.";
// document.body.append($title4);

// let $task4 = document.createElement("div");
// $task4.classList.add("task4");
// $task4.innerHTML =
//   '<input class="input_4" placeholder="your number" type="number"></input><button>calculate</button>';
// document.body.append($task4);
// let $btn4 = $task4.querySelector("button");
// let $result4 = document.createElement("div");
// $result4.innerHTML = "<h1></h1>";
// $result4.style = "font-size: 40px";
// document.body.append($result4);

// let getResult4 = () => {
//   let num = $task4.querySelector(".input_4").value;
//   $result4.innerHTML = `The amount of digits is ${num.length}`;
// };

// $btn4.onclick = getResult4;

// 3.5;

// let $title5 = document.createElement("h1");
// $title5.innerHTML =
//   "Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем.";
// document.body.append($title5);

// let $task5 = document.createElement("div");
// $task5.classList.add("task5");
// $task5.innerHTML =
//   '<input class="input_5" placeholder="your number" type="text"></input><button>calculate</button>';
// document.body.append($task5);
// let $btn5 = $task5.querySelector("button");
// $btn5.onclick = addNum;
// let $result5 = document.createElement("div");
// $result5.innerHTML = "<h1></h1>";
// $result5.style = "font-size: 40px";
// document.body.append($result5);
// let num = [];

// function addNum() {
//   num.push(Number($task5.querySelector(".input_5").value));
//   console.log(num);

//   if (num.length == 10) {
//     let numNull = 0,
//       numNeg = 0,
//       numPos = 0,
//       numEven = 0,
//       numOdd = 0;
//     for (let i = 0; i < 10; i++) {
//       let $num = num[i];
//       if ($num > 0) numPos++;
//       else if ($num == 0 || $num == null) numNull++;
//       else numNeg++;
//       if ($num % 2) numOdd++;
//       else numEven++;
//     }
//     $result5.innerHTML = `The amount of Positive numbers is ${numPos}. \nThe amount of Zeros is ${numNull}. \nThe amount of Negative numbers is ${numNeg} \n\nThe amount of Even numbers is ${numEven}. \nThe amount of Odd numbers is ${numOdd}.`;
//   }
// }

// 3.6;

// let $title6 = document.createElement("h1");
// $title6.innerHTML =
//   "Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется.";
// document.body.append($title6);

// let $task6 = document.createElement("div");
// $task6.classList.add("task6");
// $task6.innerHTML =
//   '<input class="input_61" placeholder="first number" type="number"><input class="input_62" placeholder="second number" type="number"></input><input class="input_63" placeholder="math operation" type="text"></input></input><button>calculate</button>';
// document.body.append($task6);
// let $btn6 = $task6.querySelector("button");
// let $result6 = document.createElement("div");
// $result6.innerHTML = "<h1></h1>";
// $result6.style = "font-size: 40px";
// document.body.append($result6);

// let getResult6 = () => {
//   let result = 0
//   let num1 = Number($task6.querySelector(".input_61").value);
//   let num2 = Number($task6.querySelector(".input_62").value);
//   let operator = $task6.querySelector(".input_63").value;

//   if (operator === "+") resNum = num1 + num2;
//   else if (operator === "-") result = num1 - num2;
//   else if (operator === "*") result = num1 * num2;
//   else if (operator === "/") result = (num1 / num2).toFixed(2);
//   $result6.innerHTML = `Your result is ${result} <button>one more?</button>`;
// };

// $btn6.onclick = getResult6;

// 3.7

// let $title7 = document.createElement("h1");
// $title7.innerHTML =
//   "Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612).";
// document.body.append($title7);

// let $task7 = document.createElement("div");
// $task7.classList.add("task7");
// $task7.innerHTML =
//   '<input class="input_71" placeholder="number" type="number"><input class="input_72" placeholder="shift" type="number"></input></input><button>calculate</button>';
// document.body.append($task7);
// let $btn7 = $task7.querySelector("button");
// let $result7 = document.createElement("div");
// $result7.innerHTML = "<h1></h1>";
// $result7.style = "font-size: 40px";
// document.body.append($result7);

// let getResult7 = () => {
//   let num1 = $task7.querySelector(".input_71").value
//   let num2 = $task7.querySelector(".input_72").value

//   let i = num1.length > 0 ? num2 % num1.length : 0
 
//   $result7.innerHTML = num1.slice(i)+num1.slice(0, i)
// }

// $btn7.onclick = getResult7;

// 3.8

// let $title8 = document.createElement("h1");
// $title8.innerHTML =
//   "Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK.";
// document.body.append($title8);

// let $task8 = document.createElement("div");
// $task8.classList.add("task8");
// $task8.innerHTML =
//   '<button>Next day</button>';
// document.body.append($task8);
// let $btn8 = $task8.querySelector("button");
// let $result8 = document.createElement("div");
// $result8.innerHTML = "<h1></h1>";
// $result8.style = "font-size: 40px";
// document.body.append($result8);
// let currDay = 0;

// let getResult8 = () => {
//   const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday?'];

//   $result8.innerHTML = `today "${days[currDay]}" Wanna see the next day? click on the button to continue`
// currDay = (currDay + 1) % days.length
 
// }

// $btn8.onclick = getResult8;

// 3.9

// let $title9 = document.createElement("h1");
// $title9.innerHTML =
//   "Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.";
// document.body.append($title9);

// let $task9 = document.createElement("div");
// $task9.classList.add("task9");
// $task9.innerHTML =
//   '<button>click to see multiplication table</button>';
// document.body.append($task9);
// let $btn9 = $task9.querySelector("button");
// let $result9 = document.createElement("div");
// $result9.innerHTML = "<h1></h1>";
// $result9.style = "font-size: 40px;";
// document.body.append($result9);


// let getResult9 = () => {

//   for (let i = 2; i < 10; i++) {
    
//     for (let x = 1; x < 10; x++)
//         $result9.innerHTML += `${i} * ${x} = ${i * x}` + '<br />'
// }
// }

// $btn9.onclick = getResult9;

// 3.10

// let $title10 = document.createElement("h1");
// $title10.innerHTML =
//   "Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10.";
// document.body.append($title10);

// let $task10 = document.createElement("div");
// $task10.classList.add("task10");
// $task10.innerHTML =
//   '<button> i want to play the game</button>';
// document.body.append($task10);
// let $btn10 = $task10.querySelector("button");
// let $result10 = document.createElement("div");
// $result10.innerHTML = "<h1></h1>";
// $result10.style = "font-size: 40px;";
// document.body.append($result10);


// let getResult10 = () => {
// let a = 0
// let b = 100
// let x, y
// while (b - a > 0) {
//     x = Math.ceil((a + b) / 2)
//     y = prompt(`Your number >${x}, <${x} or =${x}`)
//     if (y == `>`) a = x
//     if (y == `<`) b = x
//     if (y == `=`) break
// }
// return $result10.innerHTML = (`The number is ${x}`)
//     }
  

//     $btn10.onclick = getResult10; 