# Number-of-Letters-Function

This project was inspired by Matt Parker's video ["Four has Four Letters"](https://youtu.be/LYKn0yUTIU4), and it was made in JavaScript using [p5.js](p5js.org/) and [TaffyDB](http://www.taffydb.com/) libraries.

I tried the formula described by Matt Parker but in Spanish. The algorithm goes like this:
  1. Take a number n
  2. Let m be the number of letters that spell n in a given language
  3. Repeat step 1 with m instead of n
You can either analyse how many times does it take to get to a loop or how often do numbers converge to a particular loop.
  

###My Findings

The first thing I noticed is that this formula in Spanish has 2 possible outcomes: you either get stuck in 5 ("cinco" is 5 letters long), or you get stuck in a loop formed by 4 and 6 ("cuatro" and "seis").

When executing the formula, not many interesting cases showed up. The first 5-chain comes up at 2444 (2444 "dos mil dos cientos cuarenta y cuatro", 34 "treinta y cuatro", 14 "catorce", 7 "siete", 5 "cinco") - by the way, is kind of nice that 14 has 7 letters, 8 ("ocho") has 4 and 18 ("dieciocho") has 9.

Then, from 3000 and on, no 2-chains will ever show up, and from 30,000 and up, the 3-chains are rare (usually, half of the chains are 4 numbers long and half of them are 5-chains, and 3 chains show up in average 4 times in a 1,000).

Then I checked whether the numbers converged to 4, 5 or 6 and then I plotted the results into a graph:

Up to... | 4 (red) | 5 (green) | 6 (blue)
------ | ------ | ------ | -------
1,000 | 56.50 % | 33.30 % | 10.20 %
15,000 | 69.05 % | 27.25 % | 3.70 %
50,000 | 64.12 % | 34.06 % | 1.82 %
100,000 | 63.34 % | 35.09 % | 1.56 %

(The black curve shows the average point between 4 and 5, showing that it is almost a mirror image)
![Graph](/GráficaPorcentajes.JPG)

###The Code

In the JavaScript file you'll see the `Nombre()` function, which returns the name of any number from 1 to 999,999 in Spanish. That one is the messy one. I had to hardcore some stuff because I was having troubles doing it in other ways. In it, you'll see a lot of references to the `baseDatos` Taffy table, which is a data base of some particular names of the numbers.

Then there is a `Recursivo()` function which checks if the formula has entered a loop, and if that's not the case, executes step 3.

The `Run()` and the `Next()` functions just execute the formula for all the numbers in a 1,000 interval. They're not executed automatically because I prefered controlling it with the console, also for avoiding the Stack Overflow errors.

Finally, you'll find the `CalcLargestChain()` and the `Plotting()` functions, which are the ones that return the results. The first one calculates the largest (and the smallest) chain of numbers before reaching a loop in the given interval, and the other ones has the hardcoded results explained above and plots the graph.
