/* Rutherford Labbe: 01-31-2024 */

let randomInteger = Math.floor(Math.random() * 3) + 1;

function randomQuoteGenerator(num){
    if(num === 1){
        console.log(" \"If you only knew the magnificence of the 3, 6 and 9, then you would have the key to the universe.\" " + "- Nikola Tesla");
    }else if(num === 2){
        console.log(" \"Our entire biological system, the brain, and the Earth itself, work on the same frequencies.\" " + "- Nikola Tesla");
    }else{
        console.log(" \"The gift of mental power comes from God, Divine Being, and if we concentrate our minds on that truth, we become in tune with this great power. My Mother had taught me to seek all truth in the Bible. \" " + "- Nikola Tesla");
    }
}

randomQuoteGenerator(randomInteger);

console.log("The random number is " + randomInteger);