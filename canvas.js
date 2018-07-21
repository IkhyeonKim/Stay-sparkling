//app.js

var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

// class Circle{
//     constructor(x ,y){
//         this.x = x;
//         this.y = y;
//     }

//     draw() {
//         c.clearRect(0,0,innerWidth,innerHeight);
//         c.beginPath();
//         c.arc(x, y, radius, 0, Math.PI * 2, false);

//         c.strokeStyle = "#282828";
//         c.stroke();
//     }
// }

function Circle(x, y, dx, dy, radius){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius

    this.draw = () => {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

        let red = getRandomInt(0,255);
        let green = getRandomInt(0,255);
        let blue = getRandomInt(0,255);

        c.fillStyle = `rgb(${red}, ${green}, ${blue})`;
        c.fill()
    }

    this.update = () => {
            
        if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
            this.dx = -this.dx;
        }

        if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
            this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;
        
        this.draw();
    }
}

var circle = new Circle(200,200,3,3,30);

var circleArray = [];

for(var i =0; i< 80; i++){
    let radius = 30;
    let x = Math.random() * (innerWidth - radius*2) + radius;
    let y = Math.random() * (innerHeight - radius*2) + radius;
    let dx= (Math.random() - .5) * 8; /*Negative or Positive*/
    let dy= (Math.random() - .5) * 8;


    circleArray.push(new Circle(x, y, dx, dy, radius));
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);

    for(var i=0; i<circleArray.length; i++){
        circleArray[i].update();
    }

    
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

animate();
