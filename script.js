// checking the form field
window.addEventListener("load", function() {
   let form = document.querySelector("#launchForm");
   form.addEventListener("submit", function(event) {
      let nameInput = document.querySelector("input[name=pilotName]");
      let nameInputToNum = Number(nameInput.value);
      let copilotInput = document.querySelector("input[name=copilotName]");
      let copilotToNum = Number(copilotInput.value);
      let fuelInput = document.querySelector("input[name=fuelLevel]");
      let fuelInputToNum = Number(fuelInput.value);
      let cargoMassInput = document.querySelector("input[name=cargoMass]");
      let cargoMassToNum = Number(cargoMassInput.value);
      if (nameInput.value === "" || copilotInput.value === "" || fuelInput.value === "" || cargoMassInput.value === "") {
         alert("All fields are required!");
         // stop the form submission
         event.preventDefault();
      }
      if (isNaN(fuelInput.value) === true || isNaN(cargoMassInput.value) === true) {
         alert("Please enter numeric values only.");
         event.preventDefault();
      }
      if (isNaN(nameInputToNum) === false || isNaN(copilotToNum) === false) {
         alert("Please enter alphabetic values only.");
         event.preventDefault();
      }
      //checking faulty items
              document.querySelector("#pilotStatus").innerHTML = `${nameInput.value} is ready.`;
              document.querySelector("#copilotStatus").innerHTML = `${copilotInput.value} is ready.`;
              if (fuelInputToNum < 10000) {
                 document.querySelector("#faultyItems").style.visibility = 'visible';
                 document.querySelector("#fuelStatus").innerHTML = "Not enough fuel for journey.";
                 document.querySelector("#launchStatus").innerHTML = "Shuttle not ready for launch.";
                 document.querySelector("#launchStatus").style.color = 'red';
              }
              if (fuelInputToNum > 10000) {
               document.querySelector("#fuelStatus").innerHTML = "Fuel level high enough for launch.";
              }
              if (cargoMassToNum > 10000) {
                 document.querySelector("#faultyItems").style.visibility = 'visible';
                 document.querySelector("#cargoStatus").innerHTML = "Cargo mass too high for take off.";
                 document.querySelector("#launchStatus").innerHTML = "Shuttle not ready for launch.";
                 document.querySelector("#launchStatus").style.color = 'red';
              }
              if (cargoMassToNum < 10000) {
               document.querySelector("#cargoStatus").innerHTML = "Cargo mass low enough for launch.";
              }
               if (fuelInputToNum > 10000 && cargoMassToNum < 10000) {
                 document.querySelector("#launchStatus").innerHTML = "Shuttle is ready for launch.";
                 document.querySelector("#launchStatus").style.color = 'green'; 
              }
              event.preventDefault();
   });

   fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
      response.json().then(function(json) {

         console.log(json)
         document.getElementById("planetName").innerHTML += `${json[5].name}
         `;
         document.getElementById("diameter").innerHTML += `${json[5].diameter}`;
         document.getElementById("star").innerHTML += `${json[5].star}`;
         document.getElementById("distance").innerHTML += `${json[5].distance}`;
         document.getElementById("moons").innerHTML += `${json[5].distance}`;
         document.getElementById("img").src = `${json[5].image}`;
      });
   });
});