// capitalize first letter of each word
// get the value from user
let cap = prompt("enter any sentence")

let arr = cap.split("");
let first = "";
for (let i = 0; i < arr.length; i++) {
    first += arr[i].charAt(0).toUpperCase() + arr[i].slice(1) + "";
}
// display result
alert(first);
