

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
