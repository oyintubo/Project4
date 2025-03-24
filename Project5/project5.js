function myFunction() {
  document.getElementById("demo1").innerHTML = "Hello Molly";
  document.getElementById("demo2").innerHTML = "How are you";
}

let x, y, z;
x = 5;
y = 5;
z = 7;

let g = "3" + 4 + 6;

const motor = ["Mecedes", "BMW", "Audi"];

function home() {
  document.getElementById("demo").innerHTML = myArray;
}

const person = {
  age: 50,
  firstName: "John",
  lastName: "Oki",
  myCars: {
    car1: "Ford",
    car2: "BMW",
    car3: "Fiat",
  },
  id: 5566,
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};


const myArray = Object.values(person);


let text = "";
for (let x in person) {
  text += person[x] + " ";
};