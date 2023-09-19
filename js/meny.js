function myPizza() {
    var pizza = document.getElementById("pizza");
    var drikke = document.getElementById("drikke");
    if (pizza.style.display === "") {
      pizza.style.display = "";
      drikke.style.display = "none";
    } else if (pizza.style.display === "none") {
      pizza.style.display = "";
      drikke.style.display = "none";
    }else {
      pizza.style.display = "";
    }
  }

  function myDrikke() {
    var pizza = document.getElementById("pizza");
    var drikke = document.getElementById("drikke");
    if (drikke.style.display === "none") {
      drikke.style.display = "";
      pizza.style.display = "none";
    } else if (drikke.style.display === "") {
      drikke.style.display = "";
      pizza.style.display = "none";
    }else {
      drikke.style.display = "block";
    }
  }