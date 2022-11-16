var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["ed778588-871d-46fb-b15c-9af134be73ec","bfe258b9-9ba8-4ca0-828a-53100aa892f7","89511920-fa85-40ac-a635-0e63588d328a","85229ed4-98bb-4114-9705-07d86c6955bc","be3f2760-52dc-45d3-912b-35efc1fbf8ad","ed5f7d0a-04dc-4456-a922-646893353d70","d179c1fa-0bc9-4f68-9744-291f1e8a367a","1ff844de-5a74-4519-9b22-22903ce5342d","8e5675cd-4aed-4d82-9f8d-3080bc9e81bf"],"propsByKey":{"ed778588-871d-46fb-b15c-9af134be73ec":{"name":"h","sourceUrl":null,"frameSize":{"x":50,"y":55},"frameCount":1,"looping":true,"frameDelay":12,"version":"Uy8nQgJOXrsTNFSJMRcN_CAcEJBRW6R4","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":50,"y":55},"rootRelativePath":"assets/ed778588-871d-46fb-b15c-9af134be73ec.png"},"bfe258b9-9ba8-4ca0-828a-53100aa892f7":{"name":"t","sourceUrl":null,"frameSize":{"x":40,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"xM3iCaqRtgDerqh0DRzS2Ade0PVODo4_","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":40,"y":30},"rootRelativePath":"assets/bfe258b9-9ba8-4ca0-828a-53100aa892f7.png"},"89511920-fa85-40ac-a635-0e63588d328a":{"name":"car_blue_1","sourceUrl":null,"frameSize":{"x":25,"y":55},"frameCount":1,"looping":true,"frameDelay":12,"version":"f.Va36twrR5LCMPuX0e5hRdPbRYAhCzN","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":55},"rootRelativePath":"assets/89511920-fa85-40ac-a635-0e63588d328a.png"},"85229ed4-98bb-4114-9705-07d86c6955bc":{"name":"d","sourceUrl":null,"frameSize":{"x":400,"y":5},"frameCount":1,"looping":true,"frameDelay":12,"version":"I3rz.4RsMhHbRgufeUxmQ7OGYnGl2NYb","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":5},"rootRelativePath":"assets/85229ed4-98bb-4114-9705-07d86c6955bc.png"},"be3f2760-52dc-45d3-912b-35efc1fbf8ad":{"name":"ro","sourceUrl":null,"frameSize":{"x":70,"y":54},"frameCount":1,"looping":true,"frameDelay":12,"version":"y55_3NXqCr4c9Yik3Y1aF5wnxr1J7Kbg","loadedFromSource":true,"saved":true,"sourceSize":{"x":70,"y":54},"rootRelativePath":"assets/be3f2760-52dc-45d3-912b-35efc1fbf8ad.png"},"ed5f7d0a-04dc-4456-a922-646893353d70":{"name":"pi","sourceUrl":null,"frameSize":{"x":25,"y":55},"frameCount":1,"looping":true,"frameDelay":12,"version":"1FOSvwwY8brOcJsiNVk_KzL6QZet8Iud","loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":55},"rootRelativePath":"assets/ed5f7d0a-04dc-4456-a922-646893353d70.png"},"d179c1fa-0bc9-4f68-9744-291f1e8a367a":{"name":"est","sourceUrl":"assets/v3/animations/2qAKp6luyUfuCWUBPV_ooBDLRknb_CIuCxzQzAI_Cn0/d179c1fa-0bc9-4f68-9744-291f1e8a367a.png","frameSize":{"x":25,"y":55},"frameCount":1,"looping":true,"frameDelay":4,"version":"CwQGNNjzLtsSE8Ki1R5YlG1xppm302DH","loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":55},"rootRelativePath":"assets/v3/animations/2qAKp6luyUfuCWUBPV_ooBDLRknb_CIuCxzQzAI_Cn0/d179c1fa-0bc9-4f68-9744-291f1e8a367a.png"},"1ff844de-5a74-4519-9b22-22903ce5342d":{"name":"van","sourceUrl":"assets/v3/animations/2qAKp6luyUfuCWUBPV_ooBDLRknb_CIuCxzQzAI_Cn0/1ff844de-5a74-4519-9b22-22903ce5342d.png","frameSize":{"x":25,"y":55},"frameCount":1,"looping":true,"frameDelay":4,"version":"DW207eX5JklrKujpA7Mssqud8YxsQ_BI","loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":55},"rootRelativePath":"assets/v3/animations/2qAKp6luyUfuCWUBPV_ooBDLRknb_CIuCxzQzAI_Cn0/1ff844de-5a74-4519-9b22-22903ce5342d.png"},"8e5675cd-4aed-4d82-9f8d-3080bc9e81bf":{"name":"figue","sourceUrl":"assets/v3/animations/2qAKp6luyUfuCWUBPV_ooBDLRknb_CIuCxzQzAI_Cn0/8e5675cd-4aed-4d82-9f8d-3080bc9e81bf.png","frameSize":{"x":25,"y":55},"frameCount":1,"looping":true,"frameDelay":4,"version":"e9R6tSDAuLUuf0VKUaqycD4gp3UFPU4x","loadedFromSource":true,"saved":true,"sourceSize":{"x":25,"y":55},"rootRelativePath":"assets/v3/animations/2qAKp6luyUfuCWUBPV_ooBDLRknb_CIuCxzQzAI_Cn0/8e5675cd-4aed-4d82-9f8d-3080bc9e81bf.png"}}};
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


