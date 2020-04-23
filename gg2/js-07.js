var op1;
var operazioni;

// jquery document ready
// questa funzione verrà chiamata da $ solo quando il DOM è stato completamente caricato
$(() => {
    op1 = $('#op1');
    operazioni = $('.opt.btn');

    console.log($('#op1'), document.getElementById('op1'));

    console.log($('#op1').val());
    $('#op1').val('100');
    
    console.log($('#par1').text());
    $('#par1').text('Nuovo testo impostato da $');
    
    // tutte le f() di $ si applicano a tutti gli alementi restituiti dalla ricerca tramite selettore
    $('.op-btn').text('ciao');
    $('.op-btn').click((event) => {
        console.log(event, $(this));
    });
});