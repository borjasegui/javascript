var meses = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre']
console.log('los meses del año pedidos son:', meses[0], ',', meses[6], ',', meses[10], 'y', meses[meses.length - 1])

//if

var estacachas = false;
var peso = 40;
var altura = 170;

if (peso <= altura - 100 - 10) {
    estacachas = false;
    console.log('deja de ir al baño a vomitar')
}
else if (peso <= altura - 100) {
    estacachas = true;
    console.log('que cachas esta')
}
else {
    estacachas = false;
    console.log('ponte a trabajar PASIVA!!!!')
}
// tengo 3 numeros, muestre el mayor de los numeros

var num1 = 120;

var num2 = 3000;
var num3 = 4500;

//arreglalo borja!
if (num1 >= num2) {
    if (num1 >= num3) {
        console.log('numero mayor es :', num1);
    } else {
        console.log('numero mayor es :', num3);
    }
}
else {
    console.log('numero mayor es :', num2);
}

//loops

var misnumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'y', 't'];
console.log(misnumeros);
for (let index = 0; index < misnumeros.length; index++) {
    const element = misnumeros[index];
    console.log('los valores dados para', index, 'es', misnumeros[index]);
}
//tienda d mascotas,muestre 1000 mascotas

var mascotitas = [];


for (let index = 0; index < 20; index++) {
    mascotitas[index] = 'perrito' + (index + 1);
}

mascotitas[995] = 'oveja negra';

for (let index = 0; index < 20; index++) {
    console.log('la mascota', index, 'se llama', mascotitas[index])

}
for (let index = 0; index < 20; index++) {
    if (index == 0) {
        console.log('el perro', (index + 1), 'no tiene hermanos')
    } else {
        console.log('perrito', (index + 1), 'es hermano de', (index - 1))

    }
}

function generarnombreyapellido(nombre, apellido) {
    let username = nombre;
    let apell = apellido;
    return username + ' ' + apell;
}
console.log(generarnombreyapellido('cristina', 'barriga'));





function generaroperacion(num1, num2, op) {
    let primernumero = num1;
    let segundonumero = num2;

    if (op == '*') {
        return (num1 * num2)
    }
    else if (op == '/') {
        if (num2 == 0)
            return 0;
        else {
            return (num1 / num2)
        }

    }
    else if (op == '+') {
        return (num1 + num2)
    }
    else if (op == '-') {
        return (num1 - num2);
    }

}
console.log(generaroperacion(4, 8, '+'))
console.log(generaroperacion(4, 8, '-'))
console.log(generaroperacion(4, 8, '*'))
console.log(generaroperacion(4, 8, '/'))
console.log(generaroperacion(4, 0, '/'))


console.log("ARRAYS");


function numarra(arrai, op) {
    let resultado;

    if (op == '+') {
        resultado = 0;
        for (let index = 0; index < arrai.length; index++) {
            resultado =resultado + arrai[index];
        }
    }
    else if(op=='*'){
        resultado=1;
        for (let index = 0; index < arr.length; index++) {
            resultado = resultado * arrai[index];
        }
    }
    return resultado;
    }
console.log(numarra([1, 2, 3, 4], '+'))
console.log(numarra([1, 2, 3, 4], '*'))
console.log(numarra([1, 2, 3, 4], '/'))
console.log(numarra([10, 2, 3, 4], '-'))