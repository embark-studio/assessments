/* Arrow functions are a syntactical shortening of functions, which accomplish the same
things as using 'function' with the exception of 'this'. Arrow functions do not
bind their own 'this' and cannot be used as constructors. On top of that, it's
best not to use arrow functions for non-method functions. */
const avatar = {
  name: "Aang",
  age: 14,
  isAlive: true,
  primaryElement: "Air"
}

//When Aang was young, he was full of life
console.log(`It is ${avatar.isAlive} that ${avatar.name} is alive.`)

var lifeTakesItsToll = ()=> {
  for (avatar.age; avatar.age <= 90; avatar.age++) {
    avatar.isAlive = false;
    return (`It is ${avatar.isAlive} that ${avatar.name} is alive.`)
  }
}

//But sometimes life takes its toll (and after all) being the Avatar is a hard job
console.log(lifeTakesItsToll());
