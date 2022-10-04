//"cerner_2tothe5th_2022"

// Here are a list of different ways in which console can be used

// 1. The console.dir() is used to display an interactive list of the properties of the specified JavaScript object as JSON.
const associate = { name: "Jenny", id: "J123", city: "Bangalore" };
console.dir(associate);

// 2. Using console to debug HTML elements in the console just like inspecting elements.
const bodyElement = document.getElementsByTagName("body")[0];
console.log(bodyElement);

// 3. The console.table() is used to display data in the console in a tabular format to visualize complex arrays or objects.
const allAssociates = [
    { name: "Penny", id: "P987", city: "Delhi" },
    { name: "Sheldon", id: "S764", city: "London" },
    { name: "Lenord", id: "L092", city: "Paris" },
];
console.table(allAssociates);

// 4. Adding CSS styling to the console output using the CSS format content specifier %c
console.log(
    "%cThis will be a blue text in bigger font",
    "color:blue; font-size:25px"
);
// 5. The console.group() can be used to group related log messages to be able to easily read the logs
console.group("Associate Details");
console.log("name: Howard");
console.log("jobTitle: Software Engineer");
// Nested Group
console.group("Address");
console.log("Street: Alamahs");
console.log("City: Whaless");
console.log("State: Lonahdssah");
console.groupEnd();
