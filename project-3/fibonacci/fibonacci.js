let n = Number(prompt("enter any n number"));
let a = 0, b = 1, c;

console.log("Fibonacci series : ");
console.log(a);
console.log(b);

while (n > 2) {
    c = a + b;
    a = b;
    b = c;
    console.log(c);
    n--;
}

