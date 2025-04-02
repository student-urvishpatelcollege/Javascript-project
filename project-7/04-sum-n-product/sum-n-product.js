let arr = [1,2,3,4,5]
let sum = 0;
let fact=1;
let ans = arr.forEach((v)=>{
   sum+=v;
   fact*=v;
})
console.log(`sum = ${sum}  product = ${fact}`);
