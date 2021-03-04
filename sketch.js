
let showCircles = true
let base = 0.0005
let data = [{radius: 100, speed: base*10,  color: 'white',   show: false, penWidth: 1},
            {radius: 20, speed: base*10,   color: 'red',   show: true, penWidth: 1},            
            {radius: 19, speed: base*10,   color: 'blue',   show: true, penWidth: 1},
            {radius: 18, speed: base*10,   color: 'orange',   show: true, penWidth: 1},
            {radius: 17, speed: base*10,   color: 'grey',   show: true, penWidth: 1},            
            {radius: 16, speed: base*10,   color: 'green',   show: true, penWidth: 10},
            {radius: 150, speed:  base*10,   color: 'yellow',   show: true, penWidth: 1}
          ]

let sines = new Array(data.length); // an array to hold all the current angles
///let rad; // an initial radius value for the central sine




function setup() {
  createCanvas(800, 800);
  background(204); // clear the screen
  for (let i = 0; i<sines.length; i++) {
    sines[i] = 0; 
  }
}

function draw() {
  if (showCircles) {
    background(204);
     noFill()
     //noStroke()
  }
 
  
  push(); // start a transformation matrix
  translate(width / 2, height / 2); // move to middle of screen
  //fill('green')
  //ellipse(0, 0, 10, 10); // draw a little circle at centre of screen
  
     
  for (let i = 0; i < data.length; i++) {
    rotate(sines[i])
    push(); // go up one level
        if (data[i].show || showCircles) {
           noStroke() 
           translate(0, data[i].radius); // move to sine edge
           fill(data[i].color)
           var size = (showCircles) ? 10 : data[i].penWidth
           ellipse(0, 0, size, size); // draw a little circle
        }
    pop(); // go down one level
 
    if (showCircles) {
      stroke(0)
      ellipse(0, 0, data[i].radius*2, data[i].radius * 2); // if we're simulating, draw the sine
    }
    translate(0, data[i].radius); // move into position for next sine
    sines[i] = (sines[i] + data[i].speed )% TWO_PI; // update
  }

  pop(); // pop down final transformation

}
 
  

  
