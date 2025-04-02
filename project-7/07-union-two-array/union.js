let name = [1,2,3,4,5,6,7,8,9];

let cars = [5,6,5,7,8,8,9,10];

let union = [];

name.forEach((val) => {
    union.push(val);
});
cars.forEach((val) => {
    let a = 0;
    union.forEach((i) => {
        if (val === i) {
            a++;
        }
    });
    if (a === 0) {
        union.push(val);
    }
});
console.log(union.sort());

