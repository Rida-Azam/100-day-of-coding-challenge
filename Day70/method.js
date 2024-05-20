// Create an object that adheres to the 'Person' interface
var Sarah = {
    name: "Rida",
    age: 30,
    greet: function (message) {
        console.log("".concat(this.name, " says: ").concat(message));
    },
};
Sarah.greet("Hello, TypeScript!");
