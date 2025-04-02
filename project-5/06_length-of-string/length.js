// find the length of string without using length inbuilt method 
let name = prompt("enter any word to find its length")

function findStringLength(l) {
    let count = 0;
    let i;
    // using for of loop to count given character
    for (i of l) {
        count++;
    }
    return count;
}
// get length of word in console
console.log(findStringLength(name));
