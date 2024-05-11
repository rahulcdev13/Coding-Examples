function fibonacci(n) {
  let fibSeries = [0, 1]; // Initialize the Fibonacci series array with the first two numbers
  for (let i = 2; i < n; i++) {
    fibSeries.push(fibSeries[i - 1] + fibSeries[i - 2]); // Generate the next Fibonacci number by adding the last two numbers
  }
  return fibSeries;
}
// Example usage:
const n = 10; // Number of Fibonacci numbers to generate
const fibNumbers = fibonacci(n);
console.log("Fibonacci series:", fibNumbers); // Output: [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
