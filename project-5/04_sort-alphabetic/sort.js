// sort string Alphabetically
let name = prompt("enter any name")

function sort(str) {
    // using string methods
    return str.split('').sort().join('');
}
alert(sort(name));



