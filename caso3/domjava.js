let mayus = document.getElementById('boton1');
mayus.onclick = function () {
    let parr = document.getElementById('parrr');
    parr.innerHTML = parr.innerHTML.toUpperCase();
}

let minus = document.getElementById('boton2');
minus.onclick = function () {
    let minus = document.getElementById('parrr');
    minus.innerHTML = minus.innerHTML.toLowerCase();
}