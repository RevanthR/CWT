function myFunction() {
    var x = document.getElementById("sub-nav");
    if (x.className === "sub-nav") {
      x.className += " responsive";
    } else {
      x.className = "sub-nav";
    }
  }