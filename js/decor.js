var mdotsdecors = document.querySelectorAll(".mdotsdecors");
var scWidth=window.outerWidth,scHeight=window.outerHeight,len=40;
var scLenHeight=Math.floor(scHeight/len)+1,scLenWidth=Math.floor(scWidth/len)+1;
console.log(scWidth,scHeight,scLenHeight,scLenWidth);
var dotArr=[],dotCnt=0;
createDots();
function createDots(){
  var a,b,c,d;
  for(a=0;a<=scLenHeight;a++){
    for(b=0;b<scLenWidth;b++){
      dotArr[dotCnt] = document.createElement('div');
      dotArr[dotCnt].innerHTML = dotCnt;
      dotArr[dotCnt].style.height = len + "px";
      dotArr[dotCnt].style.width = len + "px";
      dotArr[dotCnt].style.border = "1px solid #000";
      dotArr[dotCnt].style.position = "absolute";
      dotArr[dotCnt].style.display = "flex";
      dotArr[dotCnt].style.justifyContent = "center";
      dotArr[dotCnt].style.alignItems = "center";
      // dotArr[dotCnt].style.boxShadow = "2px 2px 2px rgba(70,70,70,.7)";
      dotArr[dotCnt].style.top = (len*a)-(a) + "px";
      dotArr[dotCnt].style.left = (len*b)-(b) + "px";
      mdotsdecors[0].appendChild(dotArr[dotCnt]);
      dotCnt++;
    }
  }
}
var dotAnimateOneArr=[],a1=0,a2=0;
// setTimeout(()=>{
//   dotAnimateOne2Funs();
// },1000);
dotAnimateOne1Funs();
function dotAnimateOne1Funs(){
  var a,b,c,d=[],e,f=1;
  for(a=0;a<scLenWidth+scLenHeight;a++){
    c=a;d=[],e=a;
    e=(a>=scLenHeight)?scLenHeight-f:a;
    for(b=0;b<e+1;b++){
      d[b] = [c,b];
      c--;
    }
    f--;
    // console.log("d",d);
    dotAnimateOneArr[a] = d;
  }
  // console.log(dotAnimateOneArr);
  
}
function dotAnimateOne2Funs(){
  var a,b,c;
  if(a1<dotAnimateOneArr.length){
    setTimeout(()=>{
      for(a=0;a<dotAnimateOneArr[a1].length;a++){
        // console.log("a",a,a1,dotAnimateOneArr[a1][a],(dotAnimateOneArr[a1][a][0]+dotAnimateOneArr[a1][a][1]*scLenWidth));
        // dotArr[dotAnimateOneArr[a1][a][0]+dotAnimateOneArr[a1][a][1]*scLenWidth].style.boxShadow = "2px 2px 2px rgba(70,70,70,.7)";
        dotArr[dotAnimateOneArr[a1][a][0]+dotAnimateOneArr[a1][a][1]*scLenWidth].innerText = a1;
        // dotArr[dotAnimateOneArr[a1][a][0]+dotAnimateOneArr[a1][a][1]*scLenWidth].style.background = "#f0f";
      }
      a1++;
      dotAnimateOne2Funs();
    },40);
  }
}
/*
var inrgmblock = document.querySelector(".inrgmblock");
var mdotsdecors = document.querySelectorAll(".mdotsdecors");
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

  for(a=0;a<scLenWidth;a++){
    c=a;
    for(b=0;b<a+1;b++){
      c--;
    }
  }
  dotArr[0+0*scLenWidth].style.backgroundColor = "#ff0";

  dotArr[1+0*scLenWidth].style.backgroundColor = "#f00";
  dotArr[0+1*scLenWidth].style.backgroundColor = "#f00";

  dotArr[2+0*scLenWidth].style.backgroundColor = "#00f";
  dotArr[1+1*scLenWidth].style.backgroundColor = "#00f";
  dotArr[0+2*scLenWidth].style.backgroundColor = "#00f";

  dotArr[3+0*scLenWidth].style.backgroundColor = "#0ff";
  dotArr[2+1*scLenWidth].style.backgroundColor = "#0ff";
  dotArr[1+2*scLenWidth].style.backgroundColor = "#0ff";
  dotArr[0+3*scLenWidth].style.backgroundColor = "#0ff";
*/

