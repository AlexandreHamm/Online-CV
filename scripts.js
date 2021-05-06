// video responsive
function myFunction(x) {
    if (x.matches) { // If media query matches
        document.querySelector('video').playbackRate = 1;
    } else {
        document.querySelector('video').playbackRate = 1;
    }
  }

var x = window.matchMedia("(max-width: 1000px)")
myFunction(x) // Call listener function at run time
x.addListener(myFunction) // Attach listener function on state changes

window.onload = function() {
// scroll tab fix
var y = document.getElementById('ex1-pills-1');
// Basically `element_to_scroll_to` just have to be a reference
// to any DOM element present on the page
// Then:
y.onclick = function(){
    return false;
    }
}

// TEST SCROLL DOWN

