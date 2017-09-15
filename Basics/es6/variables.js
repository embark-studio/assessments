/* A variable created using 'const' becomes a constant, meaning that the variable
can no longer be changed after it has been created. Attemptin to do so throws
an error */
const avatar = "Aang";

/* A variable created using 'let' can be affected in any way */
let primaryElement = "Air";
console.log(primaryElement);

primaryElement = "Water";
console.log(primaryElement);
