function navDrop() {
    var x = document.getElementById("myNav");
    if (x.className === "nav") {
      x.className += " responsive";
    } else {
      x.className = "nav";
    }
  }