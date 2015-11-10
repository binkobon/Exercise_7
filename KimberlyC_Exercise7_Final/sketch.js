var pokeData;
//below are variables set to cycle through the number of times each pokemon thype appears
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
// below are variables for all pictures that will be used
var normalPic;
var fightingPic;
var flyingPic;
var poisonPic;
var groundPic;
var rockPic;
var bugPic;
var ghostPic;
var steelPic;
var firePic;
var waterPic;
var grassPic;
var electricPic;
var psychicPic;
var icePic;
var dragonPic;
var darkPic;
//variable used to cycle through different generations
var slide = 0; 

function preload() { //every file i need is in here in the preload function
    pokeData = loadJSON("pokemon.json"); //loads the json file
    
    //below are all silhouettes of pokemon that are representative of each "type" of pokemon, all loaded from the data folder 
    normalPic = loadImage("data/normal.png");
    fightingPic = loadImage("data/fighting.png");
    flyingPic = loadImage("data/flying.png");
    poisonPic = loadImage("data/poison.png");
    groundPic = loadImage("data/ground.png");
    rockPic = loadImage("data/rock.png");
    bugPic = loadImage("data/bug.png");
    ghostPic = loadImage("data/ghost.png");
    steelPic = loadImage("data/steel.png");
    firePic = loadImage("data/fire.png");
    waterPic = loadImage("data/water.png");
    grassPic = loadImage("data/grass.png");
    electricPic = loadImage("data/electric.png");
    psychicPic = loadImage("data/psychic.png");
    icePic = loadImage("data/ice.png");
    dragonPic = loadImage("data/dragon.png");
    darkPic = loadImage("data/dark.png");
    
}

function setup(){
    createCanvas(700, 700);
    background(255, 220, 230);
    scale = 2;
    image(normalPic, 50, 100, normal * scale, normal * scale); //width and height determined by the type
    image(fightingPic, 150, 100, fighting * scale, fighting * scale);
    image(flyingPic, 250, 100, flying * scale, flying * scale)
    image(poisonPic, 350, 100, poison * scale, poison * scale);
    image(groundPic, 450, 100, ground * scale, ground * scale);
    image(rockPic, 50, 250, rock * scale, rock * scale);
    image(bugPic, 150, 250, bug * scale, bug * scale);
    image(ghostPic, 250, 250, ghost*scale, ghost*scale);
    image(steelPic, 350, 250, steel*scale, steel*scale);
    image(firePic, 450, 250, fire*scale, fire*scale);
    image(waterPic, 30, 350, water*scale, water*scale);
    image(grassPic, 150, 350, grass*scale, grass*scale);
    image(electricPic, 250, 350, electric *scale, electric*scale);
    image(psychicPic, 350, 350, psychic*scale, psychic*scale);
    image(icePic, 450, 350, ice*3, ice*scale);
    image(dragonPic, 240, 240, dragon*scale, dragon*scale);
    image(darkPic, 250, 450, dark*scale, dark*scale);
    textSize(32);
    strokeWeight(1);
    stroke(0);
    fill(220, 255, 220);
    text("The abundance of Pokemon", 10, 50);
    text("by type, Gen I~V.", 10, 80);
    textSize(16);
    text("Click anywhere to continue!", 10, 100);
}

function draw(){ 
    noTint();
    var scale = 4;
    image(normalPic, 50, 100, normal * scale, normal * scale); //width and height determined by the type
    image(fightingPic, 150, 100, fighting * scale, fighting * scale);
    image(flyingPic, 250, 100, flying * scale, flying * scale)
    image(poisonPic, 350, 100, poison * scale, poison * scale);
    image(groundPic, 450, 100, ground * scale, ground * scale);
    image(rockPic, 50, 250, rock * scale, rock * scale);
    image(bugPic, 150, 250, bug * scale, bug * scale);
    image(ghostPic, 250, 250, ghost*scale, ghost*scale);
    image(steelPic, 350, 250, steel*scale, steel*scale);
    image(firePic, 450, 250, fire*scale, fire*scale);
    image(waterPic, 30, 350, water*scale, water*scale);
    image(grassPic, 150, 350, grass*scale, grass*scale);
    image(electricPic, 250, 350, electric *scale, electric*scale);
    image(psychicPic, 350, 350, psychic*scale, psychic*scale);
    image(icePic, 450, 350, ice*scale, ice*scale);
    image(dragonPic, 200, 450, dragon*scale, dragon*scale); 
    
    //if dark type exists, draw it at (250,250) 
    if (dark > 0){
        image(darkPic, 250, 450, dark*scale, dark*scale);
    }
}

