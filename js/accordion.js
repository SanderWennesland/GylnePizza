window.onload = function() {

    let accordion = document.getElementsByClassName("accordion");
    let i;
    
    for (i = 0; i < accordion.length; i++) {
      accordion[i].addEventListener("click", function() {     
        this.classList.toggle("active");
        let panel = this.nextElementSibling;
        if (panel.style.display === "flex") {
          panel.style.display = "none";
        } else {
          panel.style.display = "flex";
        }
      });
    }};

