function cal() {

    let cp = Number(document.getElementById('costPrice').value);
    let sp = Number(document.getElementById('sellPrice').value);

    let profit = 0;
    let loss = 0;

    if (sp > cp) {
        profit = sp - cp;
        document.getElementById('answer').innerHTML = `Profit : ${profit}`;
    }
    else if (cp > sp) {
        loss = cp - sp;
        document.getElementById('answer').innerHTML = `Loss : ${loss}`;
    }
    else {
        document.getElementById('answer').innerHTML = `No Profit and No Loss`;
    }

}