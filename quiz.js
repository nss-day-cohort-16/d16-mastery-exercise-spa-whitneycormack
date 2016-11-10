console.log("hey quiz js is here!");


function populatePage (inventory) {
  // Loop over the inventory and populate the page
  var carOutput = document.getElementById('car-container');
  var carHTML = "";

  // console.log("inventory", inventory);

  for (var i = 0; i < inventory.length; i++) {
    var currentCar = inventory[i];
    console.log("currentCar", currentCar);

    carHTML += `<div id="car-card" class="col-md-4"><h2>${currentCar.make}</h2>`;
    carHTML += `<h3>${currentCar.model}</h3>`;
    carHTML += `<h4>${currentCar.year}</h4>`;
    carHTML += `<h5>${currentCar.price}</h5>`;
    carHTML += `<p>${currentCar.description}</p></div>`;
  }

carOutput.innerHTML += carHTML;










  // Now that the DOM is loaded, establish all the event listeners needed

  // CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);




























