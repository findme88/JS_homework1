"use strict";

6.1;

let $title6_1 = document.createElement("h2");
$title6_1.innerHTML = `1. Создать массив «Список покупок». Каждый элемент массива является объектом, который содержит название продукта, необходимое количество и куплен или нет. Написать несколько функций для работы с таким массивом.<br>

  Вывод всего списка на экран таким образом, чтобы сначала шли некупленные продукты, а потом – купленные.<br>
  Добавление покупки в список. Учтите, что при добавлении покупки с уже существующим в списке продуктом, необходимо увеличивать количество в существующей покупке, а не добавлять новую.<br>
  Покупка продукта. Функция принимает название продукта и отмечает его как купленный.`;
document.body.append($title6_1);

let purchases = [
  {
    name: "toilet paper",
    amount: 22,
    buy: true,
  },
  {
    name: "bread",
    amount: 3,
    buy: true,
  },
  {
    name: "water",
    amount: 10,
    buy: false,
  },
  {
    name: "bitcoin",
    amount: 2,
    buy: true,
  },
  {
    name: "mango",
    amount: 5,
    buy: false,
  },
  {
    name: "play station",
    amount: 1,
    buy: true,
  },
];

let $task6_1 = document.createElement("div");
$task6_1.innerHTML =
  '<button class = "button6_1">Show list</button><input class="input6_1" placeholder="product name" type="text"><input class="input6_2" placeholder="amount" type="text"><input class="input6_3" placeholder="status enter +/-" type="text"></input><button class = "button6_2">add product</button><button class = "button6_3">purchase product</button>';
document.body.append($task6_1);
let $btn6_1 = $task6_1.querySelector(".button6_1");
let $btn6_2 = $task6_1.querySelector(".button6_2");
let $btn6_3 = $task6_1.querySelector(".button6_3");
let $result6_1 = document.createElement("div");
$result6_1 = document.createElement("h1");
$result6_1.style = "font-size: 20px";
document.body.append($result6_1);

let getInfo = () => {
  let num = purchases.length
      for (let i = 0; i < num; i++)
        if (!(purchases[i].buy))
        $result6_1.innerHTML += `<span style="font-size: 14px;"><b>${i + 1}</b></span> <br />` + `<b>name</b>: ${purchases[i].name} <br /><b>required amount</b>: ${purchases[i].amount} <br /><b>buy</b>: ${purchases[i].buy} <br /> <br />`
        
    for (let i = 0; i < num; i++)
        if (purchases[i].buy)
        $result6_1.innerHTML += `<span style="font-size: 14px;"><b>${i + 1}</b></span> <br />` + `<b>name</b>: ${purchases[i].name} <br /><b>required amount</b>: ${purchases[i].amount} <br /><b>buy</b>: ${purchases[i].buy} <br /> <br />`
}


$btn6_1.addEventListener('click', () => getInfo())

let addToList = (Name, Amount, Buy) => {
  let count = 0
  for (let i = 0; i < purchases.length; i++)
      if (purchases[i].name == Name) {
          purchases[i].amount += Number(Amount)
          count++
      }
  if (count == 0 && (Name != '') && (Amount != '')) {
      purchases.push({
          name: Name,
          amount: Amount,
          buy: Boolean(Buy == '+')
      })
  }
  getInfo()
}

$btn6_2.addEventListener('click', () => (addToList($task6_1.querySelector(".input6_1").value, $task6_1.querySelector(".input6_2").value, $task6_1.querySelector(".input6_3").value)))

let purchase = (product) => {
  for (let i = 0; i < purchases.length; i++)
      if (purchases[i].name == product)
          purchases[i].buy = true
          getInfo()
}

$btn6_3.addEventListener('click', () => purchase($task6_1.querySelector(".input6_1").value))

6.2;

let $title6_2 = document.createElement("h2");
$title6_2.innerHTML = `2. Создать массив, описывающий чек в магазине. Каждый элемент массива состоит из названия товара, количества и цены за единицу товара. Написать следующие функции:<br>

Распечатка чека на экран;<br>
Подсчет общей суммы покупки;<br>
Получение самой дорогой покупки в чеке;<br>
Подсчет средней стоимости одного товара в чеке.`;
document.body.append($title6_2);

let $task6_22 = document.createElement("div");
$task6_22.innerHTML =
  '<button class = "button6_21">Show check</button><button class = "button6_22">total purchase amount</button><button class = "button6_23">most expensive</button><button class = "button6_24">average price</button>';
document.body.append($task6_22);
let $btn6_21 = $task6_22.querySelector(".button6_21");
let $btn6_22 = $task6_22.querySelector(".button6_22");
let $btn6_23 = $task6_22.querySelector(".button6_23");
let $btn6_24 = $task6_22.querySelector(".button6_24");
let $result6_22 = document.createElement("div");
$result6_22 = document.createElement("h1");
$result6_22.style = "font-size: 20px";
document.body.append($result6_22);

let check = [
  {
    name: "toilet paper",
    amount: 22,
    price: 5,
  },
  {
    name: "bread",
    amount: 3,
    price: 2,
  },
  {
    name: "water",
    amount: 10,
    price: 1,
  },
  {
    name: "bitcoin",
    amount: 2,
    price: 8735,
  },
  {
    name: "mango",
    amount: 5,
    price: 7,
  },
  {
    name: "play station",
    amount: 1,
    price: 380,
  },
];

let showCheck = () => {
  $result6_22.innerHTML = '<hr>'
  for (let i = 0; i < check.length; i++)
  $result6_22.innerHTML += `<b>name</b>: ${check[i].name} <br /><b>amount</b>: ${check[i].amount} <br /><b>price</b>: ${check[i].price} <br /> <br />` + `<hr>`
}

$btn6_21.addEventListener('click', () => showCheck())

let sum = () => {
  let sum = 0
  for (let i = 0; i < check.length; i++)
      sum += check[i].price * check[i].amount
      $result6_22.innerHTML = `<span style="font-size: 18px;"><b>Total purchase amount: </b></span>` + sum + ` USD` + `<hr>`
}

$btn6_22.addEventListener('click', () => sum())

let expensive = () => {
  let max = check[0].price
  $result6_22.innerHTML = `<span style="font-size: 18px;"><b>The most expensive in your check is: </b></span>` + check[0].name + `--` + max + ` USD` + `<hr>`
  for (let i = 0; i < check.length; i++)
      if (check[i].price > max) {
          max = check[i].price
          $result6_22.innerHTML = `<span style="font-size: 18px;"><b>The most expensive in your check is: </b></span>` + check[i].name + ` - ` + max + ` USD` + `<hr>`
      }
}

$btn6_23.addEventListener('click', () => expensive())

let average = () => {
  let count = 0, sum = 0
  for (let i = 0; i < check.length; i++) {
      count += check[i].amount
      sum += check[i].price * check[i].amount
  }
  $result6_22.innerHTML = `<span style="font-size: 18px;"><b>The average price of products in check is: </b></span>` + (sum / count).toFixed(2)
}

$btn6_24.addEventListener('click', () => average())

