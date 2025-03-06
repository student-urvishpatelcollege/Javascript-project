function bill() {
    let unit = Number(document.getElementById('unit').value);
    let answer = document.getElementById('result');

    let amount = 0;
    let subCharge = 0;
    let totalAmount = 0;

    if (unit <= 50) {
        amount = unit * 1;
    }
    else if (unit <= 150) {
        amount = (50 * 1) + ((unit - 50) * 2)
    }
    else if (unit <= 250) {
        amount = (50 * 1) + (100 * 2) + ((unit - 150) * 3)
    }
    else {
        amount = (50 * 1) + (100 * 2) + (100 * 3) + ((unit - 250) * 4)
    }
    if (unit > 150) {
        subCharge = amount * 0.20;
    }
    totalAmount = amount + subCharge;

    answer.innerHTML = `Base Amount : ${amount} <br> Tax Amount : ${subCharge} <br> Total Amount : ${totalAmount}`;
}
