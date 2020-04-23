'use strict'

var op1 = document.getElementById('op1');
var op2 = document.getElementById('op2');
var risultati = document.getElementById('risultati');

var operazioni = document.getElementsByClassName('op-btn');
for (var i = 0; i < operazioni.length; i++) {
    operazioni[i].addEventListener('click', (event) => {
        var ris = eval(`${(+op1.value)} ${event.target.innerText} ${(+op2.value)}`);
        creaRisultato(ris, event.target.innerText);
    });
}

/*
document.getElementById('piu').addEventListener('click', (event) => {
    var ris = eval(`${(+op1.value)} ${event.target.innerText} ${(+op2.value)}`);
    creaRisultato(ris, event.target.innerText);
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
*/

document.getElementById('canc').addEventListener('click', () => {
    /*
    risultati.children.forEach = [].forEach;
    risultati.children.forEach(el => risultati.removeChild(el));
    */
    while(risultati.children.length > 0) {
        risultati.removeChild(risultati.children[0]);
    }
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