const totalMark = 600;

function per() {

    let hindi = document.getElementById('hindi').value;
    let gujarati = document.getElementById('gujarati').value;
    let english = document.getElementById('english').value;
    let math = document.getElementById('math').value;
    let science = document.getElementById('science').value;
    let history = document.getElementById('history').value;
    let geography = document.getElementById('geography').value;

    hindi = Number(hindi);
    gujarati = Number(gujarati);
    english = Number(english);
    math = Number(math);
    science = Number(science);
    history = Number(history);
    geography = Number(geography);

    let total = hindi + gujarati + english + math + science + history + geography;

    let percentage = (total / totalMark) * 100;

    let result;
    if (percentage >= 80) {
        result = `Out of ${totalMark}, your total is ${total} and your percentage is ${percentage}%. Your grade is A. Excellent!!`;
    }
    else if (percentage >= 70) {
        result = `Out of ${totalMark}, your total is ${total} and your percentage is ${percentage}%. Your grade is B+. Very Good!!`;
    }
    else if (percentage >= 60) {
        result = `Out of ${totalMark}, your total is ${total} and your percentage is ${percentage}%. Your grade is B. Good!!`;
    }
    else if (percentage >= 50) {
        result = `Out of ${totalMark}, your total is ${total} and your percentage is ${percentage}%. Your grade is C. Practice More!!`;
    }
    else if (percentage >= 35) {
        result = `Out of ${totalMark}, your total is ${total} and your percentage is ${percentage}%. Your grade is D. Just Pass!!`;
    }
    else {
        result = `Out of ${totalMark}, your total is ${total} and your percentage is ${percentage}%. You have failed!!`;
    }

    document.getElementById('result').innerHTML = result;
}
