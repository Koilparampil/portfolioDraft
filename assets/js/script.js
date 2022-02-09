// Get the modal
var modal = document.getElementById("PhoneModal");
var Emodal = document.getElementById("EmailModal");
// Get the button that opens the modal
var btn = document.getElementById("myBtn");
var btn2 = document.getElementById("Btn2");
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}
btn2.onclick = function() {
    Emodal.style.display = "block";
  }
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  Emodal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
window.onclick = function(event) {
    if (event.target == Emodal) {
      Emodal.style.display = "none";
    }
  }