function salary() {

    let hourSalary = Number(document.getElementById('hr').value);
    let daySalary = Number(document.getElementById('dy').value);

    let monthly = 0;

    monthly = (hourSalary * 9) * 30;
    daySalary = (hourSalary / 9) * 30;

    document.getElementById('mth').innerHTML = `Monthly Salary - ${monthly}`;

    let yearly = 0;

    yearly = monthly * 12;

    document.getElementById('yr').innerHTML =`Yearly Salary - ${yearly}`;


}