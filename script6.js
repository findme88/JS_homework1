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
  let num = purchases.length;
  for (let i = 0; i < num; i++)
    if (!purchases[i].buy)
      $result6_1.innerHTML +=
        `<span style="font-size: 14px;"><b>${i + 1}</b></span> <br />` +
        `<b>name</b>: ${purchases[i].name} <br /><b>required amount</b>: ${purchases[i].amount} <br /><b>buy</b>: ${purchases[i].buy} <br /> <br />`;

  for (let i = 0; i < num; i++)
    if (purchases[i].buy)
      $result6_1.innerHTML +=
        `<span style="font-size: 14px;"><b>${i + 1}</b></span> <br />` +
        `<b>name</b>: ${purchases[i].name} <br /><b>required amount</b>: ${purchases[i].amount} <br /><b>buy</b>: ${purchases[i].buy} <br /> <br />`;
};

$btn6_1.addEventListener("click", () => getInfo());

let addToList = (Name, Amount, Buy) => {
  let count = 0;
  for (let i = 0; i < purchases.length; i++)
    if (purchases[i].name == Name) {
      purchases[i].amount += Number(Amount);
      count++;
    }
  if (count == 0 && Name != "" && Amount != "") {
    purchases.push({
      name: Name,
      amount: Amount,
      buy: Boolean(Buy == "+"),
    });
  }
  getInfo();
};

$btn6_2.addEventListener("click", () =>
  addToList(
    $task6_1.querySelector(".input6_1").value,
    $task6_1.querySelector(".input6_2").value,
    $task6_1.querySelector(".input6_3").value
  )
);

let purchase = (product) => {
  for (let i = 0; i < purchases.length; i++)
    if (purchases[i].name == product) purchases[i].buy = true;
  getInfo();
};

$btn6_3.addEventListener("click", () =>
  purchase($task6_1.querySelector(".input6_1").value)
);

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
  $result6_22.innerHTML = "<hr>";
  for (let i = 0; i < check.length; i++)
    $result6_22.innerHTML +=
      `<b>name</b>: ${check[i].name} <br /><b>amount</b>: ${check[i].amount} <br /><b>price</b>: ${check[i].price} <br /> <br />` +
      `<hr>`;
};

$btn6_21.addEventListener("click", () => showCheck());

let sum = () => {
  let sum = 0;
  for (let i = 0; i < check.length; i++)
    sum += check[i].price * check[i].amount;
  $result6_22.innerHTML =
    `<span style="font-size: 18px;"><b>Total purchase amount: </b></span>` +
    sum +
    ` USD` +
    `<hr>`;
};

$btn6_22.addEventListener("click", () => sum());

let expensive = () => {
  let max = check[0].price;
  $result6_22.innerHTML =
    `<span style="font-size: 18px;"><b>The most expensive in your check is: </b></span>` +
    check[0].name +
    `--` +
    max +
    ` USD` +
    `<hr>`;
  for (let i = 0; i < check.length; i++)
    if (check[i].price > max) {
      max = check[i].price;
      $result6_22.innerHTML =
        `<span style="font-size: 18px;"><b>The most expensive in your check is: </b></span>` +
        check[i].name +
        ` - ` +
        max +
        ` USD` +
        `<hr>`;
    }
};

$btn6_23.addEventListener("click", () => expensive());

let average = () => {
  let count = 0,
    sum = 0;
  for (let i = 0; i < check.length; i++) {
    count += check[i].amount;
    sum += check[i].price * check[i].amount;
  }
  $result6_22.innerHTML =
    `<span style="font-size: 18px;"><b>The average price of products in check is: </b></span>` +
    (sum / count).toFixed(2);
};

$btn6_24.addEventListener("click", () => average());

6.3;
let $title6_3 = document.createElement("h2");
$title6_3.innerHTML = `3. Создать массив CSS-стилей (цвет, размер шрифта, выравнивание, подчеркивание и т. д.). <br>Каждый элемент массива – это объект, состоящий из двух свойств:<br> название стиля и значение стиля. <br>Написать функцию, которая принимает массив стилей и текст, и выводит этот текст с помощью document.write() в тегах <p> </p>, добавив в открывающий тег атрибут style со всеми стилями, перечисленными в массиве.`;
document.body.append($title6_3);

let style = [
  {
    name: "color",
    value: "red",
  },
  {
    name: "font-size",
    value: "20px",
  },
  {
    name: "text-align",
    value: "center",
  },
  {
    name: "text-decoration",
    value: "underline",
  },
  {
    name: "text-transform",
    value: "uppercase",
  },
  {
    name: "letter-spacing",
    value: "2px",
  },
  {
    name: "line-height",
    value: "40px",
  },
];

let $task6_31 = document.createElement("div");
$task6_31.innerHTML =
  '<input class="input6_31" placeholder="text" type="text"></input><button class = "button6_31">press</button>';
document.body.append($task6_31);
let $btn6_31 = $task6_31.querySelector(".button6_31");

let textStyle = (arr, text) => {
  let styles = "";
  for (let i = 0; i < arr.length; i++)
    styles += arr[i].name + ":" + arr[i].value + "; ";
  document.write(`<p style="${styles}">${text}</p>`);
};

