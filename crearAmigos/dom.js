
//amigos recividos del servidor 
let amigos = [
    { name: 'ricardo', email: ' ri@gamil.com' },
    { name: 'carlos', email: ' redi@gamil.com' },
    { name: 'petra', email: ' rdfi@gamil.com' },
    { name: 'vero', email: ' rghi@gamil.com' }
];
// parsear (parsing)
function parsearamigos(paramamigos) {
    let listaami = document.getElementById('amigos')
    for (let index = 0; index < paramamigos.length; index++) {
        //listaami.innerHTML += '<li>'+amigos[index].name+'</li>';


        listaami.innerHTML += `<li>
<div>${paramamigos[index].name}</div>
<div>${paramamigos[index].email}</div>
<div><button class='saluda' data-value='${paramamigos[index].name}'>saludar</button>
</div>
</li>`;
    }
    saludarrr('saluda', 'data-value');
}

function saludarrr(saludoo, btm) {
    let saludoamigo = document.getElementsByClassName(saludoo);
    for (let index = 0; index < saludoamigo.length; index++) {

        saludoamigo[index].onclick = function () {
            alert(this.getAttribute(btm));
        }
    }
}

parsearamigos(amigos);