"use strict";

// 2.1

// let $btn = document.createElement('div')
// $btn.innerHTML = '<input type="number"><button>Enter your age</button>'
// document.body.append($btn)
// let $btn2 = $btn.querySelector('button')
// let $result = document.createElement('div')
// $result.innerHTML = '<h1></h1>'
// $result.style = 'font-size: 40px'
// document.body.append($result)

// let social = () => {
//    let age = $btn.querySelector('input').value;

//      (age >=0 && age < 12) ? $result.innerHTML = 'CHILD':
//      (age >= 12 && age < 18) ? $result.innerHTML = 'teenager':
//      (age >= 18 && age <60) ? $result.innerHTML = 'marriageable' :
//     $result.innerHTML = 'pensioner'
// }

// $btn2.onclick = social

// 2.2;

// let $btn = document.createElement("div");
// $btn.innerHTML = '<input type="number"><button>Enter number</button>';
// document.body.append($btn);
// let $btn2 = $btn.querySelector("button");
// let $result = document.createElement("div");
// $result.innerHTML = "<h1></h1>";
// $result.style = "font-size: 40px";
// document.body.append($result);

// let symbol = () => {
//   let num = $btn.querySelector("input").value;

//   switch (num) {
//     case "0":
//       $result.innerHTML = ")";
//       break;
//     case "1":
//       $result.innerHTML = "!";
//       break;
//       case "2":
//       $result.innerHTML = "@";
//       break;
//       case "3":
//       $result.innerHTML = "#";
//       break;
//       case "4":
//       $result.innerHTML = "$";
//       break;
//       case "5":
//       $result.innerHTML = "%";
//       break;
//       case "6":
//       $result.innerHTML = "^";
//       break;
//       case "7":
//       $result.innerHTML = "&";
//       break;
//       case "8":
//       $result.innerHTML = "*";
//       break;
//       case "9":
//       $result.innerHTML = "(";
//       break;
//       default:
//         $result.innerHTML = "there is no such figure on the keyboard";
//   }
// };

// $btn2.onclick = symbol;

// 2.3

// let $btn = document.createElement("div");
// $btn.innerHTML =
//   '<input type="number"><button>Enter three digit number</button>';
// document.body.append($btn);
// let $btn2 = $btn.querySelector("button");
// let $result = document.createElement("div");
// $result.innerHTML = "<h1></h1>";
// $result.style = "font-size: 40px";
// document.body.append($result);

// let calc = () => {
//     let num = $btn.querySelector("input").value;
//   let a = (num - (num % 100)) / 100,
//     b = num - 100 * a;
//   b = (b - (b % 10)) / 10;
//   let c = num - 100 * a - 10 * b;
//   if (a == b || b == c || c == a) $result.innerHTML = "have the same numbers";
//   else $result.innerHTML = "no equal";
// };

// $btn2.onclick = calc;

// 2.4

// let $btn = document.createElement("div");
// $btn.innerHTML =
//   '<input type="number"><button>Enter year</button>';
// document.body.append($btn);
// let $btn2 = $btn.querySelector("button");
// let $result = document.createElement("div");
// $result.innerHTML = "<h1></h1>";
// $result.style = "font-size: 40px";
// document.body.append($result);

// let year = () => {
//     let num = $btn.querySelector("input").value;
//     if (!(num % 400) || (!(num % 4) && (num % 100)))
//     $result.innerHTML = "leap Year"
//     else $result.innerHTML = "not leap Year"
// }

// $btn2.onclick = year

// 2.5

// let $btn = document.createElement("div");
// $btn.innerHTML =
//   '<input type="number"><button>Enter five digit number</button>';
// document.body.append($btn);
// let $btn2 = $btn.querySelector("button");
// let $result = document.createElement("div");
// $result.innerHTML = "<h1></h1>";
// $result.style = "font-size: 40px";
// document.body.append($result);

// let pal = () => {
//   let numPal = $btn.querySelector("input").value;
//   let result = "";
//   let num = numPal;
//   while (num > 0) {
//     result = result + (num % 10);
//     num = parseInt(num / 10);
//   }
//   if (result == numPal) $result.innerHTML = "palindrome";
//   else $result.innerHTML = "NOT palindrome";
// };

// $btn2.onclick = pal

// 2.6;

// let $btn = document.createElement("div");
// $btn.innerHTML = '<input type="number"><button>amount of dollars</button>';
// document.body.append($btn);
// let $btn2 = $btn.querySelector("button");
// let $result = document.createElement("div");
// $result.innerHTML = "<h1></h1>";
// $result.style = "font-size: 40px";
// document.body.append($result);

// let exc = () => {
//   let usd = $btn.querySelector("input").value;
//   let cur = prompt("enter currency eur|uah|azn");
//   if (cur == "EUR" || cur == "eur") $result.innerHTML = `you will receive ${usd * 0.92}eur`;
//   else if (cur == "UAH" || cur == "uah")
//   $result.innerHTML = `you will receive ${usd * 27.10}uah`;
//   else if (cur == "AZN" || cur == "azn") $result.innerHTML = `you will receive ${usd * 1.7}azn`;
// };

// $btn2.onclick = exc;

2.7;

