
let b,x,c,p,t1,t2,coup_len,coup,coup_ang;
let theta,alpha;

let in1,in2,om,l1,l2,omega;

function setup() {

  in1=createSlider(50,200,150);
  in2=createSlider(50,200,200);
  om=createSlider(0,10,1);
 
  l1=in1.value();l2=in2.value();omega=om.value();
  var cnv = createCanvas(l1+l2+150+l2, l1+l1+150);

  cnv.parent('slider-crank');

  theta = 0;
  in1.position(cnv.position().x, cnv.position().y-50);
  in2.position(cnv.position().x+280, cnv.position().y-50);
  om.position(cnv.position().x+560, cnv.position().y-50);
}

function draw() {
  l1=in1.value();l2=in2.value();omega=om.value();
   //defining lengths for other vectors
  var A=1,B=2*cos(theta)*l1,C=sq(l1)-sq(l2);
  
  strokeWeight(2);
  //condition
  if((sq(B)-4*A*C)>=0){
  background(220);
  b = createVector(170+l1,250);
  c = createVector(170,250);
  //fixed link
  stroke(127,0,0);
  circle(c.x, c.y, 5);
  strokeWeight(0.2);
  fill(220)
  circle(c.x, c.y, 2*l1);
  strokeWeight(2);
  fill(0)
  //crank motion (l2)
  stroke(0,127,0);
  let b1 = p5.Vector.sub(b, c);
  b1.rotate(theta);
  b1.add(c);
  line(c.x, c.y, b1.x, b1.y);
  
    //defining x
    x=(B+sqrt(sq(B)-4*A*C))/(2*A);
  
  //coupler motion (l3)
  stroke(0,0,127);
    var d=c;
  coup=d.add(x,0);
 
  let c1 = p5.Vector.sub(coup,c);
  line(coup.x, coup.y, b1.x, b1.y);
    
 circle(coup.x, coup.y, 5);
 strokeWeight(0.2);
   textSize(20);
  line(100,b.y,600,b.y)

    
  //l4 motion
  stroke(0,0,0);
  text('L1 (Crank):'+l1,20,20);
  text('L2 :'+l2,20,40);
    text('X (Horizontal dist):'+x,20,60);
  text('Omega (Ang vel to L1):'+omega,20,80);
  textSize(20);
  //angle increment for rotation
  theta += radians(omega);
  }
  else
    {
      textSize(80);
      text('Not Possible',100,175);
  
    }
}