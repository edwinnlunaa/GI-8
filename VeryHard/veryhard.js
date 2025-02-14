class Person {
    constructor(name, job, age) {
      this.name = name;
      this.job = job;
      this.age = age;
    }
  
    exercise() {
      console.log(`${this.name} says: Running is fun! - said no one ever.`);
    }
  
    fetchJob() {
      console.log(`${this.name} is a ${this.job}.`);
    }
  }
  
  class Programmer extends Person {
    constructor(name, job, age, languages) {
      super(name, job, age);
      this.languages = languages;
      this.busy = true; // Default value
    }
  
    completeTask() {
      this.busy = false;
    }
  
    acceptNewTask() {
      this.busy = true;
    }
  
    offerNewTask() {
      if (this.busy) {
        console.log(`${this.name} can't accept any new tasks right now.`);
      } else {
        console.log(`${this.name} would love to take on a new responsibility.`);
      }
    }
  
    learnLanguage(language) {
      this.languages.push(language);
    }
  
    listLanguages() {
      console.log(`${this.name} knows ${this.languages.join(', ')}.`);
    }
  }
  
  // Usage
  const person1 = new Person("Harold", "Backend Engineer", 20);
  const c1 = new Programmer("Liana", "DevOps", 35, ["HTML", "C#", "LUA"]);
  const c2 = new Programmer("Edwin", "janitor", 55, ["HTML", "SASS", "Ruby"]);
  const c3 = new Programmer("Manny", "SysOps", 31, ["HTML", "CSS", "JS", "R"]);
  
  // Manipulate properties and call methods
  c1.learnLanguage("CSS");
  c2.learnLanguage("C++");
  c3.learnLanguage("JAVA");
  
  c1.listLanguages();
  c2.listLanguages();
  c3.listLanguages();
  
  // Log objects to console
  console.log(person1);
  console.log(c1);
  console.log(c2);
  console.log(c3);
  
  // Call methods on Person instance
  person1.exercise();
  person1.fetchJob();