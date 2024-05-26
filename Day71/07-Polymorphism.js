"use strict";
//Polymorphism & Method Override
// Define an abstract class
class AbstractEntity {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    } // Change 'private' to 'protected'
    static generateNextId() {
        return AbstractEntity.nextId++;
    }
}
AbstractEntity.nextId = 1;
// Create a concrete subclass
class Entity extends AbstractEntity {
    constructor(id, name) {
        super(id, name);
    }
    getEntityInfo() {
        return `ID: ${this.id}, Name: ${this.name}`;
    }
}
// Create another concrete subclass
class AnotherEntity extends AbstractEntity {
    constructor(id, name) {
        super(id, name);
    }
    getEntityInfo() {
        return `ID: ${this.id}, Name: ${this.name}, Additional Info: ...`;
    }
}
