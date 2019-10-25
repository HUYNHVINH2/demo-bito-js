
//scope
// if (true) {
//     var x = 5;
// }
//   console.log(x);  // 5 
// if (true) {
// let y = 5;
// }
//   //console.log(y);

// /**
//  * Example 1
//  */
// console.log(x === undefined); // logs "true"
// var x = 3;

// /**
//  * Example 2
//  */
// // will return a value of undefined
// var myvar = "my value";

// (function() {
//   console.log(myvar); // undefined
//   var myvar = "local value";
//   var u =1
// })();
console.log(typeof(square))
console.log(square(5));
var square = function (n) {
  return n * n;
}

console.log(square(5));
/* ... */
function square(n) { return n*n } 