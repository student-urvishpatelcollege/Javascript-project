function swap() {

    let num = Number(document.getElementById('numberOne').value);
    let num2 = Number(document.getElementById('numberTwo').value);

    let ans = document.getElementById('ans');

    ans.innerHTML = `Before Swapping first number = ${num} and second number = ${num2}`;

    let temp;
    temp = num
    num = num2
    num2 = temp
    
    ans.innerHTML = `After Swapping first number = ${num} and second number = ${num2}`;

    document.getElementById('ans') = ans;

}