"use strict";
  // Loop over the inventory and populate the page

function populatePage (inventory) {
  var output = document.getElementById("output");


for (var i = 0; i < inventory.length; i++ ) {

  // create elements
  var article = document.createElement("article");
  var newColumn = document.createElement("div");
  newColumn.classList.add("col-sm-4", "border", "carCards");
  newColumn.id = `cars${i}`;


  // get content
  var getInfo = inventory[i];


  // show data
  newColumn.innerHTML =
        `<h2>${getInfo.make} ${getInfo.model}</h2>
        <h3>${getInfo.year} | ${getInfo.price}</h3>
        <p id="desc${i}">${getInfo.description}</p>`;


  if (i % 3 === 0) {
    var newRow = document.createElement("div");
    newRow.classList.add("row");
    article.appendChild(newRow);
  }

  newRow.appendChild(newColumn);
  output.appendChild(article);

  // Now that the DOM is loaded, establish all the event listeners needed

  }; /* end of for loop */


  CarLot.activateEvents();

}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);






