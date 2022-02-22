# Rock-Paper-Scissors

## What did I learn?

1. **Setting up TypeScript**
   This was my first project where I used TypeScript. I made it a goal to learn TS along with JavaScript at the same time. To make the path less steep, I only added type annotations when TS complained about "any" type.

2. **Setting up dev tools**
   I used helpful guides listed online and set up eslint and prettier. I am not at a position yet to explain how they work, but I am learning more as I go.

3. **Figuring out TSC**
   I learned more about the compiler options and found the `tsc -w` command really useful. It was also really informative looking at the .js output file to see what TS does. Most of the code was identical to the TS file.

<<<<<<< HEAD
4. **Functions**
   I learned how to encapsulate all variables inside functions to keep the global space less polluted. I learned more about scopes (function and lexical) and used `const` where I could. I noticed that the transpiler changed `let` to `var`.
=======
5. **Functions**
   I learned how to encapsulate all variables inside functions to keep the global space less polluted. I learned more about scopes (function and lexical) and used `let`. I noticed that the transpiler changed everything to `var`. I plan to use `const` moving forward.
>>>>>>> bbf84f3a3737ea879ed2f34ed4020fb8ea122309

   However, I had to use `.addEventListener` outside a function and there were some functions that were modifying objects outside their scope, despite my best efforts in putting state into object literals.

<<<<<<< HEAD
5. **Branching and Looping**
   I decided to use switch statements because I found the nested if-else statements visually overwhelming. I like having a switch, then one nesting of if-else, this made the code easier on the eyes.
=======
   I learned how to call functions within a for-loop. It was difficult visualizing the code inside loops. Using a debugger was thoroughly illuminating.
>>>>>>> bbf84f3a3737ea879ed2f34ed4020fb8ea122309

6. **Debugger**
   The browser debugger was amazing! Using breakpoints, I stepped through the entire script and was able to see how the values continually changed. Best part was stepping inside loops. Made everything significantly easier than peppering my code with `console.log()`s.

## What do I need to learn?

-More css properties and alignment, especially flex and grid.
-Make things more aesthetically pleasing
-How to avoid modifying values outside function scope.
-git...accidentally deleted entire work and had to restore
