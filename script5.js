"use strict";

5.1;

let $title5_1 = document.createElement("h2");
$title5_1.innerHTML =
  `1. Создать объект, описывающий автомобиль (производитель, модель, год выпуска, средняя скорость), и следующие функции для работы с этим объектом:<br>

  Функция для вывода на экран информации об автомобиле;<br>
  
  Функция для подсчета необходимого времени для преодоления переданного расстояния со средней скоростью. Учтите, что через каждые 4 часа дороги водителю необходимо делать перерыв на 1 час.`;
document.body.append($title5_1);

let $task5_1 = document.createElement("div");
$task5_1.innerHTML =
  '<button class = "button5_1">Show car info</button>';
document.body.append($task5_1);
let $btn5_1 = $task5_1.querySelector(".button5_1");
let $result5_1 = document.createElement("div");
$result5_1 = document.createElement("h1");
$result5_1.style = "font-size: 40px";
document.body.append($result5_1);
let $task5_11 = document.createElement("div");
$task5_11.innerHTML =
  '<input class="input5_11" placeholder="distance" type="number"></input><button class = "button5_11">calculate time</button>';
document.body.append($task5_11);
let $btn5_11 = $task5_11.querySelector(".button5_11");
let $result5_11 = document.createElement("div");
$result5_11 = document.createElement("h1");
$result5_11.style = "font-size: 40px";
document.body.append($result5_11);

let carProfile = {
    manufacturer: 'Bayerische Motoren Werke AG',
    model: 'BMW X7 (заводський індекс G07)',
    platform: '"35up" (CLAR)',
    "average speed": 90

}

let getResult5_1 = () => {
    $result5_1.innerHTML = `manufacturer: ${carProfile.manufacturer} 
    model: ${carProfile.model}
    platform: ${carProfile.platform}
    average speed (km/h): ${carProfile["average speed"]}`
}

let getResult5_11 = () => {
    let distance = Number($task5_11.querySelector(".input5_11").value)
    let h = (distance / carProfile["average speed"]) + Math.floor(distance / (4 * carProfile["average speed"]))
    if (Number.isInteger(h)) h--
    if (distance == '') h = 0
    $result5_11.innerHTML = `Time to cover the distance is: ${h} hours`
    
}

$btn5_11.onclick = getResult5_11;
$btn5_1.onclick = getResult5_1;

5.2

let $title5_2 = document.createElement("h2");
$title5_2.innerHTML =
  `2. Создать объект, хранящий в себе отдельно числитель и знаменатель дроби, и следующие функции для работы с этим объектом: <br>

  Функция сложения 2-х объектов-дробей;<br>
  
  Функция вычитания 2-х объектов-дробей;<br>
  
  Функция умножения 2-х объектов-дробей;<br>
  
  Функция деления 2-х объектов-дробей;<br>
  
  Функция сокращения объекта-дроби.`;
document.body.append($title5_2);

let $task5_2 = document.createElement("div");
$task5_2.innerHTML =
  '<input class="input5_21" placeholder="numerator" type="number"><input class="input5_22" placeholder="denominator" type="number"></input>';
document.body.append($task5_2);

let $task5_21 = document.createElement("div");
$task5_21.innerHTML =
'<button class = "button5_21">+addition</button><button class = "button5_22">-subtraction</button><button class = "button5_23">*multiplications</button><button class = "button5_24">/division</button><button class = "button5_25">reduction</button>';
document.body.append($task5_21);

let $result5_2 = document.createElement("div");
$result5_2 = document.createElement("h1");
$result5_2.style = "font-size: 40px";
document.body.append($result5_2);

let $btn5_21 = $task5_21.querySelector(".button5_21");
let $btn5_22 = $task5_21.querySelector(".button5_22");
let $btn5_23 = $task5_21.querySelector(".button5_23");
let $btn5_24 = $task5_21.querySelector(".button5_24");
let $btn5_25 = $task5_21.querySelector(".button5_25");

let fraction = {numerator: '', denominator: '' }



let addition = () => {
 fraction.numerator = Number($task5_2.querySelector(".input5_21").value)
 fraction.denominator = Number($task5_2.querySelector(".input5_22").value)

    $result5_2.innerHTML = `addition result ${fraction.numerator + fraction.denominator} ` 
}

$btn5_21.onclick = addition

