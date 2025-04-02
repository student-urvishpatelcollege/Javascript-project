// => find unique element from array

let arr = [51, 52, 53, 51, 54, 52, 55, 53, 54];
let unique = [];

arr.forEach((val) => {
    a = 0;
    unique.forEach((i) => {
        if (val === i) {
            a++;
        }
    });
    if (a === 0) {
        unique.push(val);
    }
});
console.log(unique);
