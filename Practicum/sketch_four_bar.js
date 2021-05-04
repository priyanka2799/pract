
let a, b, c,p,t1,t2,coup_len,coup,coup_ang;
let theta,alpha;

let in1,in2,in3,in4,om,l1,l2,l3,l4,omega;

function setup() {

  in1=createSlider(50,400,300);
  in2=createSlider(50,400,300);
  in3=createSlider(50,400,300);
  in4=createSlider(50,400,300);
  om=createSlider(0,5,1);
 
  l1=in1.value();l2=in2.value();l3=in3.value();l4=in4.value();omega=om.value();
  var cnv = createCanvas(950, 650);

  cnv.parent('sketch-holder');
  //coup=createVector(0,0);
  theta = 0;
  in1.position(cnv.position().x, cnv.position().y+350);
  in2.position(cnv.position().x+200, cnv.position().y+350);
  in3.position(cnv.position().x+400, cnv.position().y+350);
  in4.position(cnv.position().x+600, cnv.position().y+350);
  om.position(cnv.position().x+800, cnv.position().y+350);
}

function draw() {
  l1=in1.value();l2=in2.value();l3=in3.value();l4=in4.value();omega=om.value();
  var m1=max(l1,l2);var m2=max(l3,l4);m1=max(m1,m2);
  var mi1=min(l1,l2);var mi2=min(l3,l4);mi1=min(mi1,mi2);
  if((m1+mi1)<=(l1+l2+l3+l4-m1-mi1)){
  background(220);
  strokeWeight(2.5);
  a= createVector(400+l1, 310);
  b = createVector(400+l2,310);
  c = createVector(400,310);
  //fixed link
  stroke(127,0,0);
  line(c.x, c.y, a.x, a.y);
  circle(c.x, c.y, 5);
  
  
  //crank motion (l2)
  stroke(0,127,0);
  let b1 = p5.Vector.sub(b, c);
  b1.rotate(theta);
  b1.add(c);
  line(c.x, c.y, b1.x, b1.y);
  circle(b1.x, b1.y, 5);
  
   //defining lengths for other vectors
  k=sqrt(sq(l1)+sq(l2)-2*l1*l2*cos(theta));
  t1=acos((sq(l3)+sq(k)-sq(l4))/(2*k*l3));
  t2=acos((sq(l2)+sq(k)-sq(l1))/(2*k*l2));
  coup_len=sqrt(sq(l2)+sq(l3)-2*l2*l3*cos(t1+t2));
  coup_ang=acos((sq(l1)+sq(coup_len)-sq(l4))/(2*coup_len*l1));
  if(sin(theta)>0) {p=1;}
    else {p=-1;}
    print(sin(theta), (coup_ang), t1,t2)
  
  //coupler motion (l3)
  stroke(0,0,127);
  coup=createVector(coup_len*cos(coup_ang),coup_len*p*sin(coup_ang));
 
  coup.add(c)
  line(coup.x, coup.y, b1.x, b1.y);
  circle(coup.x, coup.y, 5);
  
  //l4 motion
  stroke(0,0,0);
  line(coup.x, coup.y, a.x, a.y);
  strokeWeight(1);
  circle(a.x, a.y, 5);
  
  text('L1 (Fixed link):'+l1,20,20);
  text('L2 (Crank):'+l2,20,40);
  text('L3 (Coupler):'+l3,20,60);
  text('L4 (Output):'+l4,20,80);
  text('Omega (Ang vel to L1):'+omega,20,100);
  textSize(20);
  //angle increment for rotation
  theta += radians(omega);}
  else{
    strokeWeight(1);
    textSize(70);
      text('Does not obey',200,300);
      text('Grashofs Rule ',200,380);
  }
}