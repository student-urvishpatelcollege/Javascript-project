// check palindrome 
function palindrome(name) {
    // using string methods
    const palindrome = name.split('').reverse().join('');
    return name == palindrome
}
// print the answer
console.log(palindrome("madam"));
console.log(palindrome("sir"));
// output comes in boolean - true/false

