"use strict";

var CarLot = (function (oldCarLot) {

  oldCarLot.addBorder = function(element, color) {
    element.classList.add("borderColor");
  }

    oldCarLot.removeBorder = function(allTheCars) {
      for (var i = 0; i < allTheCars.length; i++) {
        if (allTheCars[i].classList.contains("borderColor")) {
            allTheCars[i].classList.remove("borderColor");
        }
      }
    }

  return oldCarLot;

})(CarLot || {});