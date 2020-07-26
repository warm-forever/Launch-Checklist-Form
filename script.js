// checking the form field
   window.addEventListener("load", function() {
      let form = document.querySelector("#launchForm");
      form.addEventListener("submit", function(event) {
         let nameInput = document.querySelector("input[name=pilotName]");
         let copilotInput = document.querySelector("input[name=copilotName]");
         let fuelInput = document.querySelector("input[name=fuelLevel]");
         let fuelInputToNum = Number(fuelInput);
         let cargoMassInput = document.querySelector("input[name=cargoMass]");
         let cargoMassToNum = Number(cargoMassInput);
         if (nameInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || cargoMassInput.value === "") {
            alert("All fields are required!");
            // stop the form submission
            event.preventDefault();
         }
         if (isNaN(fuelInput.value) === true || isNaN(cargoMassInput.value) === true) {
            alert("Please enter numeric values only.");
            event.preventDefault();
         }
         if (typeof(nameInput.value) !== "string" || typeof(copilotInput.value) !== "string" || typeof(fuelInputToNum) !== "number" || typeof(cargoMassToNum) !== "number") {
            alert("Invalid response. Name field must only contain alphabetic characters. Fuel level and cargo mass must contain numeric characters only.");
            event.preventDefault();
         }
      });
 //checking faulty items
      let statusCheck = document.querySelector("#launchStatusCheck");
      statusCheck.addEventListener("submit", function(event) {
         document.getElementById("pilotStatus").innerHTML = "${nameInput.value} is ready.";
         document.getElementById("copilotStatus").innerHTML = "${copilotInput.value} is ready.";
         if (fuelInputToNum < 10000) {
            document.getElementById("faultyItems").style.display = "visible";
            document.getElementById("fuelStatus").innerHTML = "Not enough fuel for journey.";
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch.";
            document.getElementById("launchStatus").style.color = "red";
         }
         if (cargoMassToNum > 10000) {
            document.getElementById("faultyItems").style.display = "visible";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too high for take off.";
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch.";
            document.getElementById("launchStatus").style.color = "red";
         }
         else {
            document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch.";
            document.getElementById("launchStatus").style.color = "green"; 
         }
      });
   });


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
