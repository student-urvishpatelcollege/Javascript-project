let array = []

let input = document.getElementById('text');
function add() {
    let itm = text.value.trim();
    if (itm) {
        array.push(text.value);
        text.value = " ";
    }else{
        alert('please enter a valid values')
    }
}

function display() {
    document.getElementById('p').innerText = "Array values : " + array.join();
}


