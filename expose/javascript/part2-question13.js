// Arithmetic

console.log("'3' + 2 =", '3' + 2);
// Output: "32"
// Explanation: + with a string causes string concatenation.
// 2 is converted to "2", so "3" + "2" becomes "32".

console.log("'3' - 2 =", '3' - 2);
// Output: 1
// Explanation: - is a numeric operator.
// "3" is converted to the number 3, so 3 - 2 becomes 1.

console.log("3 + null =", 3 + null);
// Output: 3
// Explanation: null converts to 0 in numeric operations.
// So 3 + 0 becomes 3.

console.log("'3' + null =", '3' + null);
// Output: "3null"
// Explanation: + with a string causes string concatenation.
// null is converted to "null", so "3" + "null" becomes "3null".

console.log("true + 3 =", true + 3);
// Output: 4
// Explanation: true converts to 1 in numeric operations.
// So 1 + 3 becomes 4.

console.log("false + null =", false + null);
// Output: 0
// Explanation: false converts to 0 and null converts to 0.
// So 0 + 0 becomes 0.

console.log("'3' + undefined =", '3' + undefined);
// Output: "3undefined"
// Explanation: + with a string causes string concatenation.
// undefined is converted to "undefined", so "3" + "undefined" becomes "3undefined".

console.log("'3' - undefined =", '3' - undefined);
// Output: NaN
// Explanation: - is a numeric operator, so JavaScript tries to convert both values to numbers.
// "3" becomes 3, but undefined becomes NaN.
// Any arithmetic operation involving NaN results in NaN.


// Comparison

console.log("'2' > 1 =", '2' > 1);
// Output: true
// Explanation: When comparing a string and a number with >,
// JavaScript converts the string "2" to the number 2.
// Since 2 > 1, the result is true.

console.log("'2' < '12' =", '2' < '12');
// Output: false
// Explanation: Both values are strings, so JavaScript compares them lexicographically,
// meaning character by character like dictionary order.
// It compares "2" with "1" first. Since "2" is greater than "1",
// "2" < "12" is false.

console.log("2 == '2' =", 2 == '2');
// Output: true
// Explanation: == allows type conversion.
// The string "2" is converted to the number 2, so 2 == 2 is true.

console.log("2 === '2' =", 2 === '2');
// Output: false
// Explanation: === does not allow type conversion.
// One value is a number and the other is a string, so they are not strictly equal.

console.log("true == 2 =", true == 2);
// Output: false
// Explanation: == converts true to 1.
// Then it compares 1 == 2, which is false.

console.log("true === Boolean(2) =", true === Boolean(2));
// Output: true
// Explanation: Boolean(2) converts 2 to true because nonzero numbers are truthy.
// Then true === true is true.


// Difference between == and ===

console.log("Difference between == and ===:");
// == checks equality after allowing type conversion.
// === checks equality without type conversion.
// In general, === is safer because it avoids surprising automatic conversions.