function mousePressed(){    
    slide++
    if (slide == 1){
        background(255, 240, 240);
        textSize(24);
        stroke(0);
        fill(255);
        text("Generation I", 0, 30);
        textSize(12);
        text("No Dark types!", 0, 50);
        genOne();
        console.log(normal);
        console.log(fighting);
        console.log(dark);
    }
    
    if (slide == 2){
        background(250, 235, 220);
        textSize(24);
        stroke(0);
        fill(255);
        text("Generation II", 0, 30);
        genTwo();
        console.log(normal);
        console.log(fighting);
    }
    
    if (slide == 3){
        background(255, 255, 240);
        textSize(24);
        stroke(0);
        fill(255);
        text("Generation III", 0, 30);
        genThree();
        console.log(normal);
        console.log(fighting);
    }
    if (slide == 4){
        background(240, 255, 240);
        textSize(24);
        stroke(0);
        fill(255);
        text("Generation IV", 0, 30);
        genFour();
        console.log(normal);
        console.log(fighting);
    }    
    
    if (slide == 5){
        background(240, 240, 255);
        textSize(24);
        stroke(0);
        fill(255);
        text("Generation V", 0, 30);
        genFive();
        console.log(normal);
        console.log(fighting);
    }
    
    if (slide == 6){
        background(255, 240, 240);
        textSize(24);
        stroke(0);
        fill(255);
        text("Generation I", 0, 30);
        textSize(12);
        text("No Dark types!", 0, 50);
        genOne();
        console.log(normal);
        console.log(fighting);
        slide = 0;
    }
    
//    if (slide > 5){
//        slide = 0;
//    }    
}

