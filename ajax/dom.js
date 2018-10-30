function generaramigos(arrAamigos, redsocial) {

    $(redsocial).html(function () {
        let htmlamigos = '';
       arrAamigos.forEach(unamigo => {
            htmlamigos += `<li>
            <div>${unamigo.name}</div>
            <div>${unamigo.email}</div>
            <button class='saludabtn' data-value='${unamigo.name}'>saludar</li>`;
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
        url: "http://www.mocky.io/v2/5bd86bb73100007e35474e49",

    }).done(function (data) {
        console.log(data);
        generaramigos(data,'#amigosface');
        linkarclick ('#amigosface');
    });

});
$('#cargarbtninsta').click(function () {

    $.ajax({
        url: "http://www.mocky.io/v2/5bd86bb73100007e35474e49",

    }).done(function (data) {
        console.log(data);
        generaramigos(data,'#amigosinsta');
        linkarclick ('#amigosinsta');
     
    });

});

