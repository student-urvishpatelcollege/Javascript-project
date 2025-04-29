function calBmi() {
    const height = parseInt(document.getElementById('height').value);
    const weight = parseInt(document.getElementById('weight').value);

    if (height <= 0 || weight <= 0) {
        alert("Please enter valid height and weight!");
        return;
    }
    else {

        const heightMeter = height / 100;
        const bmi = weight / (heightMeter * heightMeter);
        var result = "";

        if (bmi < 18.5) {
            result = "Under weight";
        }
        else if (bmi < 24.9) {
            result = "Normal Weight";
        }
        else if (bmi < 29.9) {
            result = "Over weight";
        }

        else if (bmi < 34.9) {
            result = "Obese";
        }

        else {
            result = "Extremely Obese";
        }

        let x = document.getElementById("bmi-value")
        let y = document.getElementById("bmi-result")
        
        x.innerText = bmi.toFixed(2);
        y.innerText = result;
    }

}