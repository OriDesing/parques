class Mapa {

    constructor() {
        this.img = loadImage("./img/mapa.png");
        this.posX = -500;
        this.posY = -500;
        this.posZ = 0;
        this.rotX = 0;
        this.rotY = 0;
        this.rotZ = 0;
        this.navX = -500;
        this.navY = -500;
        this.vel = 1;
        this.dist = 0;
    };

    // metodo encarfado de mostrar la imagen 
    mostrar() {
        push();
        image(this.img, this.posX, this.posY);
        pop();
    };

    //captura la pocicion del boton
    capturarPosicion(x, y) {
        this.navX = (x*-1) + (innerWidth/2);
        this.navY = (y*-1) + (innerHeight/2);
        this.vel = 10;

    };

    navegar() {

        if (this.posX < this.navX) {
            this.posX = this.posX + this.vel;
        };

        if (this.posX > this.navX) {
            this.posX = this.posX - this.vel;
        };

        if (this.posY < this.navY) {
            this.posY = this.posY + this.vel;
        };

        if (this.posY > this.navY) {
            this.posY = this.posY - this.vel;
        };

        posGobalX = this.posX;
        posGobalY = this.posY;

    };
};
class Boton {

    constructor(x, y, cargarImg) {
        this.posX = x;
        this.posY = y;
        this.img = loadImage(cargarImg);
        this.rueda = loadImage("img/rueda.png");
        this.rotar = 0;
    };

    mostrar() {
        push();
        translate(this.posX + posGobalX, this.posY + posGobalY);
        rotate(this.rotar);
        this.rotar = this.rotar + 0.05;
        image(this.rueda, -181.5, -181.5);
        pop();
        push();
        translate(this.posX + posGobalX, this.posY + posGobalY);
        image(this.img, -105, -105);
        pop();
    };
};

// listener
function mouseClicked() {
    document.getElementById('park').click();
};

class Nube {

    constructor(imgN) {
        this.posX = 0;
        this.posY = random(0,255);
        this.acel = 0.2;
        this.img = loadImage(imgN);
    };

    mostrar() {

        push();
        translate(0, 0);
        image(this.img, this.posX + posGobalX, this.posY + posGobalY,500,500);
        pop();
        this.posX = this.posX + this.acel;
    };
};

