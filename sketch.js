var character;
var mosque;

var hamburger, pos_hamburger;
var water, pos_water;
var cigarette, pos_cigarette;

var x, y;

function preload() {
    mosque = loadImage("assets/mosque.png");
    character = loadAnimation("assets/l0_muslimgirl_1.png", "assets/l0_muslimgirl_2.png", "assets/l0_muslimgirl_1.png");
    character.frameDelay = 20;
    
    var hamburgerimg = loadImage("assets/hamburger_0.png");
    var waterimg = loadImage("assets/water.png");
    var cigaretteimg = loadImage("assets/cigarette.png");
    hamburger = createSprite(random(0, 600), 0);
  hamburger.addImage(hamburgerimg);
    
    water = createSprite(20,  20);
  water.addImage(waterimg);
    
    cigarette = createSprite(0,0);
    cigarette.addImage(cigaretteimg);

}


function setup() {
    createCanvas(mosque.width * 2, mosque.height * 2);
     
    
}

function draw() {
    image(mosque, 0, 0, mosque.width * 2, mosque.height * 2);
    animation(character, mouseX, 325);
    //make the burger fall
    hamburger.position.y = hamburger.position.y + 5;
     if (hamburger.position.y > 512) {
        hamburger.position.y = 0;
     hamburger.position.x = random(0, 512);
     }
    //make the water fall
    water.position.y = water.position.y + (random(1, 5));
        if (water.position.y > 512) {
            water.position.y = 0;
            water.position.x = random(0, 512);
        }
    //make the cigarette fall
    cigarette.position.y = cigarette.position.y + (random(1, 5));
        if (cigarette.position.y > 512) {
            cigarette.position.y = 0;
            cigarette.position.x = random(0, 512);
        }
    drawSprites();
    
}
