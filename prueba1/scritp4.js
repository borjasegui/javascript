let ricardo = {
    nombre: 'ricardo',
    apellido: 'ahumada',
    email: 'fsdjklgsdfljk',
    edad: '41',
    gustanvideojuegos: true,
    tienesexo: false,

    saludar: function () {
        return 'hola,me llamo ' + this.nombre + ' ,tengo ' + this.edad + ' años y juego videojuegos.';

    }
};
let marta = {
    nombre: 'marta',
    apellido: 'torre',
    email: 's33e3e',
    edad: '25',
    gustanvideojuegos: false,
    tienesexo: true
};
console.log(ricardo);
console.log('apellido :', ricardo.apellido);
console.log('tiene sexo :', ricardo.tienesexo);
console.log('video juegos :', marta.gustanvideojuegos);
console.log('edad :', marta.edad);
console.log(ricardo.saludar());




let clase = [
    {
        id: 1,
        nombre: 'borja',
        edad: 45,
        showinfo: function () {
            return '[' + this.id + ']', this.nombre, this.edad;
        }
    },
    {
        id: 2,
        nombre: 'cristina',
        edad: 12,
        showinfo: function () {
            return '[' + this.id + ']'+ this.nombre+ this.edad;
        }
    },
    {
        id: 3,
        nombre: 'ricardo',
        edad: 34,
        showinfo: function () {
            return '[' + this.id + ']'+ this.nombre+this.edad;
        }
    }, {
        id: 4,
        nombre: 'rafa',
        edad: 20,
        showinfo: function () {
            return '[' + this.id + ']'+ this.nombre+ this.edad;
        }
    },
    {
        id: 5,
        nombre: 'carlos',
        edad: 98,
        showinfo: function () {
            return '[' + this.id + ']'+this.nombre+ this.edad;
        }
    },
]


for (let index = 0; index < clase.length; index++) {
    console.log(clase[index].showinfo());
}


let Personas = function(id,nom,ed){
    this.id =id;
    this.nombre =nom;
    this.edad = ed;
    this.showinfo=function(){
        return '[' + this.id + ']'+this.nombre+ this.edad;
    }
}
let clase2= [
    new Personas(8,'diego', 225),
    new Personas(9,'diego', 465),
    new Personas(10,'diego', 485),
];

for (let index = 0; index < clase2.length; index++) {
     console.log(clase2[index].showinfo());
 }


