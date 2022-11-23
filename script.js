// 1.Write a program to print the reverse of the given string.
// Input
// codecode
// Output
// edocedoc
// Input Constraints
// 1<=Length of string<=100
// Input string contains only lowercase characters ['a' to 'z'].


// Solution:

const a = "codecode";
function reverseString(str) {
  return str.split("").reverse().join("");
}
let b = reverseString(a);
console.log(b);

//2.Given a number, check whether it is a prime number or not.
// Input 1
// 3
// Output 1
// Yes
// Input 2
// 4
// Output 2
// No
function isPrime(n) {
 
  if (n <= 1) return false;

  if (n == 2 || n == 3) return true;
 
  if (n % 2 == 0 || n % 3 == 0) return false;
  
  for (var i = 5; i <= Math.sqrt(n); i = i + 6)
    if (n % i == 0 || n % (i + 2) == 0) return false;

  return true;
}


isPrime(4) ? console.log("true") : console.log("false");







// 3.Given an array of numbers, arrange them in a way that it forms the largest value.
// Input
// [54, 546, 548, 60]
// Output
// 6054854654

// Note
// The arrangement 6054854654 gives the largest value.
// Constraints
// 1<=N<=1000
// 1<=Number<=1000000

const arr = [54, 546, 548, 60];
arr.sort((x) => {
  return x;
});
console.log(arr.join(""));

// 4.Given a number N, print reverse of number N.
// Input
// 988
// Output
// 889
// Note
// Do not print leading zeros in output.
// For example N = 100
// Reverse of N should be 1 not 001.
// Constraints
// 1<=N<=10000

const arr1 = 988;
console.log(arr1.toString().split("").reverse().join("") * 1);



// 5.Given an array of numbers, find the maximum and minimum element in the array.
// Input
// [54, 546, 548, 60]
// Output
// 548 54


const arr2 = [54, 546, 548, 60];
arr2.sort((a, b) => a - b);
console.log(arr2[arr2.length - 1], arr2[0]);