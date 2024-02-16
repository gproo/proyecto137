img = "";
status = "";
objects = [];

function preload(){
 img = loadImage('DFNKAG4LMNGRHDH7G44DFSO2EE.avif');
}

function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Estado: detectando objetos";
}

function draw() {
    image(img, 0, 0, 640, 420);
    if(status != "")
    {
    }
    fill("#FF0000");
    text("colibri", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350 );

    
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function modelLoaded() {
    console.log("¡Modelo cargado!")
    status= true;
    objectDetector.detect(img, gotResults);
}