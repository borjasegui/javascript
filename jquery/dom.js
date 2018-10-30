
//idempotente



$('h1').html('hola!!').click(function () {
    alert('este es el titulo');
}).html('otro titulo');


let amigos = [
    { name: 'ricardo', email: ' ri@gamil.com' },
    { name: 'carlos', email: ' redi@gamil.com' },
    { name: 'petra', email: ' rdfi@gamil.com' },
    { name: 'vero', email: ' rghi@gamil.com' }
];

$('#amigos').html(function () {
   let htmlamigos='';
   amigos.forEach(unamigo =>{
       htmlamigos+= `<li>
       <div>${unamigo.name}</div>
       <div>${unamigo.email}</div>
       <button class='saludabtn' data-value='${unamigo.name}'>saludar</li>`;
   });
   return htmlamigos;
});
$('.saludabtn').click(function(){
    alert('hola '+$(this).attr('data-value')+'!!');
});
$('#holabtn').click(function(){
    $('#amigos').toggle();
});