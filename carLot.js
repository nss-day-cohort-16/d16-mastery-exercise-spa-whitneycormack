console.log("hello carLot js here" );


var CarLot = (function () {
  var inventory = [];

  return {
    getInventory: function () {
      return inventory;
      console.log("inventory", inventory );
    },

    loadInventory: function (callback) {
      var inventoryLoader = new XMLHttpRequest();
        inventoryLoader.open("GET", "inventory.json");
        inventoryLoader.send();

      inventoryLoader.addEventListener("load", function () {
        inventory = JSON.parse(event.target.responseText).cars; /* <-why .cars?*/
        callback(inventory);

      });
    }
  };

})();


