var mdotsdecors = document.querySelectorAll(".mdotsdecors");
var d2box = document.querySelector(".d2box");
mdotsdecors[0].style.display = "none";

var height=5,width=8,len=40;
var boxArr=[],boxCnt=0;
var aniA1Arr=[],aniA1Cnt=0;
var aniA2Arr=[];
var t1="",t2=0,t3=0,t4=0;
var a1=0;
createbox();
createArr();
function createbox(){
  var a,b;
  d2box.style.height = height*len + "px";
  d2box.style.width = width*len + "px";
  for(a=0;a<height;a++){
    for(b=0;b<width;b++){
      boxArr[boxCnt] = document.createElement('div');
      boxArr[boxCnt].innerHTML = boxCnt;
      boxArr[boxCnt].style.height = len + "px";
      boxArr[boxCnt].style.width = len + "px";
      boxArr[boxCnt].style.border = "1px solid #000";
      boxArr[boxCnt].style.position = "absolute";
      boxArr[boxCnt].style.display = "flex";
      boxArr[boxCnt].style.justifyContent = "center";
      boxArr[boxCnt].style.alignItems = "center";
      boxArr[boxCnt].style.top = len*a-a + "px";
      boxArr[boxCnt].style.left = len*b-b + "px";
      d2box.appendChild(boxArr[boxCnt]);
      boxCnt++;
    }
  }
}
function createArr(){
  var a,b,c,d=0,e,f=[],g=[];
  for(a=0;a<width+height-1;a++){
    c=a;t1="";e=a;
    if(c>=height&&c<width){
      d++;
      c=c-d;
    }
    if(c>=width){
      d+=2;
      c=c-(d*1);
      
    }
    // console.log(a,c+"="+c+"-"+d,c);
    // if(c>=height){
    //   d++;
    //   c=c-(d*2);
    // }
    
    f=[];
    for(b=0;b<c+1;b++){
      t1=t1+"0";
      f[b] = [e,b];
      e--;
    }
    aniA2Arr[a] = f;
    console.log(a,t1.length,t1);
  }
}
console.log(aniA2Arr);
animateArr();
function animateArr(){
  var a,b,c;
  if(a1<aniA2Arr.length){
    setTimeout(()=>{
      for(a=0;a<aniA2Arr[a1].length;a++){
        // console.log(a1,aniA2Arr[a1][a][0],aniA2Arr[a1][a][1],aniA2Arr[a1][a][0]+aniA2Arr[a1][a][1]*width);
        // boxArr[aniA2Arr[a1][a][0]+aniA2Arr[a1][a][1]*width].style.background = "#0ff";
        // boxArr[aniA2Arr[a1][a][0]+aniA2Arr[a1][a][1]*width].innerHTML = a1;
        
      }
      a1++;
      animateArr();
    },40);
  }
}

boxArr[0+0*8].style.background = "#ff0";

boxArr[1+0*8].style.background = "#f0f";
boxArr[0+1*8].style.background = "#f0f";

boxArr[2+0*8].style.background = "#0ff";
boxArr[1+1*8].style.background = "#0ff";
boxArr[0+2*8].style.background = "#0ff";

boxArr[3+0*8].style.background = "#f00";
boxArr[2+1*8].style.background = "#f00";
boxArr[1+2*8].style.background = "#f00";
boxArr[0+3*8].style.background = "#f00";

boxArr[4+0*8].style.background = "#00f";
boxArr[3+1*8].style.background = "#00f";
boxArr[2+2*8].style.background = "#00f";
boxArr[1+3*8].style.background = "#00f";
boxArr[0+4*8].style.background = "#00f";

boxArr[5+0*8].style.background = "#ff0";
boxArr[4+1*8].style.background = "#ff0";
boxArr[3+2*8].style.background = "#ff0";
boxArr[2+3*8].style.background = "#ff0";
boxArr[1+4*8].style.background = "#ff0";

boxArr[6+0*8].style.background = "#f0f";
boxArr[5+1*8].style.background = "#f0f";
boxArr[4+2*8].style.background = "#f0f";
boxArr[3+3*8].style.background = "#f0f";
boxArr[2+4*8].style.background = "#f0f";

boxArr[7+0*8].style.background = "#0ff";
boxArr[6+1*8].style.background = "#0ff";
boxArr[5+2*8].style.background = "#0ff";
boxArr[4+3*8].style.background = "#0ff";
boxArr[3+4*8].style.background = "#0ff";

boxArr[7+1*8].style.background = "#000";
boxArr[6+2*8].style.background = "#000";
boxArr[5+3*8].style.background = "#000";
boxArr[4+4*8].style.background = "#000";

boxArr[7+2*8].style.background = "#555";
boxArr[6+3*8].style.background = "#555";
boxArr[5+4*8].style.background = "#555";

boxArr[7+3*8].style.background = "#0ff";
boxArr[6+4*8].style.background = "#0ff";

boxArr[7+4*8].style.background = "#f00";
/*
var inrgmblock = document.querySelector(".inrgmblock");
var inrgmblock = document.querySelectorAll(".inrgmblock");
function boxgenerator(){
  var lenh=100,lenw=100,lent=0,lenl=100;
  boxx1[widthx1] = document.createElement('div');
  boxx1[widthx1].innerHTML = "CAT";
  boxx1[widthx1].style.height = lenh + "px";
  boxx1[widthx1].style.width = lenw + "px";
  boxx1[widthx1].style.border = "1px solid #000";
  boxx1[widthx1].style.position = "absolute";
  boxx1[widthx1].style.display = "flex";
  boxx1[widthx1].style.justifyContent = "center";
  boxx1[widthx1].style.alignItems = "center";
  boxx1[widthx1].style.top = lent + "px";
  boxx1[widthx1].style.left = lenl + "px";
  boxgenerator.appendChild(boxx1[widthx1]);
}
function boxgenerator(){
  boxx1[widthx1] = document.createElement('div');
  boxx1[widthx1].innerHTML = "CAT";
  boxx1[widthx1].style.height = lenh + "px";
  boxx1[widthx1].style.width = lenw + "px";
  boxx1[widthx1].style.border = "1px solid #000";
  boxx1[widthx1].style.position = "absolute";
  boxx1[widthx1].style.display = "flex";
  boxx1[widthx1].style.justifyContent = "center";
  boxx1[widthx1].style.alignItems = "center";
  boxx1[widthx1].style.top = lent + "px";
  boxx1[widthx1].style.left = lenl + "px";
  boxx1[widthx1].setAttribute('class', 'boxbtn');
  boxgenerator.appendChild(boxx1[widthx1]);
}
document.addEventListener('keydown',function(event){
  W=87,A=65,S=83,D=68,K=75,L=76,SPACE=32,ENTER=13
  if(event.keyCode == 87){//W
  }
  else if(event.keyCode == 65){//A
  }
});
Math.random() * (max - min) + min;
b = Math.floor(Math.random()*(8-2)+2);
src="js/script.js"
*/