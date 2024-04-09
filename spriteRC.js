function sprite () {
    this.width = 3780; // ****el ancho todal de mi spritesheet***
    this.height = 3976; // ***el alto de mi spritesheet ***
    this.x = 0;
    this.y = 0;
    this.radius = 540; //***esta medida es lo que mide el ancho de un sprite (un frame del spritesheet)***
    this.vx = 0;
    this.vy = 0;
    this.rotation = 0;
    this.scaleX = 1;
    this.scaleY = 1;
    //this.totalSpriteFrames = 7; //***este es el numero total de frames en mi spritesheet***
  }
    var frameIndexR = 0;
    var frameIndexC = 0;
    var tickCount = 0;
    var ticksPerFrame = 1.5; //funciona para controlar los fps, si es 4 son 15fps
    var numberOfFrames = 97; //*** El numero de frames que tiene mi spritesheet***
    var numberOfRows = 14;
    var numberOfCols = 7;

  update = function () {

    tickCount += 1;
  
    if (tickCount > ticksPerFrame) {
      tickCount = 0;
      frameIndexC += 1; 
    } /*if (frameIndex >= numberOfFrames){
      frameIndex = 0; //cuando llega al frame final de mi spritesheet se regresa al primero
    }*/

    switch (frameIndexR){
        case 0:
            if(frameIndexC >= numberOfCols){
                frameIndexR += 1;
                frameIndexC = 0;
            }
            break;
        case 1:
            if(frameIndexC >= numberOfCols){
                frameIndexR += 1;
                frameIndexC = 0;
            }
            break;
        case 2:
            if(frameIndexC >= numberOfCols){
                frameIndexR += 1;
                frameIndexC = 0;
            }
            break;
        case 3:
            if(frameIndexC >= numberOfCols){
                frameIndexR += 1;
                frameIndexC = 0;
            }
            break;
        case 4:
            if(frameIndexC >= numberOfCols){
                frameIndexR += 1;
                frameIndexC = 0;
            }
            break;
        case 5:
            if(frameIndexC >= numberOfCols){
                frameIndexR += 1;
                frameIndexC = 0;
            }
            break;
        case 6:
            if(frameIndexC >= numberOfCols){
                frameIndexR += 1;
                frameIndexC = 0;
            }
            break;
        case 7:
            if(frameIndexC >= numberOfCols){
                frameIndexR += 1;
                frameIndexC = 0;
            }
            break;
        case 8:
            if(frameIndexC >= numberOfCols){
                frameIndexR += 1;
                frameIndexC = 0;
            }
            break;
        case 9:
            if(frameIndexC >= numberOfCols){
                frameIndexR += 1;
                frameIndexC = 0;
              }
              break;
        case 10:
            if(frameIndexC >= numberOfCols){
                frameIndexR += 1;
                frameIndexC = 0;
              }
              break;
        case 11:
            if(frameIndexC >= numberOfCols){
                frameIndexR += 1;
                frameIndexC = 0;
              }
              break;
        case 12:
            if(frameIndexC >= numberOfCols){
                frameIndexR += 1;
                frameIndexC = 0;
            }
            break;
        case 13:
            if(frameIndexC >= numberOfCols){
                frameIndexR = 0;
                frameIndexC = 0;
            }
            break;
            default:
    }
}


  sprite.prototype.draw = function (context) {
    var elsaImage = new Image(); //***puedes cambiar el nombre de la variable ***
    elsaImage.src = "imgs/elsafrozen sprites.png"; // ***el nombre de tu imagen***
    update();
    context.save();
    context.translate(this.x, this.y);
    
    context.drawImage(elsaImage, 
        frameIndexC * this.width / numberOfCols,
        frameIndexR * this.height / numberOfRows,
        this.width / numberOfCols,
        this.height / numberOfRows,
        0,
        0,
        this.width / numberOfCols,
        this.height / numberOfRows);
     
    context.restore();
    
  };

  sprite.prototype.getBounds = function () {
    return {
      x: this.x - this.radius,
      y: this.y - this.radius,
      width: this.radius * 2,
      height: this.radius * 2
    };
  };

