"use strict";

function createGreeting(name, age) {
  return `Hi, my name is ${name} and I am ${age} years old.`;
}

createGreeting();

const greeting1 = createGreeting();
console.log(greeting1);
