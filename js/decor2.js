var mainbody = document.querySelector(".mainbody");
var mdotsdecors = document.querySelectorAll(".mdotsdecors");
var d3box = document.querySelector(".d3box");
var cbtn1 = document.querySelector(".cbtn1");
var cbtn2 = document.querySelector(".cbtn2");
var scWidth=window.outerWidth,scHeight=window.outerHeight,len=40;
var height=Math.floor(scHeight/len)+3,width=Math.floor(scWidth/len)+2;
var color = ["ff4444","ffbb33","00C851","33b5e5","2BBBAD","4285F4","aa66cc","FF8800","007E33","0099CC"],colorlen=0;
var boxArr=[],boxCnt=0;
var aniA1Arr=[],aniA1Cnt=0;
var a1Arr=[],a2Arr=[],aniArr1=[],aniCnt1=0,aniCnt2=0;
var ar1=[],ar2=[],ar3=[],ar4=[];
var str1="",str2="",str3="";
var limit1=0,limit2=0,limit3=0;
var tinterval=40;
var cbtn1bool = true;
cbtn1.addEventListener('click',()=>{
  if(cbtn1bool){
    mainbody.requestFullscreen();
    cbtn1bool=false;
  }
  else if(!cbtn1bool){
    mainbody.exitFullscreen();
    cbtn1bool=true;
  }
});

createbox();
function createbox(){
  var a,b;
  d3box.style.height = height*len + "px";
  d3box.style.width = width*len + "px";
  for(a=0;a<height;a++){
    for(b=0;b<width;b++){
      boxArr[boxCnt] = document.createElement('div');
      // boxArr[boxCnt].innerHTML = boxCnt;
      boxArr[boxCnt].style.height = len + "px";
      boxArr[boxCnt].style.width = len + "px";
      boxArr[boxCnt].style.border = "1px solid #000";
      boxArr[boxCnt].style.position = "absolute";
      boxArr[boxCnt].style.display = "flex";
      boxArr[boxCnt].style.justifyContent = "center";
      boxArr[boxCnt].style.alignItems = "center";
      boxArr[boxCnt].style.top = len*a-a + "px";
      boxArr[boxCnt].style.left = len*b-b + "px";
      d3box.appendChild(boxArr[boxCnt]);
      boxCnt++;
    }
  }
}
createArr();
function createArr(){
  var a,b,c=1,d,e=0,f=[],g,h=height;i=[],j=0,k=0,l=0,m=[],n=0,o=[],w=width;
  for(a=0;a<h+w-1;a++){
    str1="";str2="";f=[];g=0;m=[],n=0,d=(a<h?a+1:h);e=(a>w-1?++e:0);
    for(b=e;b<d;b++){str1=str1+""+b;f[g]=b;g++;}
    for(j=k;j>=l;j--){str2=str2+j;m[n]=j;n++;}
    // console.table((a<10)?"0"+a:""+a,str2,(str1.length<4?"\t":""),"\t",str1);
    k=(k<w-1?++k:k);l=(a<h-1?0:++l);a1Arr[a]=f;a2Arr[a]=m,c=a>8?++c:c;
  }
  // console.log(a1Arr,a2Arr);
}
cbtn2.addEventListener('click',()=>{
  animateFuns();
});
// animateFuns();
function animateFuns(){
  var a,b,c;
  if(aniCnt1<a1Arr.length&&colorlen!=color.length){
    for(a=0;a<a1Arr[aniCnt1].length;a++){
      boxArr[a2Arr[aniCnt1][a]+a1Arr[aniCnt1][a]*width].style.background = "#"+color[colorlen];
    }
    aniCnt1++;
    setTimeout(()=>{animateFuns();},tinterval);
  }
  else{
    aniCnt1=0;
    colorlen=colorlen!=color.length?++colorlen:0;
    animateFuns();
  }
}
// setTimeout(()=>{
//   animateFuns1();
// },tinterval-10);
function animateFuns1(){
  var a,b,c;
  if(aniCnt2<a1Arr.length&&colorlen!=color.length){
    for(a=0;a<a1Arr[aniCnt2].length;a++){
      boxArr[a2Arr[aniCnt2][a]+a1Arr[aniCnt2][a]*width].style.background = "#"+color[colorlen];
      // boxArr[a2Arr[aniCnt2][a]+a1Arr[aniCnt2][a]*width].style.boxShadow = "2px 2px 3px rgba(100,100,100,0)";
      // boxArr[a2Arr[aniCnt2][a]+a1Arr[aniCnt2][a]*width].innerHTML = aniCnt2;
      console.log(aniCnt2,a1Arr[aniCnt2],a1Arr[aniCnt2][a]);
    }
    console.log("aniCnt2",aniCnt2);
    aniCnt2++;
    setTimeout(()=>{animateFuns1();},tinterval);
  }else{
    console.log(colorlen);
    aniCnt2=0;
    colorlen++;
    
    animateFuns1();
  }
}
/*

function createArr(){
  var a,b,c=1,d,e=0;
  for(a=0;a<h+w-1;a++){
    str1="";
    d=(a<8)?(a<h?a+1:h):(h-c);
    d=(a<h?a+1:h);
    e=(a>w-1?++e:0);
    for(b=e;b<d;b++){
      str1=str1+""+b;
    }
    console.table((a<10)?"0"+a:""+a,str1);
    if(a>=8){c++;}
    // console.log(a,e);
  }
  // e=(5<6?(++e):99);
  
  console.log(e);
}
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
*/