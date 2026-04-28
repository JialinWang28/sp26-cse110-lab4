1. line 9 prints: "values added: 20"

2. line 13 prints: "final result: 20"

3. you should not use var because it can cause scoping issues as vars are scoped to the entire function and not just the entire block where they are written which causes naming conflict, e.g. conflicts between vars of the same name in and outside of an if statment. As shown in the question1 file, result can be accessed even outside the statement

4. line 9 prints: values added: 20

5. line 13 returns an error because unlike var, let means that the variable is only accessible within the if statement scope, so result can't be accessed out of the if statement in line 13

6. line 9 does not execute since the code crashes at line 7 for reassigning a const variable

7. line 13 does not execute either for the same reason as q6

