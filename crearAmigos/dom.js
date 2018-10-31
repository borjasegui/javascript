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


document.getElementById('accebtn').onclick = (function (event) {
    console.log(event);
    event.preventDefault();
    let validar = document.getElementById('loginform').checkValidity();

    document.querySelectorAll('.error').forEach(elem => {
        elem.classList.add('esconder');
    });
    if (validar) {
        let newamigo= {

            nombre: document.getElementById('username').value,
            email: document.getElementById('addemail').value
        }
        $.ajax({
            method: "POST",
            url: "http://www.mocky.io/v2/5bd9732b2f0000790006d123",
            //url: "http://www.mocky.io/v2/5bd977892f00007b0006d151",
            data: newamigo
        }).done(function (data) {
            console.log(data);
            if(data.result){
                generaramigos(newamigo, '#amigosinsta');

            }else{
                document.getElementById('mensaje').classList.remove('esconder');

            }
        });

    } else {
        if (!document.getElementById('username').checkValidity()) {
            document.getElementById('incorrectouser').classList.remove('esconder');
        }
        if (!document.getElementById('addemail').checkValidity()) {
            document.getElementById('incorrectopass').classList.remove('esconder');
        }

    }

});