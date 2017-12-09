// Variables assigned const cannot be changed
const greeting = "Hello World!";
greeting = "never"; // error

// let variables can be changed.
let tensor = "I'm going to be the very best!";
tensor = "Like no one ever was!"

// Deconstructors
const businessMan = { 
    
    name: "Regis",
    money: 1000000,
    fame: -12,
    occupation: "Pokemon Master"
}
businessMan.goal = "Gotta catch em' all" // Adding another variable

// Pushing businessMan into corperation
const corperation = {
    corpName: "Team Rocket",
    employeeCount: "A lot",
    ...businessMan
}

// Arrays
const Pokeballs = ["Pokeball", "Great Ball", "Ultra Ball", "Master Ball"]
Pokeballs[4] = "Dark Ball" // add index 4
Pokeballs[4] = "Lure Ball" // change index 4

// String interpolation
const jobTitle =  `${businessMan.name}, employee of ${corperation.corpName}`


// Arrow function
// An arrow unctions is an anonimus fuction (ie. they have no name)
catchPhrase = () => {
    const catchPhrase = ["It's super effective",
                        "Dragonite Go!",
                        "To denounce the evils of truth and love"]

    return catchPhrase[Math.floor((Math.random() * 3))]
}
catchPhrase()

// If I wanted to create a shorthand for clear() I could write
c = () => clear()
c() // Clears the console


// Inplicit return is when the variable(s) that gets passed in gets returned
// If I wanted to create a shorthand for Math.Random I could
r = r => Math.floor((Math.random() * r)) // Chose a number betwen 0 and r - 1

// Which could then be used as following
chooseBall = () => `Go! ${Pokeballs[r(Pokeballs.length)]}!`
chooseBall() // Would display a random Pokeball in the array Pokeballs

/* In javascript a variable in a class can't be called in a function
in that class using the 'this' statement. For example
*/

const starters = ["Bulbasaur", "Turtwig", "Torchic", "Fennekin", "Mudkip", "Popplio"];

class trainer {
    constructor(nameV, ageV, genderV) {
        this.name = nameV;
        this.age = ageV;
        this.gender = genderV;
        this.starter = starters[r(starters.length)];
    }
}

class pokemonMaster extends trainer {
    constructor(name, age, gender, rank) {
        super(name, age, gender)
        this.rank = rank
    }

    updateRank(rankV) {
        this.rank = rankV
    }
    
    // This gives me an error
    // updateRankError = () => (this.rank = rank)

}