
let a, b, c,p;
let theta;

let in1,in2,in3,in4,om,l1,l2,l3,l4,omega;

function setup() {

  in1=createSlider(0,100,200);
  in2=createSlider(50,200,150);
  in3=createSlider(50,300,300);
  in4=createSlider(50,500,500);
  om=createSlider(0,5,1);
 
  l1=in1.value();l2=in2.value();l3=in3.value();l4=in4.value();omega=om.value();
  // var cnv = 
      createCanvas(650, 500);

  // cnv.parent('cam-follower');
  //coup=createVector(0,0);
  theta = 3*PI/2;
  // in1.position(cnv.position().x, cnv.position().y+350);
  // in2.position(cnv.position().x+200, cnv.position().y+350);
  // in3.position(cnv.position().x+400, cnv.position().y+350);
  // in4.position(cnv.position().x+600, cnv.position().y+350);
  // om.position(cnv.position().x+800, cnv.position().y+350);
}

function draw() {
 
  l1=in1.value();l2=in2.value();l3=in3.value();l4=in4.value();omega=om.value();
  k=sqrt(sq(l3)+sq(l1)-2*l1*l3*cos(PI-theta));
  var alpha=acos((sq(l3)+sq(k)-sq(l1))/(2*l3*k));
  
if(l2>l1 && l4>=sqrt(sq(k)+sq(l2)) && l3>=l1+l2)
   {  
  background(220);
 a= createVector(300, 270);
  c = createVector(300+l1,270);
  //fixed link
   strokeWeight(2);
  stroke(0,127,0);
  fill(150)
  circle(a.x, a.y, 5);
 
  stroke(0,0,0);
  let b1 = p5.Vector.sub(a, c);
  b1.rotate(theta);
  b1.add(a);
  
   circle(b1.x, b1.y, 2*l2);
  circle(b1.x, b1.y, 5);
  
  fill(150)
  circle(a.x, a.y, 5);
   stroke(0,0,127); 
  var b=createVector(300+l3, 270);
    // b.add(a);
  line(b.x,b.y,a.x,a.y);
  
  //defining variables
  
  if(sin(theta)<0) {alpha=-1*alpha;}
  var beta=asin(l2/k);
  print(beta, alpha)
   if(beta>0) {p=1;}
    else {p=-1;}
  // var l=l2/tan(beta);
   stroke(127,0,0);
  var t=createVector(-l4*p*cos(alpha+beta),-l4*sin(alpha+beta));
  t.add(b);
  line(b.x,b.y,t.x,t.y);
  strokeWeight(1);
  stroke(0,127,0); 
  line(a.x, a.y, b1.x, b1.y);
  
  //  strokeWeight(0.2);
  // line(0,o.y,650,o.y)
  fill(0,0,0);
  text('L1 (Green line):'+l1,20,40);
  text('L2 (Radius of Cam):'+l2,20,60);
  text('L3 (Fixed link):'+l3,20,20);
  text('L4 (Follower):'+l4,20,80);
  text('Omega (Ang vel to L1):'+omega,20,100);
  textSize(20);
  //angle increment for rotation
  theta += radians(omega);}
  
  else{
    textSize(70);
      text('Not Possible',150,300);}
  
}