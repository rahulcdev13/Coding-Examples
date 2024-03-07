// convert Array to objects

const arr = ["a", "b", "c", "b"];
// using reduce function
const obj_to_arr = arr.reduce(
  (acc, curr, index) => ({ ...acc, [index]: curr }),
  {}
);
console.log(obj_to_arr);

// Other ways using spread operator
const obj = { ...arr };
console.log("convert array to object ===>", obj);

// Convert Object to Array
const person = {
  firstName: "John",
  lastName: "Doe",
};
// using object constructor
const propertyNames = Object.keys(person);
console.log("Convert object to array ===>", propertyNames);
