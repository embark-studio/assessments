/* An Object is, in essence, an object wrapper that is a variable that can hold
children variables that are attributed to it. An object variable can contain
strings, numerical values, and boolean */
const avatar = {
  name: "Aang",
  age: 14,
  isAlive: true,
  primaryElement: "Air"
}

/* Any of the values inside of an object can be accessed by using 'object.value' */
console.log("The Avatar " + avatar.name + " is a " + avatar.age
  + " year old boy whose primary element is " + avatar.primaryElement + ". It is "
  + avatar.isAlive + " that " + avatar.name + " is still alive.")

/* Arrays are objects that can store any type of value (strings, numerical values,
and boolean) but the only drawback is that it must adhere to its value type.
An array of strings cannot also contain booleans or numerical values */
const elements = [
  "Water",
  "Earth",
  "Air",
  "Fire"
];

const newElements = [
  "Metal",
  "Thunder",
  "Blood",
  "Energy"
];

/* Arrays can be concatanated into another array so long as they are the same
value type */
const allElements = [
  elements + newElements
];

for (var i = 0; i < allElements.length; i++) {
  let element = allElements[i];
  console.log(element + " ");
}
