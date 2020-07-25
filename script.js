// Write your JavaScript code here!

<script>
   window.addEventListener("load", function() {
      let form = document.querySelector("launchForm");
      form.addEventListener("submit", function(event) {
         let nameInput = document.querySelector("input[name=pilotName]");
         let copilotInput = document.querySelector("input[name=copilotName]");
         let fuelInput = document.querySelector("input[liters=fuelLevel]");
         let cargoMassInput = document.querySelector("input[kilograms=cargoMass]")
         if (nameInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || cargoMassInput.value === "") {
            alert("All fields are required!");
            // stop the form submission
            event.preventDefault();
         }
         if (isNaN(fuelInput.value) === true || isNaN(cargoMassInput.value) === true) {
            alert("Please enter numeric values only.");
            event.preventDefault();
         }
         if (typeof(nameInput.value) != "string" || typeof(copilotInput.value) != "string" || typeof(fuelInput.value) != "number" || typeof(cargoMassInput) != "number") {
            alert("Invalid response. Name field must only contain alphabetic characters. Fuel level and cargo mass must contain numeric characters only.")
         }
      });
   });
</script>

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
