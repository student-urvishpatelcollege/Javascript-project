let n = Number(prompt("enter a number"));
let sum = n;
while (n > 0) {
    let rem = n % 10;
    sum = sum + rem;
    n = parseInt(n / 10);
}
console.log(`the sum of ${sum} number is `, sum);
