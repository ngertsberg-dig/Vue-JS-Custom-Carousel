$(window).resize(function(){
  marginilize();
});
function marginilize(){
  var marginTop = $('.intro').height() - $(".navbar").height();
  $(".three-boxes-container").css({"marginTop":marginTop})
}
window.onload = function() {
  marginilize();
};

function droneAnimation(){
TweenMax.to($("#drone"),1,{y:-50,onComplete:leftRotate})
function leftRotate(){
TweenMax.to($("#drone"),1,{x:-100,rotation:45,onComplete:barrelRoll})

}
function barrelRoll(){
TweenMax.to($("#drone"),0.8,{rotation:405,onComplete:rightRotate})
}
function rightRotate(){
TweenMax.to($("#drone"),1,{x:100,rotation:315,onComplete:rightBarrelRoll})
}
function rightBarrelRoll(){
TweenMax.to($("#drone"),0.8,{rotation:-45,onComplete:land})
}
function land(){
TweenMax.to($("#drone"),0.8,{rotation:0,x:0,y:0})
}
}

function fiftyFifty(box1,box2){
//box 2 is target box that you want equal heights to

var targetBox = $(box2).height();
$(box1).css({"height":targetBox});
$(window).resize(function(){
  fiftyFifty(box1,box2)
})

}
