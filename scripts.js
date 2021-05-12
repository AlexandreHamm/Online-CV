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

