1. line 12 prints 3 because i is declared as var so it is function scoped. at the end of the loop, i gets incremented to 3.

2. line 13 prints 150 since it is also a var. it is function scoped and still accessible outside the for loop. after the last iteration 300 * 0.5 = 150

3. line 14 also prints 150 since finalPrice is a var that can be accessed anywhere inside the function. therefore final price is calculated as 150

4. this function returns [50, 100, 150] because it calculates every single discounted price and returns them in an array

5. line 12 crashes the program because i is now a let so it is not accessible outside the loop anymore

6. line 13 also crashes the program for the same reason as in q5. discountedPrice is a let so it is only accessible in the for loop

7. line 14 prints 150 because finalPrice was declared as a let at the top of the function, meaning it is accessible within the function's scope.

8. the function still returns [50, 100, 150] since even though everything is used as a let, meaning they are block scoped, all the variables are used in places where they are accessible

9. line 11 crashes the program because i is a let and is not accessble out of the loop

10. line 12 prints 3 because length is the length of the array and is initialized properly

11. this code still prints [50, 100, 150] since even though the discountedPrice is a const, it is never reassigned and they are only pushed to the array

12. 
A: student['name'], 
B: student['Grad Year'], 
C: student['greeting'](), 
D:student['Favorite Teacher']['name'], 
E: student['courseload'][0]

13.
A: 32. + with a string causes concatenation
B: 1. - is a stricly numeric operator so 3 is treated as a number
C: 3. since the first operand is a number, it is numeric operation. null is treated as 0 in numeric operations
D: 3null. if the first operand is a string then it is treated as a concatenation. null turns to 'null' as a string
E: true is treated as 1 in numeric operations. no strings are involved so treated as numeric operation
F: 0, false and null both convert to 0. no strings are invollved so treated as numeric operation
G: 3undefined. since strings are involved, + means concatenation. undefined turns into a string
H: NaN. - is strictly numeric so 3 turns into a number but undefined turns into NaN, and any numeric operations that involves NaN return NaN

14.
A. true. 2 gets converted to a number and 2>1
B. false. both are strings so js compares them in alphabetical order. since 12 comes before 2, returns false
C. true. == allows type conversion so 2 equals 2
D. false. === does not allow type conversion so the string does not equal to the number
E. false. true converts to 1, which != 2
F. true. Boolean(x) returns 1 if x is a nonzero number

15. == compares 2 values allowing type conversion, whereas === does not allow type conversion

16.