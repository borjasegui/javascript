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
document.getElementById("boton3").onclick = function () {
    var parraf = document.getElementById("parrr").innerHTML;
    let palabrasTransf = [];
    separat = parraf.split(" ");
 
    for (let index = 0; index < separat.length; index++) {
 
        palabrasTransf[index] = separat[index].toLowerCase().replace(separat[index].toLowerCase().charAt(0), separat[index].charAt(0).toUpperCase());
 
    }
    var palabrasTransfJunto = palabrasTransf.join(" ");
    // console.log(palabrasTransfJunto);
 
    document.getElementById("parrr").innerHTML = palabrasTransfJunto;}
