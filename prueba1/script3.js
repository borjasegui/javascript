function concatenar (str1, str2){
    return str1+' '+str2;
}
console.log(concatenar('hola','mundo'));

const concatenar2 = function (str1, str2){
    return str1 +' '+str2;
}
console.log(concatenar2('hola2','mundo2'));

(function(texto){
    console.log(texto);
})('hola mundo');
