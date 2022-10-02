var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var carro1, carro2, carro3,carro4, carro5, carro6,carro7, carro8, borde3,bloque1,bloque2;
var borde1, borde2,carro9,carro0,carro11,carro12,carro13,carro14;
var Samuel;
var door1;
var borde4;
var borde5,borde6;
var rects;

    
  borde1 = createSprite(190,40,420,3);
  borde1.shapeColor = "pink";
  borde2 = createSprite(170,180,340,3);
  borde2.shapeColor = "pink";
  borde3 = createSprite(230,225,340,3);
  borde3.shapeColor = "pink";
   borde6 = createSprite(200,397,400,3);
  borde6.shapeColor = "pink";
  
  Samuel = createSprite(20,120,13,13);
  Samuel.shapeColor = "green";
  
 carro9 = createSprite(70,240,10,10);
  carro9.shapeColor = "red";
  carro0 = createSprite(185,240,10,10);
  carro0.shapeColor = "red";
  carro11 = createSprite(125,370,10,10);
  carro11.shapeColor = "red";
  carro12 = createSprite(230,370,10,10);
  carro12.shapeColor = "red";
  carro13 = createSprite(290,240,10,10);
  carro13.shapeColor = "red";
  carro14 = createSprite(330,370,10,10);
  carro14.shapeColor = "red";
  rects = createSprite(370,370,50,50);
  rects.shapeColor=("purple");
   carro9.velocityY = 7;
  carro0.velocityY = 7;
  carro11.velocityY = -7;
  carro12.velocityY = -7;
  carro13.velocityY = 7;
  carro14.velocityY = -7;
  
 
    
 
  
  
  carro1 = createSprite(70,45,10,10);
  carro1.shapeColor = "red";
  carro2 = createSprite(185,45,10,10);
  carro2.shapeColor = "red";
  carro3 = createSprite(125,175,10,10);
  carro3.shapeColor = "red";
  carro4 = createSprite(230,175,10,10);
  carro4.shapeColor = "red";
  carro5 = createSprite(290,45,10,10);
  carro5.shapeColor = "red";
  carro6 = createSprite(330,175,10,10);
  carro6.shapeColor = "red";
  carro7 = createSprite(10,190,10,10);
  carro7.shapeColor = "red";
  carro8 = createSprite(390,210,10,10);
  carro8.shapeColor = "red";
  bloque1 = createSprite(3,180,5,900);
  bloque1.shapeColor = "pink";
  bloque2 = createSprite(397,180,5,900);
  bloque2.shapeColor = "pink";
  borde4 = createSprite(60,290,5,140);
  borde4.shapeColor = "pink";
  borde5 = createSprite(230,225,340,3);
  borde5.shapeColor = "pink";
   door1 = createSprite(60,380,5,50);
  door1.shapeColor = "brown";
  
  carro1.velocityY = 7;
  carro2.velocityY = 7;
  carro3.velocityY = -7;
  carro4.velocityY = -7;
  carro5.velocityY = 7;
  carro6.velocityY = -7;
  carro7.velocityX = 7;
  carro8.velocityX = -7;
 
function draw() {
  background("maroon");
  stroke("orange");
  text("Lives: " + life,200,20);
  textSize(15);
  noStroke();
  fill("lightyellow");
  rect(0,40,52,140);
  fill("purple");
  rect(345,350,50,50);
   
  carro1.bounceOff(borde1);
  carro1.bounceOff(borde2);
  carro2.bounceOff(borde1);
  carro2.bounceOff(borde2);
  carro3.bounceOff(borde1);
  carro3.bounceOff(borde2);
  carro4.bounceOff(borde1);
  carro4.bounceOff(borde2);
  carro5.bounceOff(borde1);
  carro5.bounceOff(borde2);
  carro6.bounceOff(borde1);
  carro6.bounceOff(borde2);
  carro7.bounceOff(bloque1);
  carro7.bounceOff(bloque2);
  carro8.bounceOff(bloque1);
  carro8.bounceOff(bloque2);
   Samuel.bounceOff(borde1);
  Samuel.bounceOff(borde2);
  Samuel.bounceOff(borde3);
  Samuel.bounceOff(bloque1);
  Samuel.bounceOff(bloque2);
  Samuel.bounceOff(borde3);
  carro9.bounceOff(borde6);
  carro9.bounceOff(borde5);
  carro0.bounceOff(borde6);
  carro0.bounceOff(borde5);
  carro11.bounceOff(borde6);
  carro11.bounceOff(borde5);
  carro12.bounceOff(borde6);
  carro12.bounceOff(borde5);
  carro13.bounceOff(borde6);
  carro13.bounceOff(borde5);
  carro14.bounceOff(borde6);
  carro14.bounceOff(borde5);
  
 
  if(keyDown("right")){
    Samuel.x = Samuel.x +5;
  }
  if(keyDown("left")){
    Samuel.x = Samuel.x -5;
  }
   if(keyDown("up")){
    Samuel.y = Samuel.y -5;
  }
   if(keyDown("down")){
    Samuel.y = Samuel.y +5;
  }
  if (Samuel.isTouching(rects)){
    stroke("white");
  text("YOU WON ",200,200);
  textSize(150);
  noStroke();
  }
  
  if(
     Samuel.isTouching(carro1)||
     Samuel.isTouching(carro2)||
     Samuel.isTouching(carro3)||
     Samuel.isTouching(carro4)||
     Samuel.isTouching(carro5)||
     Samuel.isTouching(carro6)||
     Samuel.isTouching(carro7)||
     Samuel.isTouching(carro8)||
     Samuel.isTouching(carro9)||
     Samuel.isTouching(carro0)||
     Samuel.isTouching(carro11)||
     Samuel.isTouching(carro12)||
     Samuel.isTouching(carro13)||
     Samuel.isTouching(carro14))
    
        
  {
     Samuel.x = 20;
     Samuel.y = 120;
     life = life + 1;
  }
  
 drawSprites();
}






// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
