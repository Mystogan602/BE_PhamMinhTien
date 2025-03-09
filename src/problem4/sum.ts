// Description: Uses a simple for loop to add numbers from 1 to n.
// Time complexity: O(n)
// Efficiency: Low
// Pros: Simple and easy to understand.
// Cons: Not efficient for large numbers.
function sum_to_n_a(n: number): number {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}

// Description: Uses the formula for the sum of an arithmetic series.
// Time complexity: O(1)
// Efficiency: High
// Pros: Very efficient for large numbers.
// Cons: Hard to understand than the first method.
function sum_to_n_b(n: number): number {
  return (n * (n + 1)) / 2;
}

// Description: Uses recursion to add numbers from 1 to n.
// Time complexity: O(n)
// Efficiency: Medium
// Pros: Easy to understand if you know recursion.
// Cons: Slower than the first two methods for large numbers.
function sum_to_n_c(n: number): number {
  if (n <= 1) return n;
  return n + sum_to_n_c(n - 1);
}

// Test the functions
console.log("Test with n = 15:");
console.log("Method 1:", sum_to_n_a(15));
console.log("Method 2:", sum_to_n_b(15));
console.log("Method 3:", sum_to_n_c(15));
