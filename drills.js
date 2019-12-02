"use strict";

function getYearOfBirth(age) {
  if (age < 0) {
    throw new Error("Age can not be negative.");
  }
  return 2019 - age;
}

function createGreeting(name, age) {
  if (age === undefined || name === undefined) {
    throw new Error("Arguments not valid.");
  } else if (typeof age === isNaN || typeof name !== "string") {
    throw new TypeError("Wrong type");
  }

  const yearOfBirth = getYearOfBirth(age);
  return `Hi, my name is ${name} and I am ${age} years old. I was born in ${yearOfBirth}`;
}

try {
  const greeting1 = createGreeting();
  log(greeting1);
} catch (err) {
  console.error(err.message);
}
