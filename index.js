/* Rutherford Labbe: 01-31-2024 */

// Require file 'exercises.js'
import {func1, func2, func3, func4} from "./exercises.js";

console.log(func1, func3, func4);

/* ---------------------------------------- Section Divider --------------------------------------- */

// Generates a random number between 1 - 3
let randomInteger = Math.floor(Math.random() * 3) + 1;

// Displays quote depending on the number generated
function randomQuoteGenerator(num){
    if(num === 1){
        console.log("Famous Quote -" + " \"If you only knew the magnificence of the 3, 6 and 9, then you would have the key to the universe.\" " + "- Nikola Tesla");
    }else if(num === 2){
        console.log("Famous Quote -" + " \"Our entire biological system, the brain, and the Earth itself, work on the same frequencies.\" " + "- Nikola Tesla");
    }else if(num === 3){
        console.log("Famous Quote -" + " \"The gift of mental power comes from God, Divine Being, and if we concentrate our minds on that truth, we become in tune with this great power. My Mother had taught me to seek all truth in the Bible. \" " + "- Nikola Tesla");
    }
}

// Pass the random number generated into the function
randomQuoteGenerator(randomInteger);

//console.log("The random number is " + randomInteger);

/* ---------------------------------------- Section Divider --------------------------------------- */
