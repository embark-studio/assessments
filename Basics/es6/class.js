/* A class declaration allows for the creation of new classes, which must be
set up using 'constructors'. */
class Avatar {
  constructor(job, element) {
    this.job = job;
    this.element = element;
  }

  whatIsJob() {
    return "savior of the world";
  }
}

/* A class can also extend another class, which allows it to utilize all of the
methods in the 'extended' class */
class Aang extends Avatar {
  constructors(name, element) {
    this.name = name;
    this. element = element;
  }

  whatIsName() {
    return "Aang";
  }
}

const avatar = new Aang();
console.log(`${avatar.whatIsName()}\'s job is to be the ${avatar.whatIsJob()}`);
