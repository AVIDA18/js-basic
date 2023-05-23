//String proerties
let d = "Avishek";
console.log(d.charAt(2));
console.log(d.localeCompare("a")); //checks wether there 'a' exists or not
console.log(d.length);

//printing methods
alert("Welcome Here"); //(prompt, confirm)
document.write("hello");
console.log("hello");

//Functions
const greet = function functionName(name) {
  console.log("Hello " + name);
};
greet("Avishek");

//Array function
const add = (a, b) => {
  console.log(a + b);
};
add(33, 22);

//function using Return
const sum = (a, b) => {
  return a + b;
};
console.log(sum(33, 22));

//creating Objects
let obje = {
  Name: "Avishek Dahal",
  Age: 23,
  Greet: function () {
    console.log("Hello " + this.Name);
  },
};
console.log(obje.Name);
obje.Greet();

//creating classes

class Person {
  constructor(Name, Age) {
    this.Name = Name;
    this.Age = Age;
  }
  greet() {
    console.log("Hello " + this.Name + "!"); //Why this.Name instead of Name: person.Name le ni kaam garxa
  }
}
const person = new Person("AVIDA", 23);
console.log(person.Name);
person.greet();

//Array and Array Methods
var a = [1, 2];
var b = [1, "a"];
let ab = a.concat(b); //using concat()
console.log("array concatination: " + ab);

//for each in array
let names = ["Avishek", "Raju", "Dhiraj"];

names.forEach((index) => {
  console.log(index);
});

// let obj = {
//     name: 'avishek',
//     class: 12
// }

// const erson = {
//     name : "Avishek",
//     isMarried : false ,
// };

// const {name, isMarried} = person; //instead of doing person.name, person.isMarried

// console.log(obj);
//push, pop, shift, unshift,
let arr1 = ["avishek", "dahal"];
let arr2 = ["sushil", "karki"];
arr1.push("new name");
console.log(arr1);
arr1.pop(0);
console.log(arr1);
arr2.shift();
console.log(arr2);
arr2.unshift("apple", "banana");
console.log(arr2);
const newArr = [...arr1, ...arr2];
console.log(newArr);

//Map
const nums = [1, 2, 3];
const double = nums.map((e) => e * 2);
console.log(double);

let superArr = newArr.map((e, i) => {
  return e + ":" + i;
});
console.log(superArr);

//filter
const numb = [1, 2, 3, 4, 5, 6];
const even = numb.filter((e) => e % 2 == 0);
console.log(even);

//splice
//(numb array is used)
const removedElements = numb.splice(2, 1); //splice(2,1) 2 is index 1 is no. of elements to remove
console.log(removedElements);
console.log(numb);

//set() method
const repeatedArray = [1, 2, 3, 4, 5, 6, 1, 2, 3, 4];
let nonRepeatedArray = [...new Set(repeatedArray)];
console.log(nonRepeatedArray);

//IF condition
const age = 18;
if (age >= 18) {
  console.log("You can vote");
} else {
  console.log("You cannot vote");
}

//if else
haveNationalityID = false;
if (age >= 16) {
  console.log("You can apply for Nationality ID");
} else if (age >= 18 && (haveNationalityID = true)) {
  console.log("You can apply for voting ID");
} else {
  console.log("You are a kid.");
}
//ternary operator
var age2 = 13;
var res = (age2 >= 18) ? "you can vote" : "You cannot vote";
console.log(res);

//for Loop
for (let i = 0; i < 10; i++) {
  console.log("Avishek Dahal");
}

//while
let i = 0;
while (i < 10) {
  console.log("Avishek Dahal");
  i++;
}

//for each
numb.forEach(function (e) {
  //numb array taken from above
  console.log(e);
});

//DOM document object model
//selecting elements(getElementsById) and modifiying contents(.innerHTML)
let result = "dattevayo";
document.getElementById("dom").innerHTML = result;

//Destructuring
const [first, second] = [1, 2, 3];
console.log(first, second);

const { name, Age } = { name: "Avishek", Age: 23 };
console.log(name, Age);

//Asyncronous Program
setTimeout(function () {
  console.log("Avishek Dahal in 3 seconds");
}, 3000);
console.log("end");

//Callback function
function greeting(name, Callback) {
  console.log("Hello " + name);
  Callback();
}
function sayGoodBye() {
  console.log(" Bye!");
}
greeting("Avishek", sayGoodBye);

//Promise
let p1 = new Promise((resolve, reject) => {
  console.log("Promise is Pending");
  setTimeout(() => {
    // console.log("I am a promise and I am fullfilled");
    resolve(true);
  }, 4000);
});

let p2 = new Promise((resolve, reject) => {
  console.log("Promise is Pending");
  setTimeout(() => {
    // console.log("I am a promise and I am rejcted");
    reject(new Error("Some error has occoured"));
  }, 5000);
});
// p1.then((value)=>{
//     console.log(value);
// });

// p2.catch((error)=>{
//     console.log("Some error has occoured in p2!");
// });

//let promise_all = Promise.all([p1, p2]);      //if any promise is rejected then error occours
let promise_all = Promise.allSettled([p1, p2]); //It shows output even if any one promise is rejected
promise_all.then((value) => {
  console.log(value);
});

//async/await
async function avida() {
  let p1 = new Promise((resolve, reject) => {
    console.log("Promise is Pending");
    setTimeout(() => {
      resolve("This is First");
    }, 6000);
  });

  let p2 = new Promise((resolve, reject) => {
    console.log("Promise is Pending");
    setTimeout(() => {
      resolve("This is 2nd");
    }, 7000);
  });
  console.log("Fetching p1 data...");
  let first_p1 = await p1;
  console.log("fetching p2 data...");
  let second_p2 = await p2; //It awaits till p1 promise is completed
  console.log("Here is the final result");
  return [first_p1, second_p2];
}
final = avida();
final.then((e) => {
  console.log(e);
});
