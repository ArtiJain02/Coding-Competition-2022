//"cerner_2tothe5th_2022"
// Singleton is a design pattern which restricts the creation of only one object from a given interface.
// When requested multiple times, same object is returned.

var singletonPattern = (() => {
    var instance;

    generateInstance = () => {
        var object = new Object("This is the only instance");
        return object;
    }

    return {
        retrieveInstance: () => {
            if (!instance) {
                instance = generateInstance();
            }
            return instance;
        }
    };
})();

const firstInstance = singletonPattern.retrieveInstance(); // This is the only instance
const secondInstance = singletonPattern.retrieveInstance(); // This is the only instance
// 'firstInstance' and 'secondInstance' refer to the same object
