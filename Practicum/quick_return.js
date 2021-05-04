
let a, b, c,p,t1,t2,coup_len,coup,coup_ang;
let theta,alpha;

let in1,in2,in3,in4,om,l1,l2,l3,l4,omega;

function setup() {

  in1=createSlider(50,200,200);
  in2=createSlider(50,200,150);
  in3=createSlider(50,400,370);
  in4=createSlider(50,200,200);
  om=createSlider(0,5,1);
 
  l1=in1.value();l2=in2.value();l3=in3.value();l4=in4.value();omega=om.value();
  var cnv = createCanvas(650, 500);

  cnv.parent('quick-return');
  //coup=createVector(0,0);
  theta = PI;
  in1.position(cnv.position().x, cnv.position().y-50);
  in2.position(cnv.position().x+130, cnv.position().y-50);
  in3.position(cnv.position().x+260, cnv.position().y-50);
  in4.position(cnv.position().x+390, cnv.position().y-50);
  om.position(cnv.position().x+520, cnv.position().y-50);
}

function draw() {
 
  l1=in1.value();l2=in2.value();l3=in3.value();l4=in4.value();omega=om.value();
  var g=atan(l2/l1);
  
  background(220);
  if(l3>=(l1+l2) )
  {a= createVector(300, 270);
  b = createVector(300,270+l1);
  c = createVector(300+l2,270);
  //fixed link
  strokeWeight(0.2);
  fill(220)
  circle(a.x, a.y, 2*l2);
  strokeWeight(2);
  fill(0)
   strokeWeight(2);
  stroke(127,0,0);
  line(b.x, b.y, a.x, a.y);
  circle(a.x, a.y, 5);
  
  //crank motion (l2)
  stroke(0,127,0);
  let b1 = p5.Vector.sub(a, c);
  b1.rotate(theta);
  b1.add(a);
  line(a.x, a.y, b1.x, b1.y);
   circle(b1.x, b1.y, 7);
  
  
   //defining lengths for other vectors
    var x=-l2*cos(theta)
    var h=-abs((l2*sin(theta))+l1)
    alpha=atan(h/x)
    if(alpha>0) {p=1;}
    else {p=-1;}
   
  //coupler motion (l3)
    stroke(0,0,127);
    // line(b1.x, b1.y,b.x,b.y);
  var X=-p*l3*cos(alpha)
  var H=-abs((l3)*sin(alpha))
  var r=createVector(X,H);
    r.add(b);
  line(r.x,r.y, b.x, b.y);
   circle(r.x, r.y, 5);
    
  
  //l4 motion
  stroke(0,0,0);
  var beta=asin((l3+20+H)/l4);
  var o=createVector(l4*cos(beta),-abs(l4*sin(beta)));
  o.add(r);
  line(r.x,r.y, o.x, o.y);
   circle(o.x, o.y, 7);
  
   strokeWeight(0.2);
   textSize(20);
  line(50,o.y,600,o.y)
  text('L1 (Fixed link):'+l1,20,40);
  text('L2 (Crank):'+l2,20,60);
  text('L3 (Coupler):'+l3,20,80);
  text('L4 (Output):'+l4,20,100);
  text('Omega (Ang vel to L1):'+omega,20,120);
 
//   //angle increment for rotation
  theta += radians(omega);
  }
  else{
    textSize(70);
      text('Not Possible',150,300);
     }
  
}