// Genaracion del Mapa

function preload() {
    
}


var value = 0;
var posGobalX = 0;
var posGobalY = 0;


function setup() {
    
    createCanvas(innerWidth, innerHeight); // Tamano de la ventrana
    mapa = new Mapa();
    nevado = new Boton(2000, 2000, "img/corte.png");
    nube = new Nube("img/rueda.png");
    frameRate(60);
};

function draw() {
    // Muestra la imagen en su tamaño original en la posición (0,0)
    background(0);
    mapa.mostrar();
    mapa.navegar();
    nube.mostrar();
    nevado.mostrar();

   
};



