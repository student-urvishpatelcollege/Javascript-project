
const arr = [58, '', 'abcd', null, true, false,0];
const filterArr = arr.filter(Boolean);
console.log(filterArr);
for (v of filterArr) {
    console.log(v);
    
}

