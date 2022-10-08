//"cerner_2tothe5th_2022"

// Mixin is a generic object-oriented programming term - is a class containing methods that can be used by other classes without a need to inherit from it.

let introduceYourselfMixin = {
    introduceYourself() {
        alert(`Hello my name is ${this.name}, I am a software techie.`);
    },
    sayBye() {
        alert(`${this.name} says Bye!`);
    },
};

// usage:
class Associate {
    constructor(name) {
        this.name = name;
    }
}
ß
Object.assign(Associate.prototype, introduceYourselfMixin);

// now Associate can introduce herself
new Associate("Alexis").introduceYourself(); // Hello my name is Alexis, I am a software techie.
