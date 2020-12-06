function bouncing(body1,body2){

    if (body1.x - body2.x < body2.width/2 + body1.width/2
      && body2.x - body1.x < body2.width/2 + body1.width/2) {
    body1.velocityX = body1.velocityX * (-1);
    body2.velocityX = body2.velocityX * (-1);
    
  }
  if (body1.y - body2.y < body2.height/2 + body1.height/2
    && body2.y - body1.y < body2.height/2 + body1.height/2){
    body1.velocityY = body1.velocityY * (-1);
    body2.velocityY = body2.velocityY * (-1);
  }
    
  }
  