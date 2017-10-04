//const variables
const abc = "Hello";
//abc = "changed"; doesnt work
//const abc = "changed"; doesnt work

/*cannot reinitialize a const that was already
declared before no matter what syntax is used*/

console.log(abc + "\n");

//let changeable
 function numberTest(a) {
  let c = 2;
    if (a > 4) {
      let c = 4;
      console.log(c);
    }
     console.log(c);
     return "a is " + a;
  }
console.log(numberTest(7) + "\n");

/*So it seems like with the let changeable we have
a good amount of options on how to manipulate
variables within a more specific scope which allows
for more flexibility.*/
