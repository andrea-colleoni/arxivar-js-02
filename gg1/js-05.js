function cambiaIlDom() {
    document.getElementById('par1').innerText = document.getElementsByClassName('top')[0].innerText;
}


function somma() {
    var op1 = new Number(document.getElementById('txtDato1').value);
    var op2 = +document.getElementById('txtDato2').value;
    
    try {
        var somma = op1 + op2 + op3;

        document.getElementById('risultato').innerText = somma;
    } catch (err) {
        console.error(err);
        switch(err.name) {
            case 'ReferenceError':
                document.getElementById('risultato').innerText = `un operatore non è stato specificato`;
                break;
            default:
                document.getElementById('risultato').innerText = `si è verificato un errore: ${err.name}/${err.message}`;
        }
    }

    // esempio: livelli di logging in console
    console.log('log');
    console.warn('warn');
    console.error('error');

    setTimeout(() => {
        document.getElementById('txtDato1').value = '';
        document.getElementById('txtDato2').value = '';
        document.getElementById('risultato').innerText = 'Puoi eseguire un altro calcolo.';
    }, 5000);
}

var secondi = 0;

setInterval(() => {
    secondi++;
    document.getElementById('secondi').innerText = secondi;
}, 1000);

// gestisco gli eventi loto JS invece che lato HTML
var bottone = document.getElementById('btnCalcola');
bottone.addEventListener('click', () => {
    somma();
});