//==========Exercise #1 ===========//
function displayFavoriteFoods(personObj) {
    for (const key in personObj) {
        if (Array.isArray(personObj[key])) {
            console.log(`${key}:`);
            personObj[key].forEach(item => {
                console.log(`- ${item}`);
            });
        } else if (typeof personObj[key] === 'object') {
            console.log(`${key}:`);
            for (const subKey in personObj[key][0]) {
                console.log(`- ${subKey}: ${personObj[key][0][subKey]}`);
            }
        } else {
            console.log(`${key}: ${personObj[key]}`);
        }
    }
}

displayFavoriteFoods(person3);

//=======Exercise #2=========//

// Create our Person Prototype
const Person = function(name, age) {
    this.name = name;
    this.age = age;
  };
  
  // Use an arrow function to create the printInfo method
  Person.prototype.printInfo = () => {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  };
  
  // Create another arrow function for the addAge method that takes a single parameter
  Person.prototype.addAge = () => {
    this.age += 1;
  };
  
  // Create two people using the 'new' keyword
  const person1 = new Person('Alice', 30);
  const person2 = new Person('Bob', 35);
  
  // Print both of their infos
  person1.printInfo();
  person2.printInfo();
  
  // Increment one person's age by 3 years
  person1.addAge();
  person1.addAge();
  person1.addAge();
  
  // Print updated age
  person1.printInfo();


  //=======Exercise #3=========//

  const checkStringLength = (str) => {
    return new Promise((resolve, reject) => {
      if (str.length > 10) {
        resolve("Big word");
      } else {
        reject("Small Number");
      }
    });
  };
  
  // Test the function with different strings
  checkStringLength("Hello World")
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
  
  checkStringLength("Hi")
    .then((result) => console.log(result))
    .catch((error) => console.log(error));