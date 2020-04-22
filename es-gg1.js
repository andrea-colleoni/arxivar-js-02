var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');
var risultati = document.getElementById('risultati');

document.getElementById('piu').addEventListener('click', () => {
    var ris = (+op1.value) + (+op2.value);
    creaRisultato(ris, '+');
});
document.getElementById('meno').addEventListener('click', () => {
    var ris = (+op1.value) - (+op2.value);
    creaRisultato(ris, '-');
});
document.getElementById('per').addEventListener('click', () => {
    var ris = (+op1.value) * (+op2.value);
    creaRisultato(ris, '*');
});
document.getElementById('diviso').addEventListener('click', () => {
    var ris = (+op1.value) / (+op2.value);
    creaRisultato(ris, '/');
});

function creaRisultato(ris, op) {
    var li = document.createElement("li");
    li.innerText = `${op1.value} ${op} ${op2.value} = ${ris}`;
    if (ris < 0) {
        li.className = 'negativo';
    }
    if (Math.floor(ris) !== ris) {
        li.className += ' non-intero';
    }
    risultati.appendChild(li);
}