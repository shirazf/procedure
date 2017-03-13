var character;
var mosque;
var hamburger, pos_hamburger;
var water, pos_water;
var cigarette, pos_cigarette;
var score, life, level;
var time = millis();

function preload() {
    bismillah = loadImage("assets/bismillah.png");
    bismillahlose = loadImage("assets/bismillahlose.png");
    mosque = loadImage("assets/mosque.png");
    var characterimg = loadImage("assets/l0_muslimgirl_1.png")
    var hamburgerimg = loadImage("assets/hamburger_0.png");
    var waterimg = loadImage("assets/water.png");
    var cigaretteimg = loadImage("assets/cigarette.png");
    character = createSprite(mouseX, 325);
    character.addImage(characterimg);
    hamburger = createSprite(random(0, 600), 0);
    hamburger.addImage(hamburgerimg);
    water = createSprite(20, 20);
    water.addImage(waterimg);
    cigarette = createSprite(0, 0);
    cigarette.addImage(cigaretteimg);
}

function setup() {
    createCanvas(mosque.width * 2, mosque.height * 2);
    score = 0;
    level = 0;
    life = 3;
}

function draw() {
    if(level == 0){
        character.visible = false;
        hamburger.visible = false;
        cigarette.visible = false;
        water.visible = false;
        image(bismillah, 0, 0, 512, 512);
     //  background (32);
      // rect(34, 30, 30, 30);
        //textSize(30)
       // text("click anywhere to begin", 40, 40);
    }
    if (level > 0){
    
    image(mosque, 0, 0, mosque.width * 2, mosque.height * 2);
    character.visible = true;
    hamburger.visible = true;
    cigarette.visible = true;
    water.visible = true;
        
    //character.debug = true;
    //hamburger.debug = true;
   // water.debug = true;
    //cigarette.debug = true;
    
    
    
    //lives

    textSize(12);
    fill(255);
    text(life, 40, 30);
    text("lives:", 5, 30);
    //move the character
    character.position.x = mouseX;
    character.position.y = 325;
    character.setCollider("rectangle", 0, -75, 70, 2);
    //level 1
    if (level == 1) {
        //make the burger fall
        hamburger.position.y = hamburger.position.y + 1;
        if (hamburger.position.y > 512) {
            hamburger.position.y = 0;
            hamburger.position.x = random(0, 512);
        }
        hamburger.setCollider("rectangle", 0, 20, 30, 1);
        
        //make the water fall
        //water.position.y = water.position.y + 2;
        water.setSpeed(random(1, 5), 90);
        if (water.position.y > 512) {
            water.position.y = 0;
            water.position.x = random(0, 512);
            water.setSpeed(random(1, 30), 90);
        }
        water.setCollider("rectangle", 0, 100, 60, 1);
        
        //make the cigarette fall
        cigarette.position.y = cigarette.position.y + 3;
        if (cigarette.position.y > 512) {
            cigarette.position.y = 0;
            cigarette.position.x = random(0, 512);
        }
        cigarette.setCollider("rectangle", 0, 0, 40, 1);
    }
    //levels change
    if (score >= 2000) {
        level = 2;
        }
    if (score >= 5000) {
        level = 3;
    }
    if (score >= 7000) {
        level = 4;
    }
    if (score >= 9000){
        level = 5;
    }
    if (score >= 15000){
        level = 6
    }
    
    //what happens in levels
    //level 2
    if (level == 2) { //make the burger fall
        hamburger.position.y = hamburger.position.y + 3;
        if (hamburger.position.y > 512) {
            hamburger.position.y = 0;
            hamburger.position.x = random(0, 512);
        }
        hamburger.setCollider("rectangle", 0, 20, 30, 1);
        //make the water fall
        //water.position.y = water.position.y + 5;
        water.setSpeed(random(1, 5), 90);
        if (water.position.y > 512) {
            water.position.y = 0;
            water.position.x = random(0, 512);
            water.setSpeed(random(1, 30), 90);
        }
        water.setCollider("rectangle", 0, 100, 60, 1);
        //make the cigarette fall
        cigarette.position.y = cigarette.position.y + 7;
        if (cigarette.position.y > 512) {
            cigarette.position.y = 0;
            cigarette.position.x = random(0, 512);
        }
        cigarette.setCollider("rectangle", 0, 0, 40, 1);
    }
    //level 3
    if (level == 3) { //make the burger fall
        hamburger.position.y = hamburger.position.y + 5;
        if (hamburger.position.y > 512) {
            hamburger.position.y = 0;
            hamburger.position.x = random(0, 512);
        }
        hamburger.setCollider("rectangle", 0, 20, 30, 1);
        //make the water fall
        //water.position.y = water.position.y + 5;
        water.setSpeed(8, 90);
        if (water.position.y > 512) {
            water.position.y = 0;
            water.position.x = random(0, 512);
            water.setSpeed(random(1, 30), 90);
        }
        water.setCollider("rectangle", 0, 100, 60, 1);
        //make the cigarette fall
        cigarette.position.y = cigarette.position.y + 10;
        if (cigarette.position.y > 512) {
            cigarette.position.y = 0;
            cigarette.position.x = random(0, 512);
        }
        cigarette.setCollider("rectangle", 0, 0, 40, 1);
    }
    //level 4
    if (level == 4) { //make the burger fall
        hamburger.position.y = hamburger.position.y + 8;
        if (hamburger.position.y > 512) {
            hamburger.position.y = 0;
            hamburger.position.x = random(0, 512);
        }
        hamburger.setCollider("rectangle", 0, 20, 30, 1);
        //make the water fall
        //water.position.y = water.position.y + 5;
        water.setSpeed(9, 90);
        if (water.position.y > 512) {
            water.position.y = 0;
            water.position.x = random(0, 512);
            water.setSpeed(random(1, 30), 90);
        }
        water.setCollider("rectangle", 0, 100, 60, 1);
        //make the cigarette fall
        cigarette.position.y = cigarette.position.y + 14;
        if (cigarette.position.y > 512) {
            cigarette.position.y = 0;
            cigarette.position.x = random(0, 512);
        }
        cigarette.setCollider("rectangle", 0, 0, 40, 1);
    }
    
    //level 5
    if (level == 5) { //make the burger fall
        hamburger.position.y = hamburger.position.y + 10;
        if (hamburger.position.y > 512) {
            hamburger.position.y = 0;
            hamburger.position.x = random(0, 512);
        }
        hamburger.setCollider("rectangle", 0, 20, 30, 1);
        //make the water fall
        //water.position.y = water.position.y + 5;
        water.setSpeed(14, 90);
        if (water.position.y > 512) {
            water.position.y = 0;
            water.position.x = random(0, 512);
            water.setSpeed(random(1, 30), 90);
        }
        water.setCollider("rectangle", 0, 100, 60, 1);
        //make the cigarette fall
        cigarette.position.y = cigarette.position.y + 18;
        if (cigarette.position.y > 512) {
            cigarette.position.y = 0;
            cigarette.position.x = random(0, 512);
        }
        cigarette.setCollider("rectangle", 0, 0, 40, 1);
    }
    
    
    //lose a life
    if (hamburger.overlap(character)) {
        life = life - 1;
    }
    if (water.overlap(character)) {
        life = life - 1;
    }
    if (cigarette.overlap(character)) {
        life = life - 1;
    }

    //gain points
        if (hamburger.position > character.position) {
            score = score + 1;
        }
        if (hamburger.position < character.position) {
            score = score + 1;
        }
        if (water.position > character.positon){
            score = score + 1;
        }
        if (water.position < character.position){
            score = score + 1;
        }
        if (cigarette.position > character.position){
            score = score + 1;
        }
        if (cigarette.position < character.position){
           score = score + 1;
       }
        if (character.position.x > 530){
            life = -1;
        }
        
        text (score, 40, 100);
        text ("score:", 5, 100);
    //level
    text(level, 40, 70);
    textSize(12);
    text("level:", 5, 70);
    
    //level 6
    if(level == 6){
        background (255);
        hamburger.visible = false;
        water.visible = false;
        cigarette.visible = false;
        text("you win, width/2, height/2");
    }
    //lose the game
    if (life <= 0){ 
        character.visible = false,
        hamburger.visible = false,
        water.visible = false,
        cigarette.visible = false,
        image(bismillahlose, 0, 0, 512, 512);
    }
    }
    drawSprites();
}
function mouseClicked(){//starts the game
    if (level == 0){
        level = 1;
    } 
}

