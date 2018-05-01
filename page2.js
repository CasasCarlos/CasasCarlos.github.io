var shape = []

 var randX 
 var randY
 
 function random(min,max) {
 return Math.floor(Math.random()*(max-min+1)+min)
}


function setup() {
    createCanvas(700, 400);
    frameRate(1)
    noLoop()
}

  
function draw(){
 background("#C62E10"); 
 randX = random(50, 650) 
 randY = random(50, 350)
 
 shape.push({x: randX, y: randY})
 
 for(var i = 0; i < shape.length; i++){
    fill("#670077")
    rect(shape[i].x, shape[i].y, 50, 50)
 }
}

function mousePressed(){
 for(var j = 0; j < shape.length; j++){
    if(mouseX <= shape[j].x + 50 && mouseY <= shape[j].y + 50 && mouseX >= shape[j].x - 50 && mouseY >= shape[j].y - 50){
     shape.splice(shape[j], 1)
    }
 }
}
