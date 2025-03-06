function cal(op) {
    let num = Number(document.getElementById('num').value);
    let num2 = Number(document.getElementById('num2').value);
    let result = 0;

    switch (op) {
        case 'add':
            result = num + num2;
            break;
        case 'sub':
            result = num - num2;
            break;
        case 'mult':
            result = num * num2;
            break;
        case 'div':
            if (num2 == 0) {
                alert("cannot divided by zero")
                return;
            }
            result = num / num2;
            break;
        default:
            document.getElementById('result').innerText = `unknown opeartion`;
            return;
    }
    document.getElementById('result').innerText = `Answer: ${result}`;

}

