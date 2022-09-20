//"cerner_2^5_2022" "cerner_2tothe5th_2022"

deepFreezeIt = (object) => {

    // Retrieve the property names defined on object
    var propNames = Object.getOwnPropertyNames(object);

    // Freeze properties before freezing self
    for (let name of propNames) {
        let value = object[name];

        object[name] = value && typeof value === "object" ?
            deepFreeze(value) : value;
    }
    return Object.freeze(object);
}

let employeeDetails = {
    name: "Smith",
    address: {
        doorNo: 20
    }
}
let frozenObject = deepFreeze(employeeDetails);
employeeDetails.address.doorNo = 100; // no changes will be done
employeeDetails.address.street = "First Street"; // no changes will be done
console.log("After changing address", user.address);
