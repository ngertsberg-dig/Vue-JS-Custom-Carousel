Vue.component("navbar",{
  template:`<nav class="navbar navbar-default " role="navigation">

        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class = 'logo'><a class="navbar-brand" href="#"><img src = 'http://via.placeholder.com/180x90'></a></div>

        <div class="collapse navbar-collapse" id="navbar-collapse-1">

          <ul class="nav navbar-nav navbar-left">
            <li><a href="#">Menu</a></li>
            <li><a href="#">Menu</a></li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">Link</a></li>

            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown <b class="caret"></b></a>
              <ul class="dropdown-menu">
                <li><a href="#">Action</a></li>
                <li><a href="#">Another action</a></li>
                <li><a href="#">Something else here</a></li>
                <li class="divider"></li>
                <li><a href="#">Separated link</a></li>
              </ul>
            </li>
          </ul>
        </div>
    </nav>`
})
function animationSlideDown(){
  var slideList = [];
  $(".slide").each(function(){
  var thisClass = $(this).attr("class").split(' ')[0];
  slideList.push(thisClass);

  });
  var slideListLength = slideList.length;
  for(var x = 0; x != slideListLength ;x++){
  // IMAGE SLIDE DOWN DELAY
  var delay = [0,0.4,0.8]
  TweenMax.from( "." + slideList[x], 0.5, {autoAlpha:0, y: -500,delay:delay[x]} );
  }
  }
Vue.component('slide-text',{
    template:`<div class = "hero-header"><div class = "tite"><h1>{{title}}</h1></div><div class = "subtitle"><h3>{{subtitle}}</h3></div></div>`,
    props:['title','subtitle']
  })