// let $btn = document.createElement("div");
// $btn.innerHTML = '<input type="number"><button>enter purchase amount</button>';
// document.body.append($btn);
// let $btn2 = $btn.querySelector("button");
// let $result = document.createElement("div");
// $result.innerHTML = "<h1></h1>";
// $result.style = "font-size: 40px";
// document.body.append($result);

// let discount = () => {
//   let amount = $btn.querySelector("input").value;
//   if (amount >= 200 && amount < 300) $result.innerHTML = `amount payable ${amount * 0.97}`
// else if (amount >= 300 && amount < 500) $result.innerHTML = `amount payable ${amount * 0.95}`
// else if (amount >= 500) $result.innerHTML = `amount payable ${amount * 0.93}`

// }

// $btn2.onclick = discount;

// 2.8;

// let $btn = document.createElement("div");
// $btn.innerHTML =
//   '<input type="number"><button>enter  the length of a circle</button>';
// document.body.append($btn);
// let $btn2 = $btn.querySelector("button");
// let $result = document.createElement("div");
// $result.innerHTML = "<h1></h1>";
// $result.style = "font-size: 40px";
// document.body.append($result);

// let math = () => {
//   let length = $btn.querySelector("input").value;
//   let perimeter = prompt("Write the perimeter of a square", "");
//   if (length <= (Math.PI * perimeter) / 4)
//     $result.innerHTML = "the circle is squared";
//   else $result.innerHTML = "the circle does not fit in the square";
// };

// $btn2.onclick = math;

// 2.9
// let $btn = document.createElement("div");
// $btn.innerHTML =
//   '<button>Push the button for start</button>';
// document.body.append($btn);
// let $btn2 = $btn.querySelector("button");
// let $result = document.createElement("div");
// $result.innerHTML = "<h1></h1>";
// $result.style = "font-size: 40px";
// document.body.append($result);

// let test = () => {
//   let $question = document.createElement('h1')
//   $question.innerHTML = 'What is the first cryptocurrency?'
//   document.body.append($question)
//   let $list = document.createElement('ol'),
//   $answ1 = document.createElement('li'),
//   $answ2 = document.createElement('li'),
//   $answ3 = document.createElement('li'),
//   $nextButton = document.createElement('button')
//   let score = 0
//   $answ1.innerHTML = `<input type="radio" id="1">
//     <label for="1">Dogecoin</label>`
//     $answ2.innerHTML = `<input type="radio" id="2">
//     <label for="2">Bitconnect</label>`
//     $answ3.innerHTML = `<input type="radio" id="3">
//     <label for="3">Bitcoin</label>`
//     document.body.append($list)
//     $list.append($answ1, $answ2, $answ3, $nextButton)
//     $nextButton.innerText = 'Next question'
//     $nextButton.addEventListener('click', () => {
//       if (document.getElementById("3").checked) score = 2;
//       $question.innerText = "what is the block time of bitcoin?"
//       $answ1.innerHTML = `<input type="radio" id="4">
//   <label for="4">1min</label>`
//       $answ2.innerHTML = `<input type="radio" id="5">
//   <label for="5">10min</label>`
//       $answ3.innerHTML = `<input type="radio" id="6">
//   <label for="6">15sec</label>`
//   $nextButton.addEventListener('click', () => {
//     if (document.getElementById("5").checked) score += 2;
//     $question.innerText = "When was Bitcoin invented?"
//     $answ1.innerHTML = `<input type="radio" id="7">
// <label for="7">2008</label>`
//     $answ2.innerHTML = `<input type="radio" id="8">
// <label for="8">2001</label>`
//     $answ3.innerHTML = `<input type="radio" id="9">
// <label for="9">2016</label>`
//     $nextButton.addEventListener('click', () => {
//         if (document.getElementById("7").checked) score += 2;
//         $question.innerText = ''
//         $list.innerHTML = ''
//         $result.innerHTML = 'Your final score is ' + score + ' points';
//       })
//     })
// })
// }

// $btn2.onclick = test;
// 2.10

// let $btn = document.createElement("div");
// $btn.innerHTML =
//   '<button>Push the button</button>';
// document.body.append($btn);
// let $btn2 = $btn.querySelector("button");
// let $result = document.createElement("div");
// $result.innerHTML = "<h1></h1>";
// $result.style = "font-size: 40px";
// document.body.append($result);

// let date = () => {
//   let day = prompt('Write the day', '')
//     let month = prompt('Write the month', '')
//     let year = prompt('Write the year', '')
//     if ((!(year % 400) || (!(year % 4) && (year % 100))) && month == 2 && day == 28) day++
//     else if ((!(year % 400) || (!(year % 4) && (year % 100))) && month == 2 && day == 29) { month++; day = 1 }

//     else switch (month) {
//         case "2":
//             if (day == 28) { month++; day = 1 }
//             else day++
//             break;
//         case "4":
//         case "6":
//         case "9":
//         case "11":
//             if (day == 30) { month++; day = 1 }
//             else day++
//             break;
//         case "1":
//         case "3":
//         case "5":
//         case "7":
//         case "8":
//         case "10":
//             if (day == 31) { month++; day = 1 }
//             else day++
//             break;
//         case "12":
//             if (day == 31) { year++; month = 1; day = 1 }
//             else day++
//             break;
//     }

//     $result.innerHTML =`next date is ${day}.${month}.${year}`

//   }

//   $btn2.onclick = date;

