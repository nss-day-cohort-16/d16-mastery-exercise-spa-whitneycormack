"use strict";


var CarLot = (function(oldCarLot) {
  oldCarLot.activateEvents = function() {
      var carCards = document.getElementsByClassName("carCards");
      var userInput = document.getElementById('input');

      for (var i = 0; i < carCards.length; i++) {

        carCards[i].addEventListener("click", function() {

          // grabbing all cards & removing borders
          CarLot.removeBorder(carCards);

          CarLot.addBorder(this, "#4286F4");

          // clear user input value
          userInput.value = "";
          // put cursor in input field
          userInput.focus();


          // mirror text
          mirrorText(userInput, this);

        })
      }
    }

    // end of activate events function

    function mirrorText (userInput, eachCarCard) {
      console.log("userInput", userInput);
      console.log("eachCarCard", eachCarCard);

      userInput.addEventListener("keyup", function() {
        if (eachCarCard.classList.contains("borderColor")) {
          eachCarCard.querySelector("p").innerHTML = userInput.value;
        }
      })
    }


  return oldCarLot;

})(CarLot || {});