function genOne(){
    pokemon = pokeData.pokemon;
    
    normal = 0;
    fighting = 0;
    flying = 0;
    poison = 0;
    ground = 0;
    rock = 0;
    bug = 0;
    ghost = 0;
    steel = 0;
    fire = 0;
    water = 0;
    grass = 0;
    electric = 0;
    psychic = 0;
    ice = 0;
    dragon = 0;
    dark = 0;
    
    for (var i = 0; i < 152; i++){
        if (pokemon[i].type1_id == 1 || pokemon[i].type2_id == 1){
            normal++;
        }//normal if
    }//normal for
    for (var i = 0; i < 152; i++){
        if (pokemon[i].type1_id == 2 || pokemon[i].type2_id == 2){
            fighting++;
        }//fighting if
    }//fighting for
    
    for (var i = 0; i < 152; i++){
        if (pokemon[i].type1_id == 3 || pokemon[i].type2_id == 3){
            flying++;
        }//flying if
    }//flying for
    
    for (var i = 0; i < 152; i++){
        if (pokemon[i].type1_id == 4 || pokemon[i].type2_id == 4){
            poison++;
        }//poison if
    }//poison for
    
    for (var i = 0; i < 152; i++){
        if (pokemon[i].type1_id == 5 || pokemon[i].type2_id == 5){
            ground++;
        }//ground if
    }//ground for    
    
    for (var i = 0; i < 152; i++){
        if (pokemon[i].type1_id == 6 || pokemon[i].type2_id == 6){
            rock++;
        }//rock if
    }//rock for

    for (var i = 0; i < 152; i++){
        if (pokemon[i].type1_id == 7 || pokemon[i].type2_id == 7){
            bug++;
        }//bug if
    }//bug for    
    
    for (var i = 0; i < 152; i++){
        if (pokemon[i].type1_id == 8 || pokemon[i].type2_id == 8){
            ghost++;
        }//ghost if
    }//ghost for

    for (var i = 0; i < 152; i++){
        if (pokemon[i].type1_id == 9 || pokemon[i].type2_id == 9){
            steel++;
        }//steel if
    }//steel for 
    
    for (var i = 0; i < 152; i++){
        if (pokemon[i].type1_id == 10 || pokemon[i].type2_id == 10){
            fire++;
        }//fire if
    }//fire for    
    
    for (var i = 0; i < 152; i++){
        if (pokemon[i].type1_id == 11 || pokemon[i].type2_id == 11){
            water++;
        }//water if
    }//water for
    
    for (var i = 0; i < 152; i++){
        if (pokemon[i].type1_id == 12 || pokemon[i].type2_id == 12){
            grass++;
        }//grass if
    }//grass for
    
    for (var i = 0; i < 152; i++){
        if (pokemon[i].type1_id == 13 || pokemon[i].type2_id == 13){
            electric++;
        }//electric if
    }//electric for
    
    for (var i = 0; i < 152; i++){
        if (pokemon[i].type1_id == 14 || pokemon[i].type2_id == 14){
            psychic++;
        }//psychic if
    }//psychic for
    
    for (var i = 0; i < 152; i++){
        if (pokemon[i].type1_id == 15 || pokemon[i].type2_id == 15){
            ice++;
        }//ice if
    }//ice for
    
    for (var i = 0; i < 152; i++){
        if (pokemon[i].type1_id == 16 || pokemon[i].type2_id == 16){
            dragon++;
        }//dragon if
    }//dragon for
    
    //commented out because there are no dark types in gen 1
//    for (var i = 0; i < 152; i++){
//        if (pokemon[i].type1_id == 17 || pokemon[i].type2_id == 17){
//            dark++;
//        }//dark if
//    }//dark for
}//genOne

function genTwo(){
    pokemon = pokeData.pokemon;
    // setting all types back to 0 so that they reset
    normal = 0;
    fighting = 0;
    flying = 0;
    poison = 0;
    ground = 0;
    rock = 0;
    bug = 0;
    ghost = 0;
    steel = 0;
    fire = 0;
    water = 0;
    grass = 0;
    electric = 0;
    psychic = 0;
    ice = 0;
    dragon = 0;
    dark = 0;
    for (var i = 152; i < 252; i++){
        if (pokemon[i].type1_id == 1 || pokemon[i].type2_id == 1){
            normal++;
        }//normal if
    }//normal for
    
    for (var i = 152; i < 252; i++){
        if (pokemon[i].type1_id == 2 || pokemon[i].type2_id == 2){
            fighting++;
        }//fighting if
    }//fighting for
    
    for (var i = 152; i < 252; i++){
        if (pokemon[i].type1_id == 3 || pokemon[i].type2_id == 3){
            flying++;
        }//flying if
    }//flying for
    
    for (var i = 152; i < 252; i++){
        if (pokemon[i].type1_id == 4 || pokemon[i].type2_id == 4){
            poison++;
        }//poison if
    }//poison for
    
    for (var i = 152; i < 252; i++){
        if (pokemon[i].type1_id == 5 || pokemon[i].type2_id == 5){
            ground++;
        }//ground if
    }//ground for    
    
    for (var i = 152; i < 252; i++){
        if (pokemon[i].type1_id == 6 || pokemon[i].type2_id == 6){
            rock++;
        }//rock if
    }//rock for

    for (var i = 152; i < 252; i++){
        if (pokemon[i].type1_id == 7 || pokemon[i].type2_id == 7){
            bug++;
        }//bug if
    }//bug for    
    
    for (var i = 152; i < 252; i++){
        if (pokemon[i].type1_id == 8 || pokemon[i].type2_id == 8){
            ghost++;
        }//ghost if
    }//ghost for

    for (var i = 152; i < 252; i++){
        if (pokemon[i].type1_id == 9 || pokemon[i].type2_id == 9){
            steel++;
        }//steel if
    }//steel for 
    
    for (var i = 152; i < 252; i++){
        if (pokemon[i].type1_id == 10 || pokemon[i].type2_id == 10){
            fire++;
        }//fire if
    }//fire for    
    
    for (var i = 152; i < 252; i++){
        if (pokemon[i].type1_id == 11 || pokemon[i].type2_id == 11){
            water++;
        }//water if
    }//water for
    
    for (var i = 152; i < 252; i++){
        if (pokemon[i].type1_id == 12 || pokemon[i].type2_id == 12){
            grass++;
        }//grass if
    }//grass for
    
    for (var i = 152; i < 252; i++){
        if (pokemon[i].type1_id == 13 || pokemon[i].type2_id == 13){
            electric++;
        }//electric if
    }//electric for
    
    for (var i = 152; i < 252; i++){
        if (pokemon[i].type1_id == 14 || pokemon[i].type2_id == 14){
            psychic++;
        }//psychic if
    }//psychic for
    
    for (var i = 152; i < 252; i++){
        if (pokemon[i].type1_id == 15 || pokemon[i].type2_id == 15){
            ice++;
        }//ice if
    }//ice for
    
    for (var i = 152; i < 252; i++){
        if (pokemon[i].type1_id == 16 || pokemon[i].type2_id == 16){
            dragon++;
        }//dragon if
    }//dragon for
    
    for (var i = 152; i < 252; i++){
        if (pokemon[i].type1_id == 17 || pokemon[i].type2_id == 17){
            dark++;
        }//dark if
    }//dark for
}//genTwo

