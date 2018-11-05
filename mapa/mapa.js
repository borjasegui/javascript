


function initMap() {
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: { lat: 40.4630446, lng: -3.6767929 }
  });


//
  let alamo =new google.maps.Marker({
   position: { lat: 40.4619445, lng: -3.6741318 },
    map: map,
    title: 'Bar El Alamo',
    icon: './imgs/cerveza.png',
    info: new google.maps.InfoWindow({
      content: '<div id="bar"><h5>Bar El Alamo</h5></div><div id="texto"><h6>Chupitos Gratis de 00:00 a 00:30 los martes <a href="./barejemplo.html" class="info">mas info</a> </h6></div>'
     }),
  });
  google.maps.event.addListener(alamo, 'click', function () {
    alamo.info.open(map, alamo);
  });

  map.panTo(alamo.getPosition());

  //

  let fresxo = new google.maps.Marker({
    position: { lat: 40.4634891, lng: -3.6752189 },
    map: map,
    title: 'Bar EL Fresxo',
    icon: './imgs/cerveza.png',
    info: new google.maps.InfoWindow({
      content: '<div id="bar"><h5>Bar El Fresxo </h5></div><div id="texto"><h6>Con el Fresco ven al Fresxo y tienes un 3x2 en Birra. <a href="./barejemplo.1.html" class="info">mas info</a> </h6></div>'
     }),
     
  });

  google.maps.event.addListener(fresxo, 'click', function () {
    fresxo.info.open(map, fresxo);
  });

  map.panTo(fresxo.getPosition());

  let blanco = new google.maps.Marker({
    position: { lat: 40.4637448, lng: -3.6764269 },
    map: map,
    title: 'Bar EL Fresxo',
    icon: './imgs/cerveza.png',
    info: new google.maps.InfoWindow({
      content: '<div id="bar"><h5>Cerveceria Blanco y Azul</h5></div><div id="texto"><h6>Si vienes de blanco y azul, únicamente, chupito gratis <a href="./barejemplo.2.html" class="info">mas info</a> </h6></div>'
     }),
     
  });

  google.maps.event.addListener(blanco, 'click', function () {
    blanco.info.open(map, blanco);
  });

  map.panTo(blanco.getPosition());

  let cocodrila = new google.maps.Marker({
    position: { lat: 40.462959, lng: -3.6780409 },
    map: map,
    title: 'Bar EL Fresxo',
    icon: './imgs/cerveza.png',
    info: new google.maps.InfoWindow({
      content: '<div id="bar"><h5>Taberna La Cocodrila</h5></div><div id="texto"><h6>Todos los miercoles cerveza artesana nueva <a href="./barejemplo.3.html" class="info">mas info</a> </h6></div>'
     }),
     
  });

  google.maps.event.addListener(cocodrila, 'click', function () {
    cocodrila.info.open(map, cocodrila);
  });

  map.panTo(cocodrila.getPosition());

  let copas = new google.maps.Marker({
    position: { lat: 40.461812, lng: -3.6767821 },
    map: map,
    title: 'Bar EL Fresxo',
    icon: './imgs/cerveza.png',
    info: new google.maps.InfoWindow({
      content: '<div id="bar"><h5>Pop Copas y Tapas</h5></div><div id="texto"><h6>Ven 5 dias en tres semanas y te regalamos la tapa del mes con tu birra <a href="./barejemplo.4.html" class="info">mas info</a> </h6></div>'
     }),
     
  });

  google.maps.event.addListener(copas, 'click', function () {
    copas.info.open(map, copas);
  });

  map.panTo(copas.getPosition());

}

