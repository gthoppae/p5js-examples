function setup() {
  createCanvas(400, 400);

}

function draw() {
  const boxWidth = 50;
  const boxHeight = 50;
  //red box
  fill(255,0,0);
  stroke(0,0,0);
  strokeWeight(2);
  rect( width/2, 0, boxWidth, boxHeight );
  
  //blue box
  fill(0,0,255);
  stroke(0,0,0);
  strokeWeight(2);
  rect( 0, width/2, boxWidth, boxHeight );
 
  //line
  line(boxWidth, (width/2)+(boxWidth/2), (height/2), (boxHeight/4));

}
