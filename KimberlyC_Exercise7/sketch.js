var pokemon;
var normalNum;
var normal = normalNum;

function preload() {
    pokemon = loadJSON("pokemon.json");
}

function setup(){
    createCanvas(800,800);
    background(190 , 220, 255);
}

function draw(){
    types();
    noStroke();
    fill(150);            
    ellipse(width/2, height/2, normal, normal);
}

function types(){
    var normalNum = 0;
    for (var i = 0; i < pokemon.length; i++){
        if (pokemon[i].type1_id == 1 || pokemon[i].type2_id == 1){
            normalNum++;
           
        }//normal if
        console.log(normalNum);
    }//normal for
}//types

