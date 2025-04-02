var arr = [3, 'a', 'a', 'b', 2, 3, 'a',3,'a',2, 4, 9];
let cout = 0;
let temp;
arr.forEach((i) => {
    let a = 0;
    arr.forEach((j) => {
        if (i === j) {
            a++
        }
    });
    if (a > cout) {
        cout = a;
        temp = i;
    }
})
console.log(`${temp} (${cout} times)`);
