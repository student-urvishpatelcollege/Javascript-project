function interestCalculate() {
    let principal = document.getElementById('principal').value;
    let annual = document.getElementById('annual').value;
    let year = document.getElementById('year').value;

    let interest = (principal * annual * year) / 100;

    let interestCalculate = parseFloat(Number(principal) + Number(interest));

    let result = document.getElementById('result');
    result.innerHTML = `After ${year} year your investment will be worth \n
    ${interestCalculate} with simple interest.`;

    document.getElementById('result') = result;
}

