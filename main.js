//==========Exercise #1 ===========//

def display_favorite_food(person):
    for key, value in person.items():
        if isinstance(value, list):
            print(f"{key.capitalize()}:")
            for item in value:
                if isinstance(item, dict):
                    for shake_shop, shake_flavor in item.items():
                        print(f"  {shake_shop}: {shake_flavor}")
                else:
                    print(f"  {item}")
        else:
            print(f"{key.capitalize()}: {value}")

person3 = {
    "pizza": ["Deep Dish", "South Side Thin Crust"],
    "tacos": "Anything not from Taco bell",
    "burgers": "Portillos Burgers",
    "ice_cream": ["Chocolate", "Vanilla", "Oreo"],
    "shakes": [{
        "oberwise": "Chocolate",
        "dunkin": "Vanilla",
        "culvers": "All of them",
        "mcDonalds": "Sham-rock-shake",
        "cupids_candies": "Chocolate Malt"
    }]
}

display_favorite_food(person3)


//=======Exercise #2=========//

// Create our Person Prototype
const Person = function(name, age) {
    this.name = name;
    this.age = age;
  
    // Arrow function to create the printInfo method
    this.printInfo = () => {
        console.log(`Name: ${this.name}, Age: ${this.age}`);
    };

    // Arrow function for the addAge method that increments the age by 1
    this.addAge = () => {
        this.age += 1;
    };
};

// Create two people using the 'new' keyword
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

// Print both people's info
person1.printInfo();
person2.printInfo();

// Increment one person's age by 3 years
person1.addAge();
person1.addAge();
person1.addAge();

// Print the updated info of the first person
person1.printInfo();


// =============Exercise #3 ============//
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
checkStringLength("hello world")
    .then((message) => {
        console.log(message); // Output: Big word
    })
    .catch((message) => {
        console.log(message); // This won't be called in this case
    });

checkStringLength("hello")
    .then((message) => {
        console.log(message); // This won't be called in this case
    })
    .catch((message) => {
        console.log(message); // Output: Small Number
    });