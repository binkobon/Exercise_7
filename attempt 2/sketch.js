var pokeData;
//var normalNum;
//var normal = normalNum;
var normal = 0;


function preload() {
    pokeData = loadJSON("pokemon.json");
}

function setup(){
    createCanvas(800,800);
    background(190 , 220, 255);
    types();
}

function draw(){
//    types();
    fill(150);    
    if (normal){ //if normal evaluates to anything above 0, it should draw an ellipse in the center with the diameter of "normal"
    ellipse(width/2, height/2, normal, normal);
    }
}

function types(){
    pokemon = pokeData.pokemon;
    for (var i = 0; i < pokemon.length; i++){
        if (pokemon[i].type1_id == 1 || pokemon[i].type2_id == 1){
            normal++;
           
        }//normal if
        console.log(normal);
    }//normal for
}//types