var hero = createSprite(375,200,25,25); 
hero.setAnimation("est");
var enemy1=createSprite(300,300,20,20);
 enemy1.velocityY = -5;
 enemy1.setAnimation("pi");
var enemy2=createSprite(200,100,20,20);
enemy2.velocityY = 5;
enemy2.setAnimation("van");
var enemy3=createSprite(100,300,20,20);
enemy3.velocityY = -5;
enemy3.setAnimation("figue");
var ronaldo = createSprite(30,200,20,20);
ronaldo.setAnimation("ro");
var deadend1= createSprite(200,350,400,5);
deadend1.setAnimation("d");
var deadend2= createSprite(200,50,400,5);
deadend2.setAnimation("d");


function draw() {
  
  background("lightblue");
  
  


  
  text("Lives: " + life,200,25);
 fill("white");
  
  

 
if(keyDown("right"))
{
  ronaldo.x=ronaldo.x +5;
}  
if(keyDown("left"))
{
  ronaldo.x=ronaldo.x -5;
}  
  
  if (ronaldo.isTouching(enemy1)){
    ronaldo.x=30;
    ronaldo.y=200;
    life=life+1;
   playSound("assets/category_explosion/8bit_explosion.mp3");
   
  }
  if (ronaldo.isTouching(enemy2)){
    ronaldo.x=30;
    ronaldo.y=200;
    life=life+1;
    playSound("assets/category_explosion/8bit_explosion.mp3");
  }
  if (ronaldo.isTouching(enemy3)){
    ronaldo.x=30;
    ronaldo.y=200;
    life=life+1;
    playSound("assets/category_explosion/8bit_explosion.mp3");
  
  }
  
  if (life==5 ||ronaldo.isTouching(hero)){
    ronaldo.y=200;
    ronaldo.x=30;
    enemy1.velocityY=0;
    enemy1.velocityX=0;
    enemy2.velocityY=0;
    enemy2.velocityX=0;
    enemy3.velocityY=0;
    enemy3.velocityX=0;
    text("game over!",200,200);
    
  
  }
  createEdgeSprites();
  enemy1.bounceOff(deadend1);
  enemy1.bounceOff(deadend2);
   enemy2.bounceOff(deadend1);
    enemy2.bounceOff(deadend2);
   enemy3.bounceOff(deadend1);
   enemy3.bounceOff(deadend2);
  
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
