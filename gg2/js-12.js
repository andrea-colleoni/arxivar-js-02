/*
localStorage.setItem('test', 'ciao ciao');
var o = {
    nome: 'Mario',
    cognome: 'Rossi'
}
localStorage.setItem('oggetto', JSON.stringify(o));
*/
var cookieEnabled = navigator.cookieEnabled;
console.log(cookieEnabled);

document.cookie = "ciao";
console.log(document.cookie);