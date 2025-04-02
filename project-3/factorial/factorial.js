const numb = Number(prompt("enter any value"));
let fact = 1, i = 1;
while (i<=numb) {
    fact = fact * i;
    i++;
}
console.log(`the factorial of ${numb} is : `,fact);
