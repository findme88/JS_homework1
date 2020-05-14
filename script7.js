let arr = ['4', 5, 888, 3, 'a2', '1', 666, 75, '23', 'Tracer', 6666, 12, 89, 22]

let arr2 = arr.filter((el) => el === +el )
console.log(arr2)

let arr3 = arr2.map((el) => el % 2 === 0 ? el = 2 : el)

console.log(arr3)

console.log(arr3.reverse())

let i = 0

arr.forEach((el) => console.log(`Element № ${i++} = ${el}`))

let sum = 0

arr2.forEach((el) => sum = sum + el)

console.log(sum)