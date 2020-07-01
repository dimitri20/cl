

function appearDropdown(){
  document.getElementById("dropdownMenu_language").classList.toggle("show");
}

function  appearSearch(){
  document.getElementById("searchLabel").classList.toggle("show");
}

window.addEventListener('click', function(e){
  var ignoreByClass = document.getElementsByClassName('closeDropdownBar');
  if(document.getElementById('dropdownMenu_language').contains(e.target) || ignoreByClass[0].contains(e.target) || ignoreByClass[1].contains(e.target)){

  } else {
    document.getElementById("dropdownMenu_language").classList.remove("show");
  }

  if (document.getElementById('searchLabel').contains(e.target) || document.getElementById('searchImageaTag').contains(e.target)) {

  } else {
    document.getElementById("searchLabel").classList.remove("show")
  }
});




var i = 0;
const size = window.innerWidth;
const backgroundImage = document.getElementsByClassName("background_image");
const imageNum = backgroundImage.length;
const carouselCircle = document.getElementsByClassName("carouselCircle");
document.getElementsByClassName("imagesContainer")[0].style.width = imageNum*100 + '%';
carouselCircle[0].style.border = '1px solid #ffffff';



function  changeImage(){
  if (i == imageNum) {
    for(var k = 0; k < imageNum; k++){
      backgroundImage[k].style.transition = "none";
      backgroundImage[k].style.transform = 'translateX(' + (size * k) + 'px)';
    }
    i = 0;
  }

  for(var k = 0; k < imageNum; k++){
    backgroundImage[k].style.transition = "transform 1.5s ease-in-out";
    backgroundImage[k].style.transform = 'translateX(' + (-size * i) + 'px)';
    if (k != i) {
      carouselCircle[k].style.border = 'none';
    }
  }
  carouselCircle[i].style.border = '1px solid #ffffff';

  i++;
}

function currentImage(n){
  i = n;
  return n;
}

var slideShow = setInterval(changeImage, 5000);
setInterval(changeImage, 5000);