function genThree(){
    pokemon = pokeData.pokemon;
    normal = 0;
    for (var i = 252; i < 386; i++){
        if (pokemon[i].type1_id == 1 || pokemon[i].type2_id == 2){
            normal++;
        }//normal if
    }//normal for
    for (var i = 252; i < 386; i++){
        if (pokemon[i].type1_id == 2 || pokemon[i].type2_id == 2){
            fighting++;
        }//fighting if
    }//fighting for
    
    for (var i = 252; i < 386; i++){
        if (pokemon[i].type1_id == 3 || pokemon[i].type2_id == 3){
            flying++;
        }//flying if
    }//flying for
    
    for (var i = 252; i < 386; i++){
        if (pokemon[i].type1_id == 4 || pokemon[i].type2_id == 4){
            poison++;
        }//poison if
    }//poison for
    
    for (var i = 252; i < 386; i++){
        if (pokemon[i].type1_id == 5 || pokemon[i].type2_id == 5){
            ground++;
        }//ground if
    }//ground for    
    
    for (var i = 252; i < 386; i++){
        if (pokemon[i].type1_id == 6 || pokemon[i].type2_id == 6){
            rock++;
        }//rock if
    }//rock for

    for (var i = 252; i < 386; i++){
        if (pokemon[i].type1_id == 7 || pokemon[i].type2_id == 7){
            bug++;
        }//bug if
    }//bug for    
    
    for (var i = 252; i < 386; i++){
        if (pokemon[i].type1_id == 8 || pokemon[i].type2_id == 8){
            ghost++;
        }//ghost if
    }//ghost for

    for (var i = 252; i < 386; i++){
        if (pokemon[i].type1_id == 9 || pokemon[i].type2_id == 9){
            steel++;
        }//steel if
    }//steel for 
    
    for (var i = 252; i < 386; i++){
        if (pokemon[i].type1_id == 10 || pokemon[i].type2_id == 10){
            fire++;
        }//fire if
    }//fire for    
    
    for (var i = 252; i < 386; i++){
        if (pokemon[i].type1_id == 11 || pokemon[i].type2_id == 11){
            water++;
        }//water if
    }//water for
    
    for (var i = 252; i < 386; i++){
        if (pokemon[i].type1_id == 12 || pokemon[i].type2_id == 12){
            grass++;
        }//grass if
    }//grass for
    
    for (var i = 252; i < 386; i++){
        if (pokemon[i].type1_id == 13 || pokemon[i].type2_id == 13){
            electric++;
        }//electric if
    }//electric for
    
    for (var i = 252; i < 386; i++){
        if (pokemon[i].type1_id == 14 || pokemon[i].type2_id == 14){
            psychic++;
        }//psychic if
    }//psychic for
    
    for (var i = 252; i < 386; i++){
        if (pokemon[i].type1_id == 15 || pokemon[i].type2_id == 15){
            ice++;
        }//ice if
    }//ice for
    
    for (var i = 252; i < 386; i++){
        if (pokemon[i].type1_id == 16 || pokemon[i].type2_id == 16){
            dragon++;
        }//dragon if
    }//dragon for
    
    for (var i = 252; i < 386; i++){
        if (pokemon[i].type1_id == 17 || pokemon[i].type2_id == 17){
            dark++;
        }//dark if
    }//dark for
}//genThree

