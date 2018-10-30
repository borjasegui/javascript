function generateStructure(arrNotes, divN) {
    let finalHtml = '';
 
    arrNotes.forEach(element => {
        finalHtml += element.tono ? `<div class="note" data-snd="${element.sonido}"></div>`
         : `<div class="note semi" data-snd="${element.sonido}"></div>`;
    });
 
    document.getElementById(divN).innerHTML = finalHtml;
    associateAndPlayNotes();
 }
 
 function associateAndPlayNotes() {
    let player = document.getElementById('player');
 
    document.querySelectorAll('.note').forEach(element => {
        element.onclick = function () {
            player.src = this.getAttribute('data-snd');
            player.play();
        }
    });
 
 }
 
 
 $.ajax({
    url: "http://www.mocky.io/v2/5bd887fc310000743a474f05",

}).done(function (data) {
    console.log(data);
    generateStructure(notas, 'piano');
    
});