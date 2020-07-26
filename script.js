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
      statusCheck.addEventListener("change", function(event) {
         document.querySelector("#pilotStatus").innerHTML = `${nameInput.value} is ready.`;
         document.querySelector("#copilotStatus").innerHTML = `${copilotInput.value} is ready.`;
         if (fuelInputToNum < 10000) {
            document.querySelector("#faultyItems").style.visibility = 'visible';
            document.querySelector("#fuelStatus").innerHTML = "Not enough fuel for journey.";
            document.querySelector("#launchStatus").innerHTML = "Shuttle not ready for launch.";
            document.querySelector("#launchStatus").style.color = 'red';
         }
         if (cargoMassToNum > 10000) {
            document.querySelector("#faultyItems").style.visibility = 'visible';
            document.querySelector("#cargoStatus").innerHTML = "Cargo mass too high for take off.";
            document.querySelector("#launchStatus").innerHTML = "Shuttle not ready for launch.";
            document.querySelector("#launchStatus").style.color = 'red';
         }
         else {
            document.querySelector("#launchStatus").innerHTML = "Shuttle is ready for launch.";
            document.querySelector("#launchStatus").style.color = 'green'; 
         }
      });
    let target = document.querySelector("#missionTarget");
      target.addEventListener("load", function() {
         fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
            response.json().then(function(json) {
               document.getElementById("planetName").innerHTML += `${json.name}
               `;
               document.getElementById("diameter").innerHTML += `${json.diameter}`;
               document.getElementById("star").innerHTML += `${json.star}`;
               document.getElementById("distance").innerHTML += `${json.distance}`;
               document.getElementById("moons").innerHTML += `${json.distance}`;
               document.getElementById("img").src = `${json.image}`;
            });
         });
      });
   });