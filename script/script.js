"use strict"
console.clear();

for(let step=1; step<=100; step=step+1) {
    if (step % 3 == 0) {
        console.log("Fizz")
    }
    if (step % 5 == 0) {
        console.log("Buzz")
    }
        console.log(step)
}