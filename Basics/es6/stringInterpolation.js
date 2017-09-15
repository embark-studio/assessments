const avatar = "Aang";
const primaryElement = "Air";

/* Concatination is one way to accomplish string interpolation, done by appending
two or more variables or blocks of strings using '+' */
console.log("Concatination:\n" + avatar + "\'s primary element is "
  + primaryElement);

/* Template literals are another way to accomplish string interpolation, */
console.log(`Template literal:\n${avatar}\'s primary element is ${primaryElement}`)

//The above can also be accomplished by doing this:
console.log(`Template literal:
${avatar}\'s primary element is ${primaryElement}`)
