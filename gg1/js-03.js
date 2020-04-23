function f1(p1) {
    console.log(p1);
}

f1('f() con nome (named function)');


var f2 = function(p2) {
    console.log(p2);
}

f2('f() come var (associa una anonymous function a una var)');

var f3 = (p3) => {
    console.log(p3);
}

f3('lambda');

var f4 = (p4) => console.log(p4);

f4('lambda con una sola istruzione (notazione più compatta');

var v1 = 10;
f4(v1);  // scrive 10
f4('il valore di v1 è ' + v1); // scrive il valore... è 10 
// per concatenare stringhe posso usare anche la JS interpolation
// uso ` (backtick => ALT + 96)
f4(`il valore di v1 è ${v1}`);

// passo un'altra var, definita come f()
f4(f3);

// faccio una funzione che invece che loggare il parametro p5, tenta di chiamarlo
// quindi f5 si aspetta che p5 sia una funzione
var f5 = (p5) => p5();
// passo come parametro a f5 la funzione f3; f5 tenterà di eseguire il parametro
f5(f3);

f5('ciao');
'ciao'();
