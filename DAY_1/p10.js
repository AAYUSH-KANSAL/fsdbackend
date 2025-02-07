 function sum(a, b) {
  return a + b;
}

function difference(a, b) {
  return a - b;
}

// Example usage
if (require.main === module) {
  console.log(sum(5, 3)); // Output: 8
  console.log(difference(5, 3)); // Output: 2
}

module.exports = { sum, difference };