let subtraction = () => {
    fraction.numerator = Number($task5_2.querySelector(".input5_21").value)
    fraction.denominator = Number($task5_2.querySelector(".input5_22").value)
   
       $result5_2.innerHTML = `subtraction result ${fraction.numerator - fraction.denominator} ` 
   }
   
   $btn5_22.onclick = subtraction

   let multiplications = () => {
    fraction.numerator = Number($task5_2.querySelector(".input5_21").value)
    fraction.denominator = Number($task5_2.querySelector(".input5_22").value)
   
       $result5_2.innerHTML = `multiplications result ${fraction.numerator * fraction.denominator} ` 
   }
   
   $btn5_23.onclick = multiplications

   let division = () => {
    fraction.numerator = Number($task5_2.querySelector(".input5_21").value)
    fraction.denominator = Number($task5_2.querySelector(".input5_22").value)
   
       $result5_2.innerHTML = `division result ${fraction.numerator / fraction.denominator} ` 
   }
   
   $btn5_24.onclick = division

let reduction = () => {
   fraction.numerator = Number($task5_2.querySelector(".input5_21").value)
    fraction.denominator = Number($task5_2.querySelector(".input5_22").value)
      let  M = fraction.numerator
      let N = fraction.denominator;
	for (let i = 2; i <= fraction.numerator; i++) {
		if (fraction.numerator % i === 0 &&  fraction.denominator % i === 0)
			M = fraction.numerator / i, N = fraction.denominator / i;
	}
    $result5_2.innerHTML = `reduction result ${M} | ${N}`
}

$btn5_25.onclick = reduction

5.3

let $title5_3 = document.createElement("h2");
$title5_3.innerHTML =
  `3. Создать объект, описывающий время (часы, минуты, секунды), и следующие функции для работы с этим объектом: <br>

  Функция вывода времени на экран;<br>
  
  Функция изменения времени на переданное количество секунд;<br>
  
  Функция изменения времени на переданное количество минут;<br>
  
  Функция изменения времени на переданное количество часов. <br>
  
  Учтите, что в последних 3-х функциях, при изменении одной части времени, может измениться и другая. Например, если ко времени «20:30:45» добавить 30 секунд, то должно получиться «20:31:15», а не «20:30:75».`;
document.body.append($title5_3);

let $task5_3 = document.createElement("div");
$task5_3.innerHTML =
  '<button class = "button5_31">Show time</button><input class="input5_31" placeholder="add seconds" type="number"></input><button class = "button5_32">add seconds</button><input class="input5_32" placeholder="add minutes" type="number"></input><button class = "button5_33">add minutes</button><input class="input5_33" placeholder="add hours" type="number"></input><button class = "button5_34">add hours</button>';
document.body.append($task5_3);
let $btn5_31 = $task5_3.querySelector(".button5_31");
let $btn5_32 = $task5_3.querySelector(".button5_32");
let $btn5_33 = $task5_3.querySelector(".button5_33");
let $btn5_34 = $task5_3.querySelector(".button5_34");
let $result5_3 = document.createElement("div");
$result5_3 = document.createElement("h1");
$result5_3.style = "font-size: 40px";
document.body.append($result5_3);

let time = {
    hours: 20,
    minutes: 30,
    seconds: 45
}

let showTime = (h, m, s) => {
    if (h < 10) h = "0" + h
    if (m < 10) m = "0" + m
    if (s < 10) s = "0" + s
    $result5_3.innerHTML = `The time is ${h} : ${m} : ${s}`
}

$btn5_31.addEventListener('click', () => showTime(time.hours, time.minutes, time.seconds))

function inSeconds(h, m, s) {
  return h * 3600 + m * 60 + s * 1
}

function fromSeconds(s) {
  let h = (s - s % 3600) / 3600,
      m = s - h * 3600
  m = (m - m % 60) / 60
  s = s - h * 3600 - m * 60
  if (h > 23) h %= 24
  showTime(h, m, s)
}

function addSeconds(s) {
  return inSeconds(time.hours, time.minutes, time.seconds) + s
}

function addMinutes(m) {
  return inSeconds(time.hours, time.minutes, time.seconds) + 60 * m
}

function addHours(h) {
  return inSeconds(time.hours, time.minutes, time.seconds) + 3600 * h
}


$btn5_32.addEventListener('click', () => fromSeconds(addSeconds(Number($task5_3.querySelector(".input5_31").value))))
$btn5_33.addEventListener('click', () => fromSeconds(addMinutes(Number($task5_3.querySelector(".input5_32").value))))
$btn5_34.addEventListener('click', () => fromSeconds(addHours(Number($task5_3.querySelector(".input5_33").value))))