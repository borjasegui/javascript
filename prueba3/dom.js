let salbutt = document.getElementsByClassName('saluda');
console.log(salbutt);
for (let index = 0; index < salbutt.length; index++) {
    salbutt[index].onclick = function () {
        let name = this.getAttribute('data-name');
        // alert('hola soy tu '+ name+' !! :)');
        let idp =this.getAttribute('data-idp');
        let infop =document.getElementById(idp).innerHTML;
        alert(infop);
    }

}
let borrarr = document.getElementsByClassName('borra');
for (let index = 0; index < borrarr.length; index++) {
    borrarr[index].onclick =function(){
        let borro = this.getAttribute('data-list');
        eliminar(borro);
    }
    
}
function eliminar(id){
    let fila = document.getElementById(id);
    return fila.parentNode.removeChild(fila); 
  }
  