// find area,circumference,diameter

const radius = [1, 2, 3, 4, 5, 6];

const area = function () {
  return Math.PI * radius * radius;
};
const circumference = function () {
  return Math.PI * radius * radius;
};
const diameter = function () {
  return Math.PI * radius * radius;
};

const calculateArea = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(calculateArea(radius, area));
console.log(calculateArea(radius, circumference));
console.log(calculateArea(radius, diameter));
