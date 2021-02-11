import { addCarCard } from "./car";

// Create a new car
// 1 Add listener to the form
// 2 Prevent default behaviour
// 3 Gather all the necessary information
// 4 Send a POST ajax to create the car
// 5 Add car card to the list

const prepareForm = (garage) => {
  const createCar = (event) => {
    event.preventDefault();
    const carInfo = {
      brand: document.getElementById("brand").value,
      model: document.getElementById("model").value,
      plate: document.getElementById("plate").value,
      owner: document.getElementById("owner").value
    };
    fetch(`https://wagon-garage-api.herokuapp.com/${garage}/cars`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(carInfo)
    })
      .then(response => response.json())
      .then((data) => {
        if (data.errors) {
          alert(JSON.stringify(data.errors));
        } else {
          addCarCard(carInfo);
        }
      });
  };

  const form = document.getElementById("new-car");
  form.addEventListener("submit", createCar);

};

export { prepareForm };
