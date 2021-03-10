const myWeirdArray = [
    "Test goes here",
    1,
    [0, 1, 2, 3],
    function myFunction() {alert('Hello World')}
];

let animals = [ "Lion",
"Tiger", "Giraffe",
"Elephant", "Monkey", "Lemur", "Rhinoceros" ];

let firstAnimal = animals[0]

// declare empty array
let a = new Array();
let b = []; console.log(a);
console.log(b);

// declare array with contents
let c = ["apple", "orange", 37, 'x'];
console.log(c);

// add value to a specific location
c[3] = "Element 4";
console.log(c);
console.table (c);

c.push("Element 5"); 
console.log(c);
let element = c.pop(); 
console.log(element); 
console.log(c);

c=c.join("--"); 
console.log(c);

const numbers = [1,2,3,4,5,6,7,8,9]; 
function double(num) {
    return 2 * num;
  }

  let doubles = numbers.map(double); 
  console.log(doubles);

function getSum(total,num) {
    // num: initial value
    return total + num;
}
let total1 = numbers.reduce(getSum);
console.log(total1);
let total2 = numbers.reduce(getSum, 10);
//add up from 10 
console.log(total2);