// reverse number 
function reverseNumber(num) {
    // using string method
    const reverse = num.toString().split('').reverse().join('');
    return reverse;
}
// print the value on console
console.log(reverseNumber(12345));
console.log(reverseNumber(6789));

