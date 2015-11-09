var kek;
//var normalNum;
//var normal = normalNum;


function preload() {
    kek = loadJSON("kek.json");
}

function setup(){
    createCanvas(800,800);
    background(0);
}

function draw(){
    stroke(255);
    fill(255);
    
    text(kek.ichi, 400,400);
}

