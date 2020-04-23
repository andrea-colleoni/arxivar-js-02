var li = document.getElementsByTagName('li');

for (var i = 0; i < li.length; i++) {
    li[i].addEventListener('click', (evento) => {
        console.log(evento, 'cliccato!');
        // event.target è l'element HTML che ha "sentito" il click...
        
        event.target.style.color = document.getElementById('color').value;
        event.target.className = 'cliccato';
    })
}