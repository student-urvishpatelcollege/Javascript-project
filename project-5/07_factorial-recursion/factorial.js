// find factorial using recursion
let num =Number(prompt("enter any number to find its factorial"))
let fact = 1;

// using recursion
function factorial(n) {
    if (n == 0 || n == 1) {
        return 1;
    }
    return n * factorial(n - 1);
}
// function call
console.log(factorial(num)); 
