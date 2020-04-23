'use strict'

console.log(a);
console.log('nello script principale');

var v1 = 10;
console.log(v1);
v1 = 100;
console.log(v1);

// window in una pagina web è il nome della variabile che contiente il global context
// o meglio il PAGE CONTEXT (il contesto di esecuzione della pagina corrente)
function funzione(par1, par2, par3, par4) {
    var v1 = 1000;
    console.log('nella funzione!', par1, par2, par3, par4);
    console.log(v1, window.v1);
}

// par1 in questo contesto (global) non esiste
console.log(par1); // questa chiamata da errore 

/*
in JS non esiste overload, ma solo override */
/*
function funzione() {
    console.log('overload');
}
*/