function genFour(){
    pokemon = pokeData.pokemon;
    // setting all types back to 0 so that they reset
    normal = 0;
    fighting = 0;
    flying = 0;
    poison = 0;
    ground = 0;
    rock = 0;
    bug = 0;
    ghost = 0;
    steel = 0;
    fire = 0;
    water = 0;
    grass = 0;
    electric = 0;
    psychic = 0;
    ice = 0;
    dragon = 0;
    dark = 0;
    for (var i = 386; i < 494; i++){
        if (pokemon[i].type1_id == 1 || pokemon[i].type2_id == 2){
            normal++;
        }//normal if
    }//normal for
    for (var i = 386; i < 494; i++){
        if (pokemon[i].type1_id == 2 || pokemon[i].type2_id == 2){
            fighting++;
        }//fighting if
    }//fighting for
    
    for (var i = 386; i < 494; i++){
        if (pokemon[i].type1_id == 3 || pokemon[i].type2_id == 3){
            flying++;
        }//flying if
    }//flying for
    
    for (var i = 386; i < 494; i++){
        if (pokemon[i].type1_id == 4 || pokemon[i].type2_id == 4){
            poison++;
        }//poison if
    }//poison for
    
    for (var i = 386; i < 494; i++){
        if (pokemon[i].type1_id == 5 || pokemon[i].type2_id == 5){
            ground++;
        }//ground if
    }//ground for    
    
    for (var i = 386; i < 494; i++){
        if (pokemon[i].type1_id == 6 || pokemon[i].type2_id == 6){
            rock++;
        }//rock if
    }//rock for

    for (var i = 386; i < 494; i++){
        if (pokemon[i].type1_id == 7 || pokemon[i].type2_id == 7){
            bug++;
        }//bug if
    }//bug for    
    
    for (var i = 386; i < 494; i++){
        if (pokemon[i].type1_id == 8 || pokemon[i].type2_id == 8){
            ghost++;
        }//ghost if
    }//ghost for

    for (var i = 386; i < 494; i++){
        if (pokemon[i].type1_id == 9 || pokemon[i].type2_id == 9){
            steel++;
        }//steel if
    }//steel for 
    
    for (var i = 386; i < 494; i++){
        if (pokemon[i].type1_id == 10 || pokemon[i].type2_id == 10){
            fire++;
        }//fire if
    }//fire for    
    
    for (var i = 386; i < 494; i++){
        if (pokemon[i].type1_id == 11 || pokemon[i].type2_id == 11){
            water++;
        }//water if
    }//water for
    
    for (var i = 386; i < 494; i++){
        if (pokemon[i].type1_id == 12 || pokemon[i].type2_id == 12){
            grass++;
        }//grass if
    }//grass for
    
    for (var i = 386; i < 494; i++){
        if (pokemon[i].type1_id == 13 || pokemon[i].type2_id == 13){
            electric++;
        }//electric if
    }//electric for
    
    for (var i = 386; i < 494; i++){
        if (pokemon[i].type1_id == 14 || pokemon[i].type2_id == 14){
            psychic++;
        }//psychic if
    }//psychic for
    
    for (var i = 386; i < 494; i++){
        if (pokemon[i].type1_id == 15 || pokemon[i].type2_id == 15){
            ice++;
        }//ice if
    }//ice for
    
    for (var i = 386; i < 494; i++){
        if (pokemon[i].type1_id == 16 || pokemon[i].type2_id == 16){
            dragon++;
        }//dragon if
    }//dragon for
    
    for (var i = 386; i < 494; i++){
        if (pokemon[i].type1_id == 17 || pokemon[i].type2_id == 17){
            dark++;
        }//dark if
    }//dark for
}//genFour

