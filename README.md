# Rock-Paper-Scissors

## What did I learn?

1. **Setting up TypeScript**
   This was my first project where I used TypeScript. I made it a goal to learn TS along with JavaScript at the same time. To make the path less steep, I only added type annotations when TS complained about "any" type.

2. **Setting up dev tools**
   I used helpful guides listed online and set up eslint and prettier. I am not at a position yet to explain how they work, but I am learning more as I go.

3. **package.json**
   I set up a barebones package.json file based on TSC defaults. I hope to learn more, but its pretty daunting at this point.

4. **Figuring out TSC**
   I learned more about the compiler options and found the `tsc -w` command really useful. It was also really informative looking at the .js output file to see what TS does. Most of the code was identical to the TS file.

5. **Functions**
   I learned how to encapsulate all variables inside functions to keep the global space less polluted. I learned more about scopes (function and lexical) and used `let` where I could. I noticed that the transpiler changed everything to `var`.

6. **Branching and Looping**
   The most difficult part was writing the logic for the main `game()` function. I decided to use switch statements because I found the nested if-else statements visually overwhelming. I like having a switch, then one nesting of if-else, this made the code easier on the eyes.

   I learned how to call functions within a for-loop. It was difficult visualizing the code inside loops. Using a debugger was thoroughly illuminating.

7. **Debugger**
   The browser debugger was amazing! Using breakpoints, I stepped through the entire script and was able to see how the values continually changed. Best part was stepping inside loops. Made everything significantly easier than peppering my code with `console.log()`

## What do I need to learn?

I was unable to get the program to output to the console while looping. However, when stepping through using the debugger, the script correctly output to the console when inside the loops. The program just dumps the console ouput as one when it ends (including the score and the winner.)

There are warnings about 'duplicate function implementation' that I need to work on.
