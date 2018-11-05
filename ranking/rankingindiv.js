let rankingindiv = [
    { nombre: 'charlie', nbares: 57 },
    { nombre: 'er_palancas', nbares: 35},
    { nombre: 'borji', nbares: 34},
    { nombre: 'rickilito', nbares: 20},
    { nombre: 'jorgio', nbares: 14 },
    { nombre: 'fatima', nbares: 6},

 ];
 // mocky de rankingindiv //

 http://www.mocky.io/v2/5be02156320000820064945c

 let rankinggrupo =[
    { nombre: '155', nbares: 57 },
    { nombre: 'Zozor', nbares: 35},
    { nombre: 'power_love', nbares: 34},
    { nombre: 'Bears', nbares: 20},
    { nombre: 'Blurp', nbares: 14 },
 ];
 // mocky de rankinggrupo //
 http://www.mocky.io/v2/5be022b63200007700649460

 function generaramigos(arrAamigos, redsocial) {

    $(redsocial).html(function () {
        let htmlamigos = '';
       arrAamigos.forEach(rankingindiv => {
            htmlamigos += `<li>
            <div>${rankingindiv.nombre}</div>
            <div>${rankingindiv.nbares}</div>
            <button class='saludabtn' data-value='${rankingindiv.nombre}'>saludar</li>`;
        });
        return htmlamigos;
    });
 }
function linkarclick(paramclick){
    $(paramclick +' .saludabtn').click(function () {
        alert('hola ' + $(this).attr('data-value') + '!!');
    });


}
$('#cargarbtnface').click(function () {

    $.ajax({
        url: "http://www.mocky.io/v2/5be02156320000820064945c",

    }).done(function (data) {
        console.log(data);
        generaramigos(data,'#amigosface');
        linkarclick ('#amigosface');
    });

});