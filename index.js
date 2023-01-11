// ES6 Features:
// --------------------------------------------
// 1- Object Destructuring > [Destructure the Obj properties to get simpler to use variables name]
// --------------------------------------------

const person = {
  name: "Mr. Whiskerson",
  phone: "(800) 555-1234",
  email: "mr.whiskaz@catnap.meow",
};

// console.log(person.email);

const { name, tel, email } = person;
// console.log(email);

// --------------------------------------------
// 2- Array.map();    [Resulting to create a  new Array]
// --------------------------------------------
const nums = [1, 2, 3, 4, 5];
const doubledNums = nums.map((num) => {
  return num * 2; //Result: Array(5) [ 2, 4, 6, 8, 10 ]
});

console.log(doubledNums);

// Challenge -  Given below array of strings [names], return an array where the first letter of each string is capitalized
const names = ["alice", "bob", "charlie", "danielle"];
// -->Result to be        ["Alice", "Bob", "Charlie", "Danielle"]

const captlizedNames = names.map(function (name) {
  // return name[0].toUpperCase() + name.slice(1, name.length);
  return name[0].toUpperCase() + name.slice(1); //or 1 to the end slice method
});

console.log(captlizedNames); //[ 'Alice', 'Bob', 'Charlie', 'Danielle' ]

// Challenge Given an array of strings, return an array of strings that wraps each of the original strings in an HTML-like <p></p> tag.

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"];
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]

const paragraphs = pokemon.map((mon) => `<p>${mon}</p>`);

console.log(paragraphs);
