


var x=document.getElementById("demo");
x.addEventListener("mouseover",overFun);
x.addEventListener("mouseout",outFun);

function overFun(){
    document.getElementById("demo2").style.display="block";
    document.getElementById("dem").style.color="green"
}
function outFun(){
    document.getElementById("demo2").style.display="none";
    document.getElementById("dem").style.color="black"

}

var y=document.getElementById("demo3");
y.addEventListener("mouseover" ,overFun1);
y.addEventListener("mouseout",outFun2);

function overFun1(){
    document.getElementById("demo4").style.display="block";
    document.getElementById("dem1").style.color="green"
}
function outFun2(){
    document.getElementById("demo4").style.display="none";
    document.getElementById("dem1").style.color="black"

}

var z=document.getElementById("demo5");
z.addEventListener("mouseover",overFun3);
z.addEventListener("mouseout",outFun4);

function overFun3(){
    document.getElementById("demo6").style.display="block";
    document.getElementById("dem2").style.color="green"
    
}
function outFun4(){
    document.getElementById("demo6").style.display="none";
    document.getElementById("dem2").style.color="black"

}


var p=document.getElementById("demo7");
p.addEventListener("mouseover",overfun5);
p.addEventListener("mouseout",outfun6);

function overfun5(){
 document.getElementById("demo8").style.display="block"
 document.getElementById("dem3").style.color="green"

}
function outfun6(){
    document.getElementById("demo8").style.display="none";
    document.getElementById("dem3").style.color="black"

}


var q=document.getElementById("demo9");
q.addEventListener("mouseover",overfun7);
q.addEventListener("mouseout",outfun8);

function overfun7(){
 document.getElementById("demo10").style.display="block";
 document.getElementById("dem4").style.color="green"

}
function outfun8(){
    document.getElementById("demo10").style.display="none";
    document.getElementById("dem4").style.color="black"

}

var k=document.getElementById("demo11");
k.addEventListener("mouseover",overfun9);
k.addEventListener("mouseout",outfun10);

function overfun9(){
 document.getElementById("demo12").style.display="block"
 document.getElementById("dem5").style.color="green"

}
function outfun10(){
    document.getElementById("demo12").style.display="none";
    document.getElementById("dem5").style.color="black"

}






// function mouseOver(x){
//     x.style.color="red";
// }
// function mouseOut(x){
//     x.style.color="black";
// }