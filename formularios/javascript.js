document.getElementById('accebtn').onclick = (function (event) {
    console.log(event);
    event.preventDefault();
    let validar = document.getElementById('loginform').checkValidity();

    document.querySelectorAll('.error').forEach(elem => {
        elem.classList.add('esconder');
    });
    if (validar) {
        $.ajax({
            method: "POST",
            url: "http://www.mocky.io/v2/5bd9732b2f0000790006d123",
            //url: "http://www.mocky.io/v2/5bd977892f00007b0006d151",
            data: {
                username: document.getElementById('username').value,
                password: document.getElementById('password').value
            }
        }).done(function (data) {
            console.log(data);
            if(data.result){
                window.location.href='dashboard.html';

            }else{
                document.getElementById('mensaje').classList.remove('esconder');

            }
        });

    } else {
        if (!document.getElementById('username').checkValidity()) {
            document.getElementById('incorrectouser').classList.remove('esconder');
        }
        if (!document.getElementById('password').checkValidity()) {
            document.getElementById('incorrectopass').classList.remove('esconder');
        }

    }

});
