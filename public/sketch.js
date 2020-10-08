var socket;
function setup() { 
    createCanvas(400, 400);
    background(0);
    socket=io.connect('http://localhost:3000');
    socket.on('mouse', newDrawing);
  } 
  function newDrawing(data) {
    noStroke();
    fill(255,0,100);
    ellipse(data.x,data.y,36,36);  
  }
  
  function draw() { 

    //line(mouseX,mouseY, pmouseX, pmouseY);
  }
  
  function mouseDragged(){
  console.log('Sending:'+mouseX+','+mouseY);
  noStroke();
  fill(255);
  ellipse(mouseX,mouseY,36,36);
  var data= {
    x:mouseX, 
    y:mouseY
  } 
  socket.emit('mouse',data);
    function mousePressed(){
  //clear();
  }
  }