$btn6_31.addEventListener("click", () =>
  textStyle(style, $task6_31.querySelector(".input6_31").value)
);

6.4;
let $title6_4 = document.createElement("h2");
$title6_4.innerHTML = `4. Создать массив аудиторий академии. Объект-аудитория состоит из названия, количества посадочных мест (от 10 до 20) и названия факультета, для которого она предназначена. Написать несколько функций для работы с ним <br>
Вывод на экран всех аудиторий;<br>
Вывод на экран аудиторий для указанного факультета;<br>
Вывод на экран только тех аудиторий, которые подходят для переданной группы. Объект-группа состоит из названия, количества студентов и названия факультета;<br>
Функция сортировки аудиторий по количеству мест;<br>
Функция сортировки аудиторий по названию (по алфавиту).`;
document.body.append($title6_4);

let classroom = [
  {
    name: "101",
    seats: 4,
    department: "cryptography",
  },
  {
    name: "102",
    seats: 6,
    department: "cryptography",
  },
  {
    name: "103",
    seats: 18,
    department: "cryptography",
  },
  {
    name: "104",
    seats: 2,
    department: "cryptography",
  },
  {
    name: "105",
    seats: 8,
    department: "cryptography",
  },
  {
    name: "201",
    seats: 16,
    department: "cryptography",
  },
  {
    name: "202",
    seats: 10,
    department: "mining",
  },
  {
    name: "203",
    seats: 12,
    department: "mining",
  },
  {
    name: "204",
    seats: 16,
    department: "mining",
  },
  {
    name: "301",
    seats: 20,
    department: "mining",
  },
  {
    name: "302",
    seats: 17,
    department: "PoW",
  },
  {
    name: "303",
    seats: 19,
    department: "PoW",
  },
  {
    name: "304",
    seats: 14,
    department: "PoW",
  },
];

let $task6_41 = document.createElement("div");
$task6_41.innerHTML =
  '<button class = "button6_41">Show classroom</button><input class="input6_42" placeholder="cryptography/mining/PoW" type="text"></input><button class = "button6_42">press</button>';
document.body.append($task6_41);
let $task6_42 = document.createElement("div");
$task6_42.innerHTML =
  '<input class="input6_43" placeholder="name" type="text"><input class="input6_44" placeholder="seats" type="text"><input class="input6_45" placeholder="department" type="text"></input><button class = "button6_43">press</button>';
document.body.append($task6_42);
let $task6_43 = document.createElement("div");
$task6_43.innerHTML =
  '<button class = "button6_44">Sort by seats</button><button class = "button6_45">Sort by name</button>';
document.body.append($task6_43);
let $btn6_41 = $task6_41.querySelector(".button6_41");
let $btn6_42 = $task6_41.querySelector(".button6_42");
let $btn6_43 = $task6_42.querySelector(".button6_43");
let $btn6_44 = $task6_43.querySelector(".button6_44");
let $btn6_45 = $task6_43.querySelector(".button6_45");
let $result6_4 = document.createElement("div");
$result6_4 = document.createElement("h1");
$result6_4.style = "font-size: 20px";
document.body.append($result6_4);

let showInfo = () => {
  for (let i = 0; i < classroom.length; i++)
    $result6_4.innerHTML += `<b>name</b>: ${classroom[i].name} <br /><b>seats</b>: ${classroom[i].seats} <br /><b>department</b>: ${classroom[i].department} <br /> <br />`;
};

$btn6_41.addEventListener("click", () => showInfo());

let departmentAuditories = (department) => {
  $result6_4.innerHTML = ""
  for (let i = 0; i < classroom.length; i++)
      if (classroom[i].department == department)
      $result6_4.innerHTML += `<b>name</b>: ${classroom[i].name} <br /><b>seats</b>: ${classroom[i].seats} <br /><b>department</b>: ${classroom[i].department} <br /> <br />`
}

$btn6_42.addEventListener('click', () => departmentAuditories($task6_41.querySelector(".input6_42").value))

let sort = (name, seats, department) => {
  $result6_4.innerHTML = ""
  for (let i = 0; i < classroom.length; i++)
      if (classroom[i].name == name && classroom[i].seats == seats && classroom[i].department == department)
      $result6_4.innerHTML += `<b>name</b>: ${classroom[i].name} <br /><b>seats</b>: ${classroom[i].seats} <br /><b>department</b>: ${classroom[i].department} <br /> <br />`
}

$btn6_43.addEventListener('click', () => sort($task6_42.querySelector(".input6_43").value, $task6_42.querySelector(".input6_44").value, $task6_42.querySelector(".input6_45").value))

let sortSeat = (arr) => {
  arr.sort((a, b) => a.seats > b.seats ? 1 : -1);
  showInfo()
}


$btn6_44.addEventListener('click', () => sortSeat (classroom))

let sortName = (arr) => {
  arr.sort((a, b) => a.name > b.name ? 1 : -1);
  showInfo()
}

$btn6_45.addEventListener('click', () => sortName (classroom))