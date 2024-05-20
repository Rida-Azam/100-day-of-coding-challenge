// 1. Declaration Syntax Of Interface VS Type Alias

interface PersonExInterface {
  name: string;
  age: number;
}

type PersonExType = {
  name: string;
  age: number;
};interface AnimalExInterface {
  type: string;
}

interface Dog extends AnimalExInterface {
  bark(): void;
}

class Labrador implements Dog {
  type: string = "dog";
  bark() {
    console.log("Woof!");
  }
}
// 2. Extending and Implementing:

// Interface: Can be extended by other interfaces using the 
//extends keyword and implemented by classes using the implements keyword.

interface Animal {
  type: string;
}

interface Dog extends Animal {
  bark(): void;
}

class Labrador implements Dog {
  type: "dog";
  bark() {
    console.log("Woof!");
  }
}

// Type Alias: Cannot be extended or implemented directly. However,
//  you can achieve similar results using intersection types.

type AnimalExType = {
  type: string;
};

type Monkey = AnimalExType & {
  bark(): void;
};

const labrador: Monkey = {
  type: "monkey",
  bark() {
    console.log("Woof!");
  },
};

//3. Compatibility:

interface Car {
  brand: string;
}

interface Car {
  model: string;
}

const myCar: Car = {
  brand: "Toyota",
  model: "Camry",
};