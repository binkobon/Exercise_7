var pokeData;
var normal = 0;
var fighting = 0;
var flying = 0;
var poison = 0;
var ground = 0;
var rock = 0;
var bug = 0;
var ghost = 0;
var steel = 0;
var fire = 0;
var water = 0;
var grass = 0;
var electric = 0;
var psychic = 0;
var ice = 0;
var dragon = 0;
var dark = 0;

function preload() {
    pokeData = loadJSON("pokemon.json");
}

function setup(){
    createCanvas(800,800);
    background(190 , 220, 255);
    types();
    
    noStroke();
    
    //testing to see if each call to the type number will appear, will make distinctions to each type soon.
    fill(255, 0, 0, 100);    
    ellipse(100, 200, normal, normal);
    ellipse(200, 200, fighting, fighting);
    ellipse(300, 300, flying, flying);
    ellipse(400, 300, poison, poison);
    ellipse(300, 660, ground, ground);
    ellipse(390, 200, rock, rock);
    ellipse(280, 100, bug, bug);
    ellipse(100, 300, ghost, ghost);
    ellipse(200, 300, steel, steel);
    ellipse(400, 300, fire, fire);
    ellipse(155, 300, water, water);
    ellipse(700, 300, grass, grass);
    ellipse(600, 650, electric, electric);
    ellipse(300, 500, psychic, psychic);
    ellipse(300, 600, ice, ice);
    ellipse(670, 630, dragon, dragon);
    ellipse(600, 720, dark, dark); 
    
    textFont(24);
    stroke(0);
    strokeWeight(10);
    fill(0);
    text(normal, 200, 200);
    
    //finds the number associated with each type in console log
    console.log(normal); //98
    console.log(fighting); //41
    console.log(flying); //84
    console.log(poison); //57
    console.log(ground); //59
    console.log(rock); //47
    console.log(bug); //65
    console.log(ghost); //28
    console.log(steel); //38
    console.log(fire); //50
    console.log(water); //110
    console.log(grass); //77
    console.log(electric); //44
    console.log(psychic); // 72
    console.log(ice); //30
    console.log(dragon); //30
    console.log(dark); //39

}

function draw(){  
}

function types(){
    pokemon = pokeData.pokemon;
    //normal
    for (var i = 0; i < pokemon.length; i++){
        if (pokemon[i].type1_id == 1 || pokemon[i].type2_id == 1){
            normal++;
        }//normal if
    }//normal for
    
    for (var i = 0; i < pokemon.length; i++){
        if (pokemon[i].type1_id == 2 || pokemon[i].type2_id == 2){
            fighting++;
        }//fighting if
    }//fighting for
    
    for (var i = 0; i < pokemon.length; i++){
        if (pokemon[i].type1_id == 3 || pokemon[i].type2_id == 3){
            flying++;
        }//flying if
    }//flying for
    
    for (var i = 0; i < pokemon.length; i++){
        if (pokemon[i].type1_id == 4 || pokemon[i].type2_id == 4){
            poison++;
        }//poison if
    }//poison for
    
    for (var i = 0; i < pokemon.length; i++){
        if (pokemon[i].type1_id == 5 || pokemon[i].type2_id == 5){
            ground++;
        }//ground if
    }//ground for    
    
    for (var i = 0; i < pokemon.length; i++){
        if (pokemon[i].type1_id == 6 || pokemon[i].type2_id == 6){
            rock++;
        }//rock if
    }//rock for

    for (var i = 0; i < pokemon.length; i++){
        if (pokemon[i].type1_id == 7 || pokemon[i].type2_id == 7){
            bug++;
        }//bug if
    }//bug for    
    
    for (var i = 0; i < pokemon.length; i++){
        if (pokemon[i].type1_id == 8 || pokemon[i].type2_id == 8){
            ghost++;
        }//ghost if
    }//ghost for

    for (var i = 0; i < pokemon.length; i++){
        if (pokemon[i].type1_id == 9 || pokemon[i].type2_id == 9){
            steel++;
        }//steel if
    }//steel for 
    
    for (var i = 0; i < pokemon.length; i++){
        if (pokemon[i].type1_id == 10 || pokemon[i].type2_id == 10){
            fire++;
        }//fire if
    }//fire for    
    
    for (var i = 0; i < pokemon.length; i++){
        if (pokemon[i].type1_id == 11 || pokemon[i].type2_id == 11){
            water++;
        }//water if
    }//water for
    
    for (var i = 0; i < pokemon.length; i++){
        if (pokemon[i].type1_id == 12 || pokemon[i].type2_id == 12){
            grass++;
        }//grass if
    }//grass for
    
    for (var i = 0; i < pokemon.length; i++){
        if (pokemon[i].type1_id == 13 || pokemon[i].type2_id == 13){
            electric++;
        }//electric if
    }//electric for
    
    for (var i = 0; i < pokemon.length; i++){
        if (pokemon[i].type1_id == 14 || pokemon[i].type2_id == 14){
            psychic++;
        }//psychic if
    }//psychic for
    
    for (var i = 0; i < pokemon.length; i++){
        if (pokemon[i].type1_id == 15 || pokemon[i].type2_id == 15){
            ice++;
        }//ice if
    }//ice for
    
    for (var i = 0; i < pokemon.length; i++){
        if (pokemon[i].type1_id == 16 || pokemon[i].type2_id == 16){
            dragon++;
        }//dragon if
    }//dragon for
    
    for (var i = 0; i < pokemon.length; i++){
        if (pokemon[i].type1_id == 17 || pokemon[i].type2_id == 17){
            dark++;
        }//dark if
    }//dark for
}//types