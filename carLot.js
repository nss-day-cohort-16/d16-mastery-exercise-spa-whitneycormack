"use strict";

// this iife gets the info
var CarLot = (function () {
  var inventory = [];

  return {
    getInventory: function () {
      return inventory;
    },

    loadInventory: function (populatePageFromQuiz) {
      var inventoryLoader = new XMLHttpRequest();
        inventoryLoader.open("GET", "inventory.json");
        inventoryLoader.send();

      inventoryLoader.addEventListener("load", function () {
        inventory = JSON.parse(event.target.responseText).cars; /* <-why .cars?*/
        populatePageFromQuiz(inventory);

      console.log("inventory", inventory );
      });
    }
  }
})(CarLot || {});


