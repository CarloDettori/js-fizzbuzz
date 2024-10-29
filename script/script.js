// reset
"use strict"
console.clear();

// riga per definire il ciclo da 1 a 100 con incremento di 1 per ogni step
for(let step=1; step<=100; step=step+1) {
    //condizione "m.c.m di 5 e 3" per loggare FizzBuzz in console
    if (step % 3 == 0 && step % 5 == 0) {
        console.log("FizzBuzz")
    } 
    //condizione "multiplo di 3" per loggare Fizz in console 
    else if (step % 3 == 0) {
        console.log("Fizz")
    } 
    //condizione "multiplo di 5" per loggare Buzz in console
    else if (step % 5 == 0) {
        console.log("Buzz")
    } 
    //istruzione per loggare in console il numero del ciclo se nessuna condizione viene soddista 
    else {
        console.log(step)
    }
}