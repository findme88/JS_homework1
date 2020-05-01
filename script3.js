"use strict";

3.1;

let $title1 = document.createElement("h1");
$title1.innerHTML =
  "Подсчитать сумму всех чисел в заданном пользователем диапазоне.";
document.body.append($title1);

let $task1 = document.createElement("div");
$task1.classList.add("task1");
$task1.innerHTML =
  '<input class="input_first" placeholder="initial number" type="number"><input class="input_last" placeholder="finite number" type="number"></input><button>calculate</button>';
document.body.append($task1);
let $btn1 = $task1.querySelector("button");
let $result1 = document.createElement("div");
$result1.innerHTML = "<h1></h1>";
$result1.style = "font-size: 40px";
document.body.append($result1);

let getResult1 = () => {
  let num1 = $task1.querySelector(".input_first").value;
  let num2 = $task1.querySelector(".input_last").value;
  let sum = 0;
  while (num1 <= num2) {
    sum += +num1;
    num1++;
  }
  $result1.innerHTML = `The sum of the numbers in the range is ${sum}`;
};

$btn1.onclick = getResult1;

3.2

let $title2 = document.createElement("h1");
$title2.innerHTML =
  "Запросить 2 числа и найти только наибольший общий делитель.";
document.body.append($title2);

let $task2 = document.createElement("div");
$task2.classList.add("task2");
$task2.innerHTML =
  '<input class="input_1" placeholder="first number" type="number"><input class="input_2" placeholder="second number" type="number"></input><button>calculate</button>';
document.body.append($task2);
let $btn2 = $task2.querySelector("button");
let $result2 = document.createElement("div");
$result2.innerHTML = "<h1></h1>";
$result2.style = "font-size: 40px";
document.body.append($result2);

let getResult2 = () => {
  let num1 = Number ($task2.querySelector(".input_1").value)
  let num2 = Number ($task2.querySelector(".input_2").value)
  
  while (num2 !== 0)
  num2 = num1 % (num1 = num2);
    
  $result2.innerHTML = `greatest common factor ${num1}`;
};

$btn2.onclick = getResult2;

3.3

let $title3 = document.createElement("h1");
$title3.innerHTML =
  "Запросить у пользователя число и вывести все делители этого числа.";
document.body.append($title3);

let $task3 = document.createElement("div");
$task3.classList.add("task3");
$task3.innerHTML =
  '<input class="input_3" placeholder="your number" type="number"></input><button>calculate</button>';
document.body.append($task3);
let $btn3 = $task3.querySelector("button");
let $result3 = document.createElement("div");
$result3.innerHTML = "<h1></h1>";
$result3.style = "font-size: 40px";
document.body.append($result3);

let getResult3 = () => {
 let num = Number ($task3.querySelector(".input_3").value)
let divisors = 'hello'

 for (let i = 1; i <= Math.round(num / 2); i++)
        if (!(num % i)) divisors += i + ', '

        $result3.innerHTML = `divisors of this number ${divisors}`;

}

$btn3.onclick = getResult3;

