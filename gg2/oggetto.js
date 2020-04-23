var o = {
    nome: 'Andrea',
    cognome: 'Colleoni',
    indirizzo: {
        citta: 'Bergamo',
        cap: '24100',
    },
    indirizzi: [
        'andrea@colleoni.info',
        'andrea@blabla',
    ],
}

// JSON => string
JSON.stringify(o);
// string => JSON
JSON.parse('{ "pippo": "pluto" }');