function genFive(){
    pokemon = pokeData.pokemon;
    normal = 0;
    fighting = 0;
    flying = 0;
    poison = 0;
    ground = 0;
    rock = 0;
    bug = 0;
    ghost = 0;
    steel = 0;
    fire = 0;
    water = 0;
    grass = 0;
    electric = 0;
    psychic = 0;
    ice = 0;
    dragon = 0;
    dark = 0;
    for (var i = 494; i < 650; i++){
        if (pokemon[i].type1_id == 1 || pokemon[i].type2_id == 2){
            normal++;
        }//normal if
    }//normal for
    for (var i = 494; i < 650; i++){
        if (pokemon[i].type1_id == 2 || pokemon[i].type2_id == 2){
            fighting++;
        }//fighting if
    }//fighting for
    
    for (var i = 494; i < 650; i++){
        if (pokemon[i].type1_id == 3 || pokemon[i].type2_id == 3){
            flying++;
        }//flying if
    }//flying for
    
    for (var i = 494; i < 650; i++){
        if (pokemon[i].type1_id == 4 || pokemon[i].type2_id == 4){
            poison++;
        }//poison if
    }//poison for
    
    for (var i = 494; i < 650; i++){
        if (pokemon[i].type1_id == 5 || pokemon[i].type2_id == 5){
            ground++;
        }//ground if
    }//ground for    
    
    for (var i = 494; i < 650; i++){
        if (pokemon[i].type1_id == 6 || pokemon[i].type2_id == 6){
            rock++;
        }//rock if
    }//rock for

    for (var i = 494; i < 650; i++){
        if (pokemon[i].type1_id == 7 || pokemon[i].type2_id == 7){
            bug++;
        }//bug if
    }//bug for    
    
    for (var i = 494; i < 650; i++){
        if (pokemon[i].type1_id == 8 || pokemon[i].type2_id == 8){
            ghost++;
        }//ghost if
    }//ghost for

    for (var i = 494; i < 650; i++){
        if (pokemon[i].type1_id == 9 || pokemon[i].type2_id == 9){
            steel++;
        }//steel if
    }//steel for 
    
    for (var i = 494; i < 650; i++){
        if (pokemon[i].type1_id == 10 || pokemon[i].type2_id == 10){
            fire++;
        }//fire if
    }//fire for    
    
    for (var i = 494; i < 650; i++){
        if (pokemon[i].type1_id == 11 || pokemon[i].type2_id == 11){
            water++;
        }//water if
    }//water for
    
    for (var i = 494; i < 650; i++){
        if (pokemon[i].type1_id == 12 || pokemon[i].type2_id == 12){
            grass++;
        }//grass if
    }//grass for
    
    for (var i = 494; i < 650; i++){
        if (pokemon[i].type1_id == 13 || pokemon[i].type2_id == 13){
            electric++;
        }//electric if
    }//electric for
    
    for (var i = 494; i < 650; i++){
        if (pokemon[i].type1_id == 14 || pokemon[i].type2_id == 14){
            psychic++;
        }//psychic if
    }//psychic for
    
    for (var i = 494; i < 650; i++){
        if (pokemon[i].type1_id == 15 || pokemon[i].type2_id == 15){
            ice++;
        }//ice if
    }//ice for
    
    for (var i = 494; i < 650; i++){
        if (pokemon[i].type1_id == 16 || pokemon[i].type2_id == 16){
            dragon++;
        }//dragon if
    }//dragon for
    
    for (var i = 494; i < 650; i++){
        if (pokemon[i].type1_id == 17 || pokemon[i].type2_id == 17){
            dark++;
        }//dark if
    }//dark for
}//genFive
