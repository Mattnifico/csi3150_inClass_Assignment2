function appearance1() {
  var b1 = document.getElementById("b1Display");
  if (b1.style.display === "none") {
    b1.style.display = "block";
  } else {
    b1.style.display = "none";
  }
}

function appearance2() {
  var b2 = document.getElementById("b2Display");
  if (b2.style.display === "none") {
    b2.style.display = "block";
  } else {
    b2.style.display = "none";
  }
}

function appearance3() {
  var b3 = document.getElementById("b3Display");
  if (b3.style.display === "none") {
    b3.style.display = "block";
  } else {
    b3.style.display = "none";
  }
}

function disappearance1() {
    var b1 = document.getElementById("b1Display");
    if (b1.style.display === "block") {
      b1.style.display = "none";
    } else {
      b1.style.display = "block";
    }
  }
  
  function disappearance2() {
    var b2 = document.getElementById("b2Display");
    if (b2.style.display === "block") {
      b2.style.display = "none";
    } else {
      b2.style.display = "block";
    }
  }
  
  function disappearance3() {
    var b3 = document.getElementById("b3Display");
    if (b3.style.display === "block") {
      b3.style.display = "none";
    } else {
      b3.style.display = "block";
    }
  }

document.getElementById("b1").addEventListener("click", appearance1);
document.getElementById("b2").addEventListener("click", appearance2);
document.getElementById("b3").addEventListener("click", appearance3);

document.getElementById("hideResult1").addEventListener("click", disappearance1);
document.getElementById("hideResult2").addEventListener("click", disappearance2);
document.getElementById("hideResult3").addEventListener("click", disappearance3);

function init() {
  appearance1();
  appearance2();
  appearance3();
  disappearance1();
  disappearance2();
  disappearance3();